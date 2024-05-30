"use client";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";

import { showModal } from "@/views/modal";
import { rightsActionsData } from "@/entities/admin/rightAction";
import { RightAction } from "@/entities/admin/rightAction";
import { AdminBack } from "@/entities/admin/adminBack";
import { Button, InputField, PhoneInput, Select } from "@/shared/ui";
import { MODAL_KEYS, ValidationsSchemasService } from "@/shared/lib";
import { useThemeStore } from "@/shared/themeStore";

import { useEmployeeDetails } from "../model/useEmployeeDetails";
import { useInitialEmployeeData } from "../model/useInitialData";
import styles from "./styles.module.scss";
import { RIGHT_ACTIONS } from "@/shared/lib/constants/consts";
// import {useParams} from "next/navigation";

const AdminEmployeesSettings = () => {
   const theme = useThemeStore((state) => state.theme);

   const handleDelete = () => {
      showModal(MODAL_KEYS.deleteEmployee, { slug: "adilet-adilet" });
   };
   // const {slug} = useParams()

   const {
      data,
      isSuccess,
      isError,
      isLoading,
      positions,
      isSuccessPosition,
      isLoadingPosition,
      setValue,

      handleSubmit,
      register,
      control,
      reset,
      watch,
   } = useEmployeeDetails("adilet-adilet");

   useInitialEmployeeData({ reset, data, isSuccess, positions, isSuccessPosition });

   const positionsList = watch("positions");
   const selectedPosition = watch("position");

   useEffect(() => {
      if (selectedPosition) {
         setValue(RIGHT_ACTIONS.ADD_EMPLOYEE, selectedPosition[RIGHT_ACTIONS.ADD_EMPLOYEE]);
         setValue(RIGHT_ACTIONS.CREATE_POSITION, selectedPosition[RIGHT_ACTIONS.CREATE_POSITION]);
         setValue(RIGHT_ACTIONS.DELETE_ORDER, selectedPosition[RIGHT_ACTIONS.DELETE_ORDER]);
         setValue(RIGHT_ACTIONS.UPDATE_ACCESS, selectedPosition[RIGHT_ACTIONS.UPDATE_ACCESS]);
         setValue(RIGHT_ACTIONS.REMOVE_EMPLOYEE, selectedPosition[RIGHT_ACTIONS.REMOVE_EMPLOYEE]);
         setValue(RIGHT_ACTIONS.UPDATE_ORDER, selectedPosition[RIGHT_ACTIONS.UPDATE_ORDER]);
         setValue(RIGHT_ACTIONS.REMOVE_POSITION, selectedPosition[RIGHT_ACTIONS.REMOVE_POSITION]);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedPosition]);

   return (
      <form onSubmit={handleSubmit} className={styles[theme]}>
         <AdminBack title="Назад" />
         <div className={styles.form}>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Личные данные</legend>
               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField
                        {...register("name", ValidationsSchemasService.titleSchema)}
                        title="Имя"
                        disabled={true}
                     />
                     <InputField
                        {...register("lastName", ValidationsSchemasService.titleSchema)}
                        title="Фамилия"
                        disabled={true}
                     />
                  </div>
                  <InputField
                     {...register("patronymic", ValidationsSchemasService.titleSchema)}
                     title="Отчество"
                     disabled={true}
                  />
               </div>
            </fieldset>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Контактные данные</legend>

               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField
                        {...register("email", ValidationsSchemasService.emailSchema)}
                        title="Почта"
                        disabled={true}
                        isLoading={isLoading}
                     />
                     <PhoneInput
                        classname={styles.form__phoneNumber}
                        control={control}
                        isDisabled={true}
                     />
                  </div>
               </div>
            </fieldset>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Должность сотрудника</legend>
               <Controller
                  control={control}
                  rules={{ required: true }}
                  name="position"
                  render={({ field }) => (
                     <Select
                        isLoading={isLoadingPosition}
                        value={field.value}
                        onChange={field.onChange}
                        data={positionsList}
                        title="Должность"
                        type="default"
                     />
                  )}
               />

               <div className={styles.form__wrapper}></div>
            </fieldset>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Права доступа</legend>
               <ul className={styles.form__list}>
                  {rightsActionsData.map((action) => (
                     <RightAction
                        register={register}
                        action={action}
                        key={action.title}
                        isDisabled={true}
                     />
                  ))}
               </ul>
            </fieldset>
         </div>
         <div className={styles.form__btn}>
            <Button type="button" onClick={handleDelete} className="btn_danger">
               Удалить сотрудника
            </Button>
            <Button type="submit">Сохранить</Button>
         </div>
      </form>
   );
};

export default AdminEmployeesSettings;
