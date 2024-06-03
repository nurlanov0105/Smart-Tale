"use client";

import React from "react";
import clsx from "clsx";
import { RightAction, rightsActionsData } from "@/entities/admin/rightAction";
import { useThemeStore } from "@/shared/store/themeStore";
import { Button, InputField, TextArea } from "@/shared/ui";
import {ValidationsSchemasService} from "@/shared/lib";

import {useAddPosition} from "../model/hooks/useAddPosition";
import {ADD_POSITIONS_NAMES} from "../model/consts";
import styles from "./styles.module.scss";

const PositionForm = () => {

   const theme = useThemeStore((state) => state.theme);

   const {
      register,
      handleSubmit,
      isLoading,
      isValid,
      isLoadingSubmitting
   } = useAddPosition()

   return (
      <form onSubmit={handleSubmit} className={clsx(styles.position, styles[theme])}>
         <div className={styles.position__row}>
            <h4 className="h4">Название должности</h4>
            <InputField
                {...register(ADD_POSITIONS_NAMES.title, ValidationsSchemasService.titleSchema)}
                title="Название"
            />

            <h4 className="h4">Описание должности</h4>
            <TextArea
                {...register(ADD_POSITIONS_NAMES.description, ValidationsSchemasService.descriptionSchema)}
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
            <Button disabled={!isValid || isLoading} type="submit">
               {isLoadingSubmitting ? "Загрузка..." : "Добавить должность"}
            </Button>
         </div>
      </form>
   );
};

export default PositionForm;
