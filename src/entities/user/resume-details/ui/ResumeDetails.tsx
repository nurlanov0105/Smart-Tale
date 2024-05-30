"use client";

import React, { FC } from "react";
import {Controller} from "react-hook-form";
import clsx from "clsx";
import {
   cityFilter,
   currencies,
   experienceFilter,
   graphicsFilter,
} from "@/widgets/user/createVacancy";
import { useThemeStore } from "@/shared/themeStore";
import {GlobalLoading, InputField, Select, TextArea} from "@/shared/ui";
import {SELECT_TYPES, ValidationsSchemasService} from "@/shared/lib";

import {useResumeDetails} from "../model/useResumeDetails";
import {RESUME_FORM_NAMES} from "../model/consts";
import styles from "./styles.module.scss";
import {useInitialResume} from "@/entities/user/resume-details/model/useInitialData";
import ResumeBtns from "@/entities/user/resume-details/ui/ResumeBtns";

const ResumeDetails: FC = () => {
   const theme = useThemeStore((state) => state.theme);

   const {
      handleSubmit,
      isLoading,
      isError,
      isSuccess,
      isSubmitting,
      resume,

      register,
      reset,
      isValid,
      control,
      errors,
      isDirty
   } = useResumeDetails()

   useInitialResume({resume, isSuccess, reset})

   if (isLoading) return <GlobalLoading type="full"/>

   return (
      <form
         onSubmit={handleSubmit}
         className={clsx(styles.form, styles[theme])}>
         <div className={styles.form__row}>
            <h4 className="h4">Название должности</h4>
            <InputField
               {...register(RESUME_FORM_NAMES.job_title, ValidationsSchemasService.titleSchema)}
               classname={styles.form__input}
               isBordered={true}
               type="text"
            />
            <h4 className="h4">Напишите о себе</h4>
            <div className={styles.form__block}>
               <TextArea
                  {...register(RESUME_FORM_NAMES.about_me, ValidationsSchemasService.descriptionSchema)}
                  classname={styles.form__area}
                  type="default"
               />
            </div>

            <div className={styles.form__block}>
               <h4 className="h4">График работы</h4>
               <Controller
                   name={RESUME_FORM_NAMES.schedule}
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
               <h4 className="h4">Город</h4>
               <Controller
                   name={RESUME_FORM_NAMES.location}
                   control={control}
                   defaultValue={cityFilter[0]}
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
            <div className={styles.form__block}>
               <h4 className="h4">Желаемая заработная плата</h4>
               <div className={styles.form__salary}>
                  <div className={styles.form__salary}>
                     <InputField
                        {...register(RESUME_FORM_NAMES.min_salary, ValidationsSchemasService.priceSchema)}
                        classname={styles.form__inputBorder}
                        title="от "
                        type="number"
                     />
                     <InputField
                        {...register(RESUME_FORM_NAMES.max_salary, ValidationsSchemasService.priceSchema)}
                        classname={styles.form__inputBorder}
                        title="до "
                        type="number"
                     />
                     <div>
                        <Controller
                            name={RESUME_FORM_NAMES.currency}
                            control={control}
                            defaultValue={currencies[0]}
                            rules={{ required: "Выберите валюту" }}
                            render={({ field }) => (
                                <Select
                                    value={field.value}
                                    onChange={field.onChange}
                                    data={currencies}
                                    type={SELECT_TYPES.vacancy}
                                    error={errors?.currency?.message}
                                    classname={styles.form__currency}
                                />
                            )}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.form__block}>
               <h4 className="h4">Опыт работы</h4>

               <div className={styles.form__radios}>
                  {experienceFilter.map((item) => (
                     <label key={item.postValue} className={styles.form__label}>
                        <span>
                           <InputField
                              {...register(RESUME_FORM_NAMES.experience, ValidationsSchemasService.requiredSchema)}
                              isBordered={true}
                              type="radio"
                              value={item.value}
                              classname={styles.form__radio}
                           />
                        </span>
                        <p>{item.value}</p>
                     </label>
                  ))}
               </div>
            </div>
         </div>


        <ResumeBtns
            reset={reset}
            isDirty={isDirty}
            isValid={isValid}
            isSubmitting={isSubmitting}
        />
      </form>
   );
};

export default ResumeDetails;
