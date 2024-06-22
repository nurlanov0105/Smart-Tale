"use client";

import React from "react";
import clsx from "clsx";
import {useFormContext} from "react-hook-form";
import {useParams} from "next/navigation";
import { RightAction, rightsActionsData } from "@/entities/admin/rightAction";
import { useThemeStore } from "@/shared/store/themeStore";
import {GlobalLoading, InputField, TextArea} from "@/shared/ui";
import {AddPositionTypes,ValidationsSchemasService} from "@/shared/lib";

import { POSITIONS_FORM_NAMES } from "../model/consts";
import { usePositionDetails } from "../model/usePositionDetails";
import { useInitialPositionData } from "../model/useInitialData";
import PositionButtons from "./PositionButtons";
import styles from "./styles.module.scss";
import {ErrorMessage} from "@/entities/general/errorMessage";


const PositionDetails = () => {
   const theme = useThemeStore((state) => state.theme);
   const {slug} = useParams<{slug: string}>()

   const {register, reset,} = useFormContext<AddPositionTypes>()

   const {
      data,
      handleSubmit,

      isSuccess,
      isError,
      isLoading,
      isSubmitting,
   } = usePositionDetails(slug);

   const { actions } = useInitialPositionData({ data, isSuccess, reset });

   if (isLoading) return <GlobalLoading type="full"/>
   if (isError) return <ErrorMessage/>

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

        <PositionButtons
            isSubmitting={isSubmitting}
            position={data?.title}
            slug={slug}
        />
      </form>
   );
};

export default PositionDetails;
