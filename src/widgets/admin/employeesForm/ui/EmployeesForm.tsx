"use client";
import React from "react";
import {Controller, useFormContext, useWatch} from "react-hook-form";
import clsx from "clsx";
import {RightAction, rightsActionsData} from "@/entities/admin/rightAction";
import { Button, InputField, Select } from "@/shared/ui";
import {useThemeStore} from "@/shared/store/themeStore";
import {AddEmployeeTypes, SELECT_TYPES, useInitialRights, ValidationsSchemasService} from "@/shared/lib";

import {useAddEmployee} from "../model/useAddEmployee";
import {usePositionsEmployee} from "../model/usePositionsEmployee";
import {ADD_EMPLOYEE_NAMES} from "../model/consts";
import styles from "./styles.module.scss";


const EmployeesForm = () => {

   const theme = useThemeStore((state) => state.theme);
    const {
        control,
        register,
        reset,
        formState: {errors, isValid}
    } = useFormContext<AddEmployeeTypes>()

    const position = useWatch({control, name: ADD_EMPLOYEE_NAMES.position})
    const positions = useWatch({control, name: ADD_EMPLOYEE_NAMES.positions})
    const organizations = useWatch({control, name: ADD_EMPLOYEE_NAMES.organizations})

    const { data, isLoadingPositions} = usePositionsEmployee({reset})
    const { actions} = useInitialRights({data, position})

   const { handleSubmit, isLoading} = useAddEmployee()

   return (
      <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
         <div className={styles.form__row}>
            <h4 className="h4">Организация сотрудника</h4>
            <Controller
                name={ADD_EMPLOYEE_NAMES.organization}
                control={control}
                rules={{required: 'Выберите организацию'}}
                render={({field}) => (
                    <Select
                        value={field.value}
                        onChange={field.onChange}
                        data={organizations}
                        type={SELECT_TYPES.default}
                        error={errors?.position?.message}
                        isLoading={isLoadingPositions}
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
                isLoading ? "Загрузка..." : "Пригласить сотрудника"
            }</Button>
         </div>
      </form>
   );
};

export default EmployeesForm;
