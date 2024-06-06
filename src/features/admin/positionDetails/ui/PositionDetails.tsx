"use client";

import React from "react";
import clsx from "clsx";
import { showModal } from "@/views/modal";
import { RightAction, rightsActionsData } from "@/entities/admin/rightAction";
import { useThemeStore } from "@/shared/store/themeStore";
import { Button, InputField, TextArea } from "@/shared/ui";
import { MODAL_KEYS, ValidationsSchemasService } from "@/shared/lib";

import { POSITIONS_FORM_NAMES } from "../model/consts";
import { usePositionDetails } from "../model/usePositionDetails";
import { useInitialPositionData } from "../model/useInitialData";
import styles from "./styles.module.scss";

const PositionDetails = () => {
   const theme = useThemeStore((state) => state.theme);

   const handleDelete = () => {
      showModal(MODAL_KEYS.deletePosition, { slug: slug.toString() });
   };

   const {
      data,
      isSuccess,
      isLoading,
      isLoadingSubmitting,
      slug,

      handleSubmit,
      register,
      isValid,
      isDirty,

      reset,
      watch,
   } = usePositionDetails();

   const { actions } = useInitialPositionData({ data, isSuccess, reset });

   return (
      <form onSubmit={handleSubmit} className={clsx(styles.position, styles[theme])}>
         <div className={styles.position__row}>
            <h4 className="h4">Название должности</h4>
            <InputField
               {...register(POSITIONS_FORM_NAMES.title, ValidationsSchemasService.titleSchema)}
               title="Название"
            />

            <h4 className="h4">Описание должности</h4>
            <TextArea
               {...register(
                  POSITIONS_FORM_NAMES.description,
                  ValidationsSchemasService.descriptionSchema
               )}
               title="Описание"
               type="default"
            />
            <div className={styles.position__fieldset}>
               <h4 className="h4">Выдача прав доступа</h4>
               <ul className={styles.position__list}>
                  {(isLoading ? rightsActionsData : actions)?.map((action) => (
                     <RightAction register={register} action={action} key={action.title} />
                  ))}
               </ul>
            </div>
         </div>

         <div className={styles.position__btn}>
            <Button onClick={handleDelete} classType="btn_danger" type="button">
               Удалить должность
            </Button>

            <Button disabled={!isValid || isLoading} type="submit">
               {isLoadingSubmitting ? "Загрузка..." : "Изменить должность"}
            </Button>
         </div>
      </form>
   );
};

export default PositionDetails;
