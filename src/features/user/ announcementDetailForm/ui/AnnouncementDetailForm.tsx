"use client";

import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { useThemeStore } from "@/shared/store/themeStore";
import { GlobalLoading, InputField, PhoneInput, TextArea, Select } from "@/shared/ui";
import {
   sizesTypes,
   sizesDataLetters,
   sizesDataNumbers,
   ANNOUNCEMENT_FORM_NAMES,
   AnnouncementValues,
   ValidationsSchemasService,
   useAnnouncementType,
   SELECT_TYPES,
   currencies,
} from "@/shared/lib";

import { AddImages } from "@/features/general/addImages";
import { SizeItem } from "@/entities/user/sizeItem";
import { SelectDate } from "@/entities/general/selectDate";
import { OrderDetailBtns } from "@/entities/user/orderDetailBtns";

import { useAnnouncementDetail } from "../model/hooks/useAnnouncementDetail";
import { useInitialData } from "../model/hooks/useInitialData";
import type { AnnouncementDetailFormType } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { FeedbackList } from "@/widgets/general/feedbackList";
import { ContactValues, orderContactValues } from "@/features/user/orderForm/model/consts";
import { Tabs } from "@/features/general/tabs";

const AnnouncementDetailForm = () => {
   const theme = useThemeStore((state) => state.theme);

   const { type, slug } = useAnnouncementType();

   const {
      data,
      handleSubmit,

      isError,
      isSubmitting,
      isLoading,
      isSuccess,
   } = useAnnouncementDetail({ type, slug });

   const {
      formState: { errors },
      register,
      reset,
      control,
      setValue,
   } = useFormContext<AnnouncementDetailFormType>();

   useInitialData({ reset, type, slug, data, isSuccess });

   const sizes = useWatch({ control, name: ANNOUNCEMENT_FORM_NAMES.sizes });
   const sizeType = useWatch({ control, name: ANNOUNCEMENT_FORM_NAMES.sizeType });

   if (isLoading) {
      return <GlobalLoading type="full" />;
   }
   if (isError) {
      return <h3 className="h3">...Упс, произошла ошибка на сервере</h3>;
   }

   return (
      <>
         {type === "order" && isSuccess && <FeedbackList isBooked={data?.is_booked} slug={slug} />}

         <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
            <div className={styles.order}>
               <div className={styles.order__block_row}>
                  <h4 className="h4">Название</h4>
                  <InputField
                     {...register(
                        ANNOUNCEMENT_FORM_NAMES.title,
                        ValidationsSchemasService.titleSchema
                     )}
                     error={errors.title?.message}
                     disabled={isLoading}
                     isBordered={true}
                     classname={styles.order__input}
                  />
               </div>
               <div className={styles.order__block_row}>
                  <h4 className="h4">Описание</h4>
                  <TextArea
                     {...register(
                        ANNOUNCEMENT_FORM_NAMES.description,
                        ValidationsSchemasService.descriptionSchema
                     )}
                     isDisabled={isLoading}
                     error={errors.description?.message}
                     type="default"
                  />
               </div>

               {type === AnnouncementValues.ORDER && (
                  <div className={clsx(styles.order__select)}>
                     <h4 className="h4">Тип размера</h4>
                     <Controller
                        name={ANNOUNCEMENT_FORM_NAMES.sizeType}
                        control={control}
                        defaultValue={sizesTypes[0]}
                        rules={{ required: "Выберите размер" }}
                        render={({ field }) => (
                           <Select
                              value={field.value}
                              onChange={field.onChange}
                              data={sizesTypes}
                              type={SELECT_TYPES.vacancy}
                           />
                        )}
                     />
                  </div>
               )}

               {type === AnnouncementValues.ORDER && (
                  <div className={styles.order__block_row}>
                     <div className={clsx(styles.order__select)}>
                        <h4 className="h4">Размеры</h4>
                        <Controller
                           name={ANNOUNCEMENT_FORM_NAMES.sizes}
                           control={control}
                           defaultValue={[]}
                           rules={{ required: "Выберите размер" }}
                           render={({ field }) => (
                              <Select
                                 value={field.value}
                                 onChange={field.onChange}
                                 typeData="sizes"
                                 data={
                                    sizeType?.postValue === "letter"
                                       ? sizesDataLetters
                                       : sizesDataNumbers
                                 }
                                 type={SELECT_TYPES.vacancy}
                                 error={errors?.sizes?.message}
                              />
                           )}
                        />

                        {errors && (
                           <p className={clsx(styles.order__error, styles.order__error_margin)}>
                              {errors.sizes?.message}
                           </p>
                        )}

                        {!!sizes?.length && (
                           <ul className={styles.order__sizes}>
                              {sizes?.map((size, idx) => (
                                 <SizeItem
                                    sizes={sizes}
                                    key={idx}
                                    size={size}
                                    setValue={setValue}
                                    idx={idx}
                                 />
                              ))}
                           </ul>
                        )}
                     </div>
                  </div>
               )}

               <div>
                  <h4 className={clsx(styles.order__margin, "h4")}>Стоимость</h4>
                  <div className={styles.order__block_flex}>
                     <InputField
                        {...register(
                           ANNOUNCEMENT_FORM_NAMES.price,
                           ValidationsSchemasService.priceSchema
                        )}
                        type="number"
                        disabled={isLoading}
                        error={!!errors.price?.message}
                        isBordered={true}
                        classname={styles.order__input}
                     />
                     <div>
                        <Controller
                           name={ANNOUNCEMENT_FORM_NAMES.currency}
                           control={control}
                           rules={{ required: "Выберите валюту" }}
                           render={({ field }) => (
                              <Select
                                 value={field.value}
                                 onChange={field.onChange}
                                 data={currencies}
                                 type={SELECT_TYPES.auth}
                                 classname={clsx(
                                    styles.order__currency,
                                    errors.price?.message && styles.order__currency_error
                                 )}
                              />
                           )}
                        />
                     </div>
                  </div>
                  {errors && <p className={clsx(styles.order__error)}>{errors.price?.message}</p>}
               </div>

               {type === AnnouncementValues.ORDER && (
                  <div className={styles.order__block_row}>
                     <h4 className="h4">Крайняя дата выполнения</h4>
                     <SelectDate type="user" />

                     {errors.day?.message ||
                        errors.month?.message ||
                        (errors.year?.message && (
                           <p className={clsx(styles.order__error)}>Выберите дату</p>
                        ))}
                  </div>
               )}
               <div className={styles.order__block}>
                  <h4 className="h4">Галерея фотографий</h4>

                  <Controller
                     name={ANNOUNCEMENT_FORM_NAMES.images}
                     control={control}
                     render={({ field }) => (
                        <AddImages
                           images={field.value}
                           setImages={field.onChange}
                           setValue={setValue}
                        />
                     )}
                  />
               </div>
               <div className={styles.order__block_gap}>
                  <h4 className="h4">Контактная информация</h4>

                  <PhoneInput
                     error={errors.tel?.message}
                     classname={styles.order__phoneInput}
                     control={control}
                  />
               </div>
            </div>

            <OrderDetailBtns isHide={data?.hide} isSubmitting={isSubmitting} type={type} />
         </form>
      </>
   );
};

export default AnnouncementDetailForm;
