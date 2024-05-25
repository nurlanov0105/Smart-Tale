"use client";

import React, { useState } from "react";
import { Button, InputField, Select, TextArea } from "@/shared/ui";
import { organizationsData } from "../model/organizations.data";
import { employee } from "@/shared/lib/types/types";
import { useThemeStore } from "@/shared/themeStore";
import { RightAction, rightsActionsData } from "@/entities/admin/rightAction";

import clsx from "clsx";
import styles from "./styles.module.scss";
import {useAddPosition} from "@/features/admin/positionForm/model/useAddPosition";
import {descriptionSchema, titleSchema} from "@/features/user/orderForm/model/validationSchema";

const roles = [
   { value: "Утюжник", postValue: "Утюжник" },
   { value: "Швея", postValue: "Швея" },
   { value: "Менеджер", postValue: "Менеджер" },
];

const PositionForm = () => {
   const [selected, setSelected] = useState(organizationsData[0]);
   const [selectedRole, setSelectedRole] = useState<employee>(roles[0]);

   const theme = useThemeStore((state) => state.theme);

   const {
      register,
      handleSubmit
   } = useAddPosition()

   return (
      <form onSubmit={handleSubmit} className={clsx(styles.position, styles[theme])}>
         <div className={styles.position__row}>
            <h4 className="h4">Организация должности</h4>
            <Select
               selected={selected}
               setSelected={setSelected}
               title="Организация"
               data={organizationsData}
               type="default"
            />

            <h4 className="h4">Название должности</h4>
            <InputField {...register("title", titleSchema)} title="Название" />

            <h4 className="h4">Описание должности</h4>
            <TextArea
                {...register("description", descriptionSchema)}
                title="Описание"
                type="default"
            />
            <div className={styles.position__fieldset}>
               <h4 className="h4">Выдача прав доступа</h4>
               <ul className={styles.position__list}>
                  {rightsActionsData.map((action) => (
                     <RightAction register={register} action={action} key={action.title} />
                  ))}
               </ul>
            </div>
         </div>

         <div className={styles.position__btn}>
            <Button type="submit">
               Добавить должность
            </Button>
         </div>
      </form>
   );
};

export default PositionForm;
