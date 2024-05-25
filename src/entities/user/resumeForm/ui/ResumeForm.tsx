"use client";

import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import {
   cityFilter,
   currencies,
   experienceFilter,
   graphicsFilter,
} from "@/widgets/user/createVacancy";
import { useThemeStore } from "@/shared/themeStore";
import { Button, InputField, Select, TextArea } from "@/shared/ui";

import { ResumeFormProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";

const ResumeForm: FC<ResumeFormProps> = ({ type, addResume, isLoading }) => {
   const theme = useThemeStore((state) => state.theme);

   const [graphicSelected, setGraphicSelected] = useState(graphicsFilter[0]);
   const [citySelect, setCitySelect] = useState(cityFilter[0]);
   const [selectCurrency, setSelectCurrency] = useState(currencies[0]);

   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
   } = useForm();

   const handleCreateSubmit = (data: any) => {
      const readyData = { ...data };
      readyData.schedule = graphicSelected.postValue;
      readyData.location = citySelect.postValue;

      if (readyData) {
         addResume(readyData);
      }
   };

   return (
      <form
         onSubmit={handleSubmit(handleCreateSubmit)}
         className={clsx(styles.form, styles[theme])}>
         <div className={styles.form__row}>
            <h4 className="h4">Название должности</h4>
            <InputField
               {...register("job_title", { required: true })}
               classname={styles.form__input}
               disabled={false}
               isBordered={true}
               type="text"
            />
            <h4 className="h4">Напишите о себе</h4>
            <div className={styles.form__block}>
               <TextArea
                  {...register("about_me", { required: true })}
                  classname={styles.form__area}
                  type="default"
               />
            </div>

            <div className={styles.form__block}>
               <h4 className="h4">График работы</h4>
               <Select
                  selected={graphicSelected}
                  setSelected={setGraphicSelected}
                  data={graphicsFilter}
                  type="vacancy"
               />
            </div>

            <div className={styles.form__block}>
               <h4 className="h4">Город</h4>
               <Select
                  selected={citySelect}
                  setSelected={setCitySelect}
                  data={cityFilter}
                  type="vacancy"
               />
            </div>
            <div className={styles.form__block}>
               <h4 className="h4">Желаемая заработная плата</h4>
               <div className={styles.form__salary}>
                  <div className={styles.form__salary}>
                     <InputField
                        {...register("min_salary", { required: true })}
                        classname={styles.form__inputBorder}
                        title="от "
                        type="number"
                     />
                     <InputField
                        {...register("max_salary", { required: true })}
                        classname={styles.form__inputBorder}
                        title="до "
                        type="number"
                     />
                     <div>
                        <Select
                           selected={selectCurrency}
                           setSelected={setSelectCurrency}
                           data={currencies}
                           type="vacancy"
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
                              {...register("experience", { required: true })}
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
