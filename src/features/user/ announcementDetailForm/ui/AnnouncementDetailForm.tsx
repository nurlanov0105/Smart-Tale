"use client";

import React, {useState} from "react";
import { Controller } from "react-hook-form";

import { useThemeStore } from "@/shared/store/themeStore";
import { GlobalLoading, InputField, PhoneInput, TextArea, Select } from "@/shared/ui";
import {
   sizesTypes,
   sizesDataLetters,
   sizesDataNumbers,
   ANNOUNCEMENT_FORM_NAMES,
   AnnouncementValues,
   ValidationsSchemasService,
   useAnnouncementType, SELECT_TYPES, currencies
} from "@/shared/lib";

import { AddImages } from "@/features/general/addImages";
import { SizeItem } from "@/entities/user/sizeItem";
import { SelectDate } from "@/entities/general/selectDate";
import { OrderDetailBtns } from "@/entities/user/orderDetailBtns";

import { useAnnouncementDetail } from "../model/hooks/useAnnouncementDetail";
import { useInitialData } from "../model/hooks/useInitialData";
import type {AnnouncementImagesTypes} from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";


const AnnouncementDetailForm = () => {
   const theme = useThemeStore((state) => state.theme);

   const { type, slug } = useAnnouncementType();

   const [images, setImages] = useState<AnnouncementImagesTypes[]>([])

   const {
      data,
      isError,
      isLoading,
      isSuccess,
      isSubmitting,

      handleSubmit,
      errors,
      register,
      isValid,
      reset,
      watch,
      control,
      isDirty,
      setValue,
   } = useAnnouncementDetail({
      type,
      slug,
      images
   });

   useInitialData({ reset, type, slug, data, isSuccess, setImages});

   // const imagesList = watch('images')
   const sizes = watch(ANNOUNCEMENT_FORM_NAMES.sizes);
   const sizeType = watch(ANNOUNCEMENT_FORM_NAMES.sizeType, {
      value: sizesTypes[0].value,
      postValue: sizesTypes[0].postValue,
   });

   const year = watch(ANNOUNCEMENT_FORM_NAMES.year) || { value: 0, postValue: 0 };
   const month = watch(ANNOUNCEMENT_FORM_NAMES.month) || { value: "", postValue: 0 };
   const day = watch(ANNOUNCEMENT_FORM_NAMES.day) || { value: 0, postValue: 0 };

   if (isLoading) return <GlobalLoading type="full" />;
   if (isError) return <h3 className="h3">...Упс, произошла ошибка на сервере</h3>;

   return (
      <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
         <div className={styles.order}>
            <div className={styles.order__block_row}>
               <h4 className="h4">Название</h4>
               <InputField
                  {...register(ANNOUNCEMENT_FORM_NAMES.title, ValidationsSchemasService.titleSchema)}
                  error={errors.title?.message}
                  disabled={isLoading}
                  isBordered={true}
                  classname={styles.order__input}
               />
            </div>
            <div className={styles.order__block_row}>
               <h4 className="h4">Описание</h4>
               <TextArea
                  {...register(ANNOUNCEMENT_FORM_NAMES.description, ValidationsSchemasService.descriptionSchema)}
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
                           error={errors?.sizes?.message}
                        />
                     )}
                  />
               </div>
            )}

            {type === AnnouncementValues.ORDER && (
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
                              sizeType.postValue === "letter" ? sizesDataLetters : sizesDataNumbers
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
            )}

            <div>
               <h4 className={clsx(styles.order__margin, "h4")}>Стоимость</h4>
               <div className={styles.order__block_flex}>
                  <InputField
                     {...register(ANNOUNCEMENT_FORM_NAMES.price, ValidationsSchemasService.priceSchema)}
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
                  <div>
                     <SelectDate
                        setValue={setValue}
                        control={control}
                        day={day}
                        month={month}
                        year={year}
                        type="user"
                     />
                  </div>
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

         <OrderDetailBtns
             type={type}
             slug={slug}

             reset={reset}

             isSubmitting={isSubmitting}
             isDisabled={isValid}
             isDirty={isDirty}
         />
      </form>
   );
};

export default AnnouncementDetailForm;
