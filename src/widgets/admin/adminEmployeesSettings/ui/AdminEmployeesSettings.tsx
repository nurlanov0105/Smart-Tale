"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Controller, useFormContext, useWatch } from "react-hook-form";

import { AdminBack } from "@/entities/admin/adminBack";
import { GlobalLoading, InputField, PhoneInput, Select } from "@/shared/ui";
import { EmployeeDetailsTypes, useInitialRights } from "@/shared/lib";
import { useThemeStore } from "@/shared/store/themeStore";
import { RightAction, rightsActionsData } from "@/entities/admin/rightAction";
import { ErrorMessage } from "@/entities/general/errorMessage";

import { useEmployeeDetails } from "../model/useEmployeeDetails";
import { useInitialEmployeeData } from "../model/useInitialData";
import { EMPLOYEE_SETTINGS_NAMES } from "../model/helper";
import EmployeeButtons from "./EmployeeButtons";
import styles from "./styles.module.scss";

const AdminEmployeesSettings = () => {
   const theme = useThemeStore((state) => state.theme);
   const { slug } = useParams<{ slug: string }>();
   const { register, control, reset } = useFormContext<EmployeeDetailsTypes>();

   const {
      data,
      isSuccess,
      isError,
      isLoading,

      positions,
      isLoadingPosition,
      isSuccessPosition,

      isSubmitting,
      handleSubmit,
   } = useEmployeeDetails(slug);

   const positionsList = useWatch({ control, name: EMPLOYEE_SETTINGS_NAMES.positions });
   const selectedPosition = useWatch({ control, name: EMPLOYEE_SETTINGS_NAMES.position });

   useInitialEmployeeData({ reset, data, isSuccess, positions, isSuccessPosition });
   const { actions } = useInitialRights({ data: positions, position: selectedPosition });

   if (isLoading || isLoadingPosition) return <GlobalLoading type="full" />;
   if (isError) return <ErrorMessage />;

   return (
      <form onSubmit={handleSubmit} className={styles[theme]}>
         <AdminBack title="Назад" />
         <div className={styles.form}>
            <fieldset className={styles.form__fieldset}>
               <legend className={styles.form__title}>Личные данные</legend>
               <div className={styles.form__wrapper}>
                  <div className={styles.form__box}>
                     <InputField
                        {...register(EMPLOYEE_SETTINGS_NAMES.name)}
                        title="Имя"
                        disabled={true}
                     />
                     <InputField
                        {...register(EMPLOYEE_SETTINGS_NAMES.lastName)}
                        title="Фамилия"
                        disabled={true}
                     />
                  </div>

                  <InputField
                     {...register(EMPLOYEE_SETTINGS_NAMES.patronymic)}
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
                        {...register(EMPLOYEE_SETTINGS_NAMES.email)}
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
         <EmployeeButtons isSubmitting={isSubmitting} slug={slug} />
      </form>
   );
};

export default AdminEmployeesSettings;
