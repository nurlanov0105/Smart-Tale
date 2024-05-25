"use client";

import React from "react";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { GlobalLoading, InputField, PhoneInput, TextArea } from "@/shared/ui";
import {
   ORDER_FORM_NAMES,
   sizesDataLetters,
   sizesDataNumbers,
   sizesTypes,
} from "@/features/user/orderForm/model/consts.data";
import {
   descriptionSchema,
   priceSchema,
   titleSchema,
} from "@/features/user/orderForm/model/validationSchema";
import { SizeItem } from "@/entities/user/sizeItem";
import { currencies } from "@/widgets/user/createVacancy";
import { SelectDate } from "@/entities/general/selectDate";
import { AddImages } from "@/features/general/addImages";
import { OrderDetailBtns } from "@/entities/user/orderDetailBtns";
import { useAnnouncementDetail } from "../model/hooks/useAnnouncementDetail";
import { useAnnouncementType } from "../model/hooks/useAnnouncementType";
import { useInitialData } from "../model/hooks/useInitialData";
import Select2 from "@/shared/ui/select/Select2";
import { Controller } from "react-hook-form";

const AnnouncementDetailForm = () => {
   const theme = useThemeStore((state) => state.theme);

   const { type, slug } = useAnnouncementType();

   const {
      data,
      isError,
      isLoading,
      register,
      errors,
      isValid,
      isSuccess,
      handleSubmit,
      reset,
      watch,
      control,
      isDirty,
      setValue,
   } = useAnnouncementDetail({
      type,
      slug,
   });

   useInitialData({ reset, type, slug, data, isSuccess });

   // const imagesList = watch('images')
   const sizes = watch("sizes");
   const sizeType = watch("sizeType", {
      value: sizesTypes[0].value,
      postValue: sizesTypes[0].postValue,
   });

   const month = watch("month") || { value: "", postValue: 0 };
   const year = watch("year") || { value: 0, postValue: 0 };
   const day = watch("day") || { value: 0, postValue: 0 };

   if (isLoading) return <GlobalLoading type="full" />;
   if (isError) return <h3 className="h3">...Упс, произошла ошибка на сервере</h3>;

   return (
      <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
         <div className={styles.order}>
            <div className={styles.order__block_row}>
               <h4 className="h4">Название</h4>
               <InputField
                  {...register(ORDER_FORM_NAMES.title, titleSchema)}
                  error={errors.title?.message}
                  disabled={false}
                  isBordered={true}
                  classname={styles.order__input}
               />
            </div>
            <div className={styles.order__block_row}>
               <h4 className="h4">Описание</h4>
               <TextArea
                  {...register(ORDER_FORM_NAMES.description, descriptionSchema)}
                  isDisabled={false}
                  error={errors.description?.message}
                  type="default"
               />
            </div>

            {type === "order" && (
               <div className={clsx(styles.order__select)}>
                  <h4 className="h4">Тип размера</h4>
                  <Controller
                     name="sizeType"
                     control={control}
                     defaultValue={sizesTypes[0]}
                     rules={{ required: "Выберите размер" }}
                     render={({ field }) => (
                        <Select2
                           value={field.value}
                           onChange={field.onChange}
                           data={sizesTypes}
                           type="vacancy"
                           error={errors?.sizes?.message}
                        />
                     )}
                  />
               </div>
            )}

            {type === "order" && (
               <div className={clsx(styles.order__select)}>
                  <h4 className="h4">Размеры</h4>
                  <Controller
                     name="sizes"
                     control={control}
                     defaultValue={[]}
                     rules={{ required: "Выберите размер" }}
                     render={({ field }) => (
                        <Select2
                           value={field.value}
                           onChange={field.onChange}
                           typeData="sizes"
                           data={
                              sizeType.postValue === "letter" ? sizesDataLetters : sizesDataNumbers
                           }
                           type="vacancy"
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
                     type="number"
                     {...register(ORDER_FORM_NAMES.price, priceSchema)}
                     disabled={false}
                     error={!!errors.price?.message}
                     isBordered={true}
                     classname={styles.order__input}
                  />
                  <div>
                     <Controller
                        name="currency"
                        control={control}
                        rules={{ required: "Выберите валюту" }}
                        render={({ field }) => (
                           <Select2
                              value={field.value}
                              onChange={field.onChange}
                              data={currencies}
                              type="auth"
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

            {type === "order" && (
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
               {/*<AddImages images={images} setImages={setImages}/>*/}
               <Controller
                  name="images"
                  control={control}
                  rules={{ required: "This field is required" }}
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

         <OrderDetailBtns isDisabled={isValid} reset={reset} isDirty={isDirty} />
      </form>
   );
};

export default AnnouncementDetailForm;
