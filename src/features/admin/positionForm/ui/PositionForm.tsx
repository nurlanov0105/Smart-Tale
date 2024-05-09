"use client";

import React, { useState } from "react";
import { Button, InputField, Select, TextArea } from "@/shared/ui";
import { organizationsData } from "../model/organizations.data";
import { employee } from "@/shared/lib/types";
import { useThemeStore } from "@/shared/themeStore";
import { RightAction, rightsActionsData } from "@/entities/admin/rightAction";

import clsx from "clsx";
import styles from "./styles.module.scss";

const roles = [
   { value: "Утюжник", postValue: "Утюжник" },
   { value: "Швея", postValue: "Швея" },
   { value: "Менеджер", postValue: "Менеджер" },
];

const PositionForm = () => {
   const [selected, setSelected] = useState(organizationsData[0]);
   const [selectedRole, setSelectedRole] = useState<employee>(roles[0]);

   const theme = useThemeStore((state) => state.theme);

   return (
      <form className={clsx(styles.position, styles[theme])}>
         <div className={styles.position__row}>
            <h4 className="h4">Организация должности</h4>
            <Select
               selected={selected}
               setSelected={setSelected}
               title="Организация"
               data={organizationsData}
            />
            {/*<Select*/}
            {/*    selected={selectedRole}*/}
            {/*    setSelected={setSelectedRole}*/}
            {/*    title="Должности"*/}
            {/*    data={roles}*/}
            {/*/>*/}
            <h4 className="h4">Название должности</h4>
            <InputField title="Название" />

            <h4 className="h4">Описание должности</h4>
            <TextArea title="Описание" />
            <div className={styles.position__fieldset}>
               <h4 className="h4">Выдача прав доступа</h4>
               <ul className={styles.position__list}>
                  {rightsActionsData.map((action) => (
                     <RightAction {...action} key={action.title} />
                  ))}
               </ul>
            </div>
         </div>

         <div className={styles.position__btn}>
            <Button type="submit">
               {selectedRole.postValue === "all" ? "Создать" : "Сохранить"}
            </Button>
         </div>
      </form>
   );
};

export default PositionForm;
