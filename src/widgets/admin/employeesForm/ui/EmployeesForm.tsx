"use client";
import React, { useState } from "react";
import { Button, InputField, Select } from "@/shared/ui";
import { RightAction } from "@/entities/admin/rightAction";
import { rightsActionsData } from "@/entities/admin/rightAction";
import { organizationsData } from "@/features/admin/positionForm";
import styles from "./styles.module.scss";
import {useThemeStore} from "@/shared/themeStore";
import clsx from "clsx";
import {useAddEmployee} from "../model/useAddEmployee";
import {emailSchema} from "@/features/user/orderForm/model/validationSchema";
import Select2 from "@/shared/ui/select/Select2";
import {Controller} from "react-hook-form";

const EmployeesForm = () => {
   const [selected, setSelected] = useState(organizationsData[0]);
   const theme = useThemeStore((state) => state.theme);
   const {
      handleSubmit,
      isError,
      isValid,
      register,
      isLoading,
      errors,
      control
   } = useAddEmployee()

   return (
      <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
         <div className={styles.form__row}>
            <h4 className="h4">Организация сотрудника</h4>
            <Controller
                name="organization"
                control={control}
                defaultValue={organizationsData[0]}
                rules={{required: 'Выберите размер'}}
                render={({field}) => (
                    <Select2
                        value={field.value}
                        onChange={field.onChange}
                        data={organizationsData}
                        type="default"
                        error={errors?.position?.message}
                    />

                )}
            />

            <h4 className="h4">Почта сотрудника</h4>
            <InputField {...register("email", emailSchema)} title="Почта" type="email" />
            <h4 className="h4">Должность сотрудника</h4>

            <Controller
                name="position"
                control={control}
                defaultValue={organizationsData[0]}
                rules={{required: 'Выберите размер'}}
                render={({field}) => (
                    <Select2
                        value={field.value}
                        onChange={field.onChange}
                        data={organizationsData}
                        type="default"
                        error={errors?.position?.message}
                    />

                )}
            />
            <div>
               <h4 className="h4">Выдача прав доступа</h4>
               <ul className={styles.form__list}>
                  {rightsActionsData.map((action) => (
                     <RightAction register={register} action={action} key={action.title} />
                  ))}
               </ul>
            </div>
         </div>

         <div className={styles.form__btn}>
            <Button disabled={isLoading || !isValid} type="submit">Пригласить</Button>
         </div>
      </form>
   );
};

export default EmployeesForm;
