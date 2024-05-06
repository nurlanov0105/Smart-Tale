"use client";
import React, { useState } from "react";
import { Button, InputField, Select } from "@/shared/ui";
import { RightAction } from "@/entities/admin/rightAction";
import { rightsActionsData } from "@/entities/admin/rightAction";
import { organizationsData } from "@/features/admin/positionForm";
import styles from "./styles.module.scss";
import {useThemeStore} from "@/shared/themeStore";
import clsx from "clsx";

const EmployeesForm = () => {
   const [selected, setSelected] = useState(organizationsData[0]);
   const theme = useThemeStore((state) => state.theme);

   return (
      <form className={clsx(styles.form, styles[theme])}>
         <div className={styles.form__row}>
            <h4 className="h4">Организация сотрудника</h4>
            <Select
               selected={selected}
               setSelected={setSelected}
               title="Организация"
               data={organizationsData}
            />

            <h4 className="h4">Почта сотрудника</h4>
            <InputField title="Почта" type="email" />
            <h4 className="h4">Должность сотрудника</h4>
            <Select
               selected={selected}
               setSelected={setSelected}
               title="Должность"
               data={organizationsData}
            />
            <div>
               <h4 className="h4">Выдача прав доступа</h4>
               <ul className={styles.form__list}>
                  {rightsActionsData.map((action) => (
                     <RightAction {...action} key={action.title} />
                  ))}
               </ul>
            </div>
         </div>

         <div className={styles.form__btn}>
            <Button type="button">Пригласить</Button>
         </div>
      </form>
   );
};

export default EmployeesForm;
