"use client";

import React, { FC } from "react";
import {Controller} from "react-hook-form";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";
import { Button, InputField, Select, TextArea } from "@/shared/ui";
import {
   cityFilter,
   currencies,
   experienceFilter,
   graphicsFilter,
   SELECT_TYPES,
   ValidationsSchemasService
} from "@/shared/lib";

import {useAddResume} from "../model/useAddResume";
import {RESUME_FORM_NAMES} from "../model/consts";
import styles from "./styles.module.scss";

const ResumeForm: FC = () => {
   const theme = useThemeStore((state) => state.theme);

   const {
      register,
      handleSubmit,
      isLoading,
      isError,
      isValid,
      control,
      errors
   } = useAddResume()

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

         <div className={styles.form__btns}>
            <Button disabled={!isValid}>{isLoading ? "Загрузка..." : "Разместить резюме"}</Button>
         </div>
      </form>
   );
};

export default ResumeForm;
