"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Controller } from "react-hook-form";

import { showModal } from "@/views/modal";
import { RightAction, rightsActionsData } from "@/entities/admin/rightAction";
import { AdminBack } from "@/entities/admin/adminBack";
import { Button, InputField, PhoneInput, Select } from "@/shared/ui";
import { MODAL_KEYS, ValidationsSchemasService } from "@/shared/lib";
import { useThemeStore } from "@/shared/themeStore";
import { useInitialRights } from "@/widgets/admin/employeesForm";

import { useEmployeeDetails } from "../model/useEmployeeDetails";
import { useInitialEmployeeData } from "../model/useInitialData";
import { EMPLOYEE_SETTINGS_NAMES } from "../model/helper";
import styles from "./styles.module.scss";

const AdminEmployeesSettings = () => {
   const theme = useThemeStore((state) => state.theme);

   const { slug } = useParams();
   const handleDelete = () => {
      showModal(MODAL_KEYS.deleteEmployee, { slug: slug.toString() });
   };

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
   } = useEmployeeDetails(slug.toString());

   useInitialEmployeeData({ reset, data, isSuccess, positions, isSuccessPosition });

   const positionsList = watch(EMPLOYEE_SETTINGS_NAMES.positions);
   const selectedPosition = watch(EMPLOYEE_SETTINGS_NAMES.position);

   const { actions } = useInitialRights({ data: positions, position: selectedPosition });

   return (
      <form onSubmit={handleSubmit} className={styles[theme]}>
         <AdminBack title="Назад" />
         <div className={styles.form}>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Личные данные</legend>
               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField
                        {...register(
                           EMPLOYEE_SETTINGS_NAMES.name,
                           ValidationsSchemasService.titleSchema
                        )}
                        title="Имя"
                        disabled={true}
                     />
                     <InputField
                        {...register(
                           EMPLOYEE_SETTINGS_NAMES.lastName,
                           ValidationsSchemasService.titleSchema
                        )}
                        title="Фамилия"
                        disabled={true}
                     />
                  </div>
                  <InputField
                     {...register(
                        EMPLOYEE_SETTINGS_NAMES.patronymic,
                        ValidationsSchemasService.titleSchema
                     )}
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
                        {...register(
                           EMPLOYEE_SETTINGS_NAMES.email,
                           ValidationsSchemasService.emailSchema
                        )}
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
                  name={EMPLOYEE_SETTINGS_NAMES.position}
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
                  {(isLoading || isLoadingPosition ? rightsActionsData : actions)?.map((action) => (
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
