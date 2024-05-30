"use client";
import React from "react";
import {Controller} from "react-hook-form";
import clsx from "clsx";
import { organizationsData } from "@/features/admin/positionForm";
import {RightAction, rightsActionsData} from "@/entities/admin/rightAction";
import { Button, InputField, Select } from "@/shared/ui";
import {useThemeStore} from "@/shared/themeStore";
import {SELECT_TYPES, ValidationsSchemasService} from "@/shared/lib";

import {useAddEmployee} from "../model/useAddEmployee";
import {usePositionsEmployee} from "../model/usePositionsEmployee";
import {ADD_EMPLOYEE_NAMES} from "../model/consts";
import {useInitialRights} from "../model/useInitialRights";
import styles from "./styles.module.scss";


const EmployeesForm = () => {

   const theme = useThemeStore((state) => state.theme);

   const {
      handleSubmit,
      isError,
      isValid,
      register,
       reset,
      isLoading,
       watch,
      errors,
      control
   } = useAddEmployee()

    const positions = watch("positions")
    const position = watch("position")

    const {
        isErrorPositions,
        isLoadingPositions,
        data} = usePositionsEmployee({reset})

    const {actions} = useInitialRights({data, position})


   return (
      <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
         <div className={styles.form__row}>
            <h4 className="h4">Организация сотрудника</h4>
            <Controller
                name={ADD_EMPLOYEE_NAMES.organization}
                control={control}
                defaultValue={organizationsData[0]}
                rules={{required: 'Выберите организацию'}}
                render={({field}) => (
                    <Select
                        value={field.value}
                        onChange={field.onChange}
                        data={organizationsData}
                        type={SELECT_TYPES.default}
                        error={errors?.position?.message}
                    />

                )}
            />

            <h4 className="h4">Почта сотрудника</h4>
            <InputField
                {...register(ADD_EMPLOYEE_NAMES.email, ValidationsSchemasService.emailSchema)}
                error={errors.email?.message}
                title="Почта"
                type="email"
            />
            <h4 className="h4">Должность сотрудника</h4>

            <Controller
                name={ADD_EMPLOYEE_NAMES.position}
                control={control}
                rules={{required: 'Выберите размер'}}
                render={({field}) => (
                    <Select
                        value={field.value}
                        onChange={field.onChange}
                        data={positions}
                        type={SELECT_TYPES.default}
                        error={errors?.position?.message}
                        isLoading={isLoadingPositions}
                    />

                )}
            />
            <div>
               <h4 className="h4">Выдача прав доступа</h4>
               <ul className={styles.form__list}>
                  {(isLoadingPositions ? rightsActionsData : actions)?.map((action) => (
                     <RightAction isDisabled={true} register={register} action={action} key={action.title} />
                  ))}
               </ul>
            </div>
         </div>

         <div className={styles.form__btn}>
            <Button disabled={isLoading || !isValid} type="submit">{
                isLoading ? "Загрузка..." : "Пригласить"
            }</Button>
         </div>
      </form>
   );
};

export default EmployeesForm;
