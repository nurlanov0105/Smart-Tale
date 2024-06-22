"use client";
import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import {useParams} from "next/navigation";
import clsx from "clsx";
import { GlobalLoading, InputField, Select, TextArea } from "@/shared/ui";
import { useThemeStore } from "@/shared/store/themeStore";
import {
   cityFilter,
   currencies,
   experienceFilter,
   graphicsFilter,
   SELECT_TYPES,
   ValidationsSchemasService,
} from "@/shared/lib";
import { useVacancyDetails } from "../model/useVacancyDetails";
import { useInitialVacancyData } from "../model/useInitialData";
import { VACANCY_FORM_NAMES } from "../model/consts";
import {ErrorMessage} from "@/entities/general/errorMessage";
import {VacancyDetailsTypes} from "../model/types";
import VacancyButtons from "./VacancyButton";
import styles from "./styles.module.scss";

const AdminVacancyDetail = () => {
   const theme = useThemeStore((state) => state.theme);
   const { id } = useParams<{id: string}>();

   const {
      register,
      reset,
      control,
      formState: {errors},
   } = useFormContext<VacancyDetailsTypes>()

   const {
      vacancy,
      handleSubmit,

      isSuccess,
      isLoading,
      isError,
      isSubmitting,
   } = useVacancyDetails(id);

   useInitialVacancyData({ vacancy, reset, isSuccess });

   if (isLoading) return <GlobalLoading type="full" />;
   if (isError) return <ErrorMessage/>;

   return (
      <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
         <h4 className="h4">Название должности</h4>
         <div className={styles.form__row}>
            <InputField
               {...register(VACANCY_FORM_NAMES.job_title, ValidationsSchemasService.titleSchema)}
               classname={styles.form__input}
               isBordered={true}
               type="text"
            />
            <h4 className="h4">Расскажите про вакансию</h4>
            <div className={styles.form__margin}>
               <TextArea
                  {...register(
                     VACANCY_FORM_NAMES.description,
                     ValidationsSchemasService.descriptionSchema
                  )}
                  classname={styles.form__area}
                  type="default"
               />
            </div>
            <div className={styles.form__block}>
               <h4 className="h4">График работы</h4>
               <Controller
                  name={VACANCY_FORM_NAMES.schedule}
                  control={control}
                  defaultValue={graphicsFilter[0]}
                  rules={{ required: "Выберите график работы" }}
                  render={({ field }) => (
                     <Select
                        value={field.value}
                        onChange={field.onChange}
                        data={graphicsFilter}
                        type={SELECT_TYPES.vacancy}
                        error={errors?.schedule?.message}
                     />
                  )}
               />
            </div>

            <div className={styles.form__block}>
               <h4 className="h4">Заработная плата</h4>
               <div className={styles.form__salary}>
                  <InputField
                     {...register(
                        VACANCY_FORM_NAMES.min_salary,
                        ValidationsSchemasService.priceSchema
                     )}
                     classname={styles.form__inputBorder}
                     title="от "
                     type="number"
                  />
                  <InputField
                     {...register(
                        VACANCY_FORM_NAMES.max_salary,
                        ValidationsSchemasService.priceSchema
                     )}
                     classname={styles.form__inputBorder}
                     title="до "
                     type="number"
                  />
                  <div>
                     <Controller
                        name={VACANCY_FORM_NAMES.currency}
                        defaultValue={currencies[0]}
                        control={control}
                        rules={{ required: "Выберите валюту" }}
                        render={({ field }) => (
                           <Select
                              value={field.value}
                              onChange={field.onChange}
                              data={currencies}
                              type={SELECT_TYPES.vacancy}
                              error={errors?.currency?.message}
                           />
                        )}
                     />
                  </div>
               </div>
            </div>

            <div className={styles.form__block}>
               <h4 className="h4">Город</h4>
               <Controller
                  name={VACANCY_FORM_NAMES.location}
                  defaultValue={cityFilter[0]}
                  control={control}
                  rules={{ required: "Выберите город" }}
                  render={({ field }) => (
                     <Select
                        value={field.value}
                        onChange={field.onChange}
                        data={cityFilter}
                        type={SELECT_TYPES.vacancy}
                        error={errors?.location?.message}
                     />
                  )}
               />
            </div>
            <div className={styles.form__filter}>
               <h4 className="h4">Опыт работы</h4>
               {experienceFilter.map(({value, postValue}) => {
                      if (value !== "Не имеет значения"){
                         return (
                             <label key={postValue} className={styles.form__label}>
                                  <span>
                                      <InputField
                                          {...register(VACANCY_FORM_NAMES.experience)}
                                          value={postValue}
                                          isBordered={true}
                                          type="radio"
                                          classname={styles.form__radio}
                                      />
                                  </span>
                                <p>{value}</p>
                             </label>
                         )}
                   })}
            </div>
         </div>

         <VacancyButtons
             isHide={vacancy?.hide}
             isSubmitting={isSubmitting}
             id={id}
         />
      </form>
   );
};

export default AdminVacancyDetail;
