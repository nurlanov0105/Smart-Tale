"use client";
import React, { FC, useState } from "react";
import { Button, InputField, Select, TextArea } from "@/shared/ui";
import { useThemeStore } from "@/shared/themeStore";
import {
   cityFilter,
   currencies,
   experienceFilter,
   graphicsFilter,
   typeSalary,
} from "../model/values.data";
import { useForm } from "react-hook-form";
import { useAddVacancy } from "@/entities/user/vacancyItem";
import { useSubscribed } from "@/shared/lib";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { CreateVacancyProps } from "../model/types";

const CreateVacancy: FC = () => {
   const theme = useThemeStore((state) => state.theme);

   const [graphicSelected, setGraphicSelected] = useState(graphicsFilter[0]);
   const [citySelect, setCitySelect] = useState(cityFilter[0]);

   const {mutate: addVacancy, isPending: isLoading} = useAddVacancy()

   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm({
      mode: "onChange",
      criteriaMode: "all",
      shouldFocusError: true,
   });
   const [selectCurrency, setSelectCurrency] = useState(currencies[0]);

   const handleCreateSubmit = (data: any) => {
      const readyData = { ...data };
      readyData.schedule = graphicSelected.postValue;
      readyData.location = citySelect.postValue;

      if (readyData) {
         addVacancy(readyData);
      }
   };
   return (
      <form
         onSubmit={handleSubmit(handleCreateSubmit)}
         className={clsx(styles.form, styles[theme])}>
         <h4 className="h4">Название должности</h4>
         <div className={styles.form__row}>
            <InputField
               {...register("job_title", { required: true })}
               classname={styles.form__input}
               disabled={false}
               isBordered={true}
               type="text"
            />
            <h4 className="h4">Расскажите про вакансию</h4>
            <div className={styles.form__margin}>
               <TextArea
                  {...register("description", { required: true })}
                  classname={styles.form__area}
                  type="default"
               />
            </div>

            <div className={styles.form__block}>
               <h4 className="h4">График работы</h4>
               <Select
                   //@ts-ignore
                  selected={graphicSelected}
                  setSelected={setGraphicSelected}
                  data={graphicsFilter}
                  type="vacancy"
               />
            </div>

            <div className={styles.form__block}>
               <h4 className="h4">Заработная плата</h4>
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
                         //@ts-ignore
                        selected={selectCurrency}
                        setSelected={setSelectCurrency}
                        data={currencies}
                        type="vacancy"
                     />
                  </div>
               </div>
            </div>

            <div className={styles.form__block}>
               <h4 className="h4">Город</h4>
               <Select
                   //@ts-ignore
                  selected={citySelect}
                  setSelected={setCitySelect}
                  data={cityFilter}
                  type="vacancy"
               />
            </div>
            <div className={styles.form__filter}>
               <h4 className="h4">Опыт работы</h4>

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

         <div className={styles.form__btns}>
            <Button disabled={!isValid}>{isLoading ? "Загрузка..." : "Добавить"}</Button>
         </div>
      </form>
   );
};

export default CreateVacancy;
