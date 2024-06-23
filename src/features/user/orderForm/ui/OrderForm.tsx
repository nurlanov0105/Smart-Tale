import React, { FC, useState } from "react";
import { Controller, useFieldArray, useFormContext, useWatch } from "react-hook-form";

import { useThemeStore } from "@/shared/store/themeStore";
import { Button, InputField, PhoneInput, TextArea, Select } from "@/shared/ui";
import {
   sizesTypes,
   sizesDataLetters,
   sizesDataNumbers,
   ANNOUNCEMENT_FORM_NAMES,
   ValidationsSchemasService,
   AnnouncementValues,
   currencies,
} from "@/shared/lib";

import { AddImages } from "@/features/general/addImages";
import { SelectDate } from "@/entities/general/selectDate";
import { SizeItem } from "@/entities/user/sizeItem";

import { useOrderForm } from "../model/hooks/useOrderForm";
import type { AnnouncementCreateFormType, OrderProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { Tabs } from "@/features/general/tabs";
import { orderDetailsValues } from "@/widgets/user/createAnnouncement/model/values";
import { ContactValues, orderContactValues } from "../model/consts";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";

const OrderForm: FC<OrderProps> = ({ type }) => {
   const theme = useThemeStore((state) => state.theme);

   const { handleSubmit, isLoading } = useOrderForm(type);
   const profile = useSubscribeStore((state) => state.data?.profile);

   const {
      register,
      control,
      setValue,
      formState: { errors, isValid },
   } = useFormContext<AnnouncementCreateFormType>();

   const sizes = useWatch({ control, name: ANNOUNCEMENT_FORM_NAMES.sizes });
   const sizeType = useWatch({ control, name: ANNOUNCEMENT_FORM_NAMES.sizeType });
   const [contactType, setContactType] = useState(orderContactValues[0].postValue);

   return (
      <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
         <div className={styles.order}>
            <InputField
               {...register(ANNOUNCEMENT_FORM_NAMES.title, ValidationsSchemasService.titleSchema)}
               classname={styles.order__margin}
               disabled={false}
               type="text"
               error={errors.title?.message}
               title="Название"
            />
            <div className={styles.order__areaWrapper}>
               <TextArea
                  {...register(
                     ANNOUNCEMENT_FORM_NAMES.description,
                     ValidationsSchemasService.descriptionSchema
                  )}
                  isDisabled={false}
                  error={errors.description?.message}
                  title="Описание"
                  type="default"
               />
            </div>

            <div className={styles.order__block_flex}>
               <div style={{ width: "100%" }}>
                  <InputField
                     {...register(
                        ANNOUNCEMENT_FORM_NAMES.price,
                        ValidationsSchemasService.priceSchema
                     )}
                     error={errors.price?.message}
                     classname={styles.order__margin}
                     disabled={false}
                     type="number"
                     title="Стоимость"
                  />
               </div>

               <div>
                  <Controller
                     name={ANNOUNCEMENT_FORM_NAMES.currency}
                     control={control}
                     defaultValue={currencies[0]}
                     rules={{ required: "Выберите валюту" }}
                     render={({ field }) => (
                        <Select
                           value={field.value}
                           onChange={field.onChange}
                           data={currencies}
                           type="vacancy"
                           classname={styles.order__currency}
                        />
                     )}
                  />
               </div>
            </div>

            {type === AnnouncementValues.EQUIPMENT && (
               <InputField
                  {...register(
                     ANNOUNCEMENT_FORM_NAMES.quantity,
                     ValidationsSchemasService.priceSchema
                  )}
                  error={errors.quantity?.message}
                  type="number"
                  title="Количество"
               />
            )}

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
                           type="vacancy"
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
                           data={
                              sizeType?.postValue === "letter" ? sizesDataLetters : sizesDataNumbers
                           }
                           type="vacancy"
                           error={errors?.sizes?.message}
                           typeData="sizes"
                           sizeType={sizeType?.postValue}
                        />
                     )}
                  />
                  {errors && <p className={styles.order__error}>{errors.sizes?.message}</p>}

                  {!!sizes?.length && (
                     <ul className={styles.order__sizes}>
                        {sizes?.map((field, idx) => (
                           <SizeItem
                              sizes={sizes}
                              key={idx}
                              size={field}
                              setValue={setValue}
                              idx={idx}
                           />
                        ))}
                     </ul>
                  )}
               </div>
            )}

            {type === AnnouncementValues.ORDER && (
               <div className={styles.order__block_row}>
                  <h4 className="h4">Крайняя дата выполнения</h4>
                  <div className={styles.order__margin}>
                     <SelectDate type="user" />
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
                  rules={{ required: "Добавьте изображение" }}
                  render={({ field }) => (
                     <AddImages
                        images={field.value}
                        setImages={field.onChange}
                        setValue={setValue}
                     />
                  )}
               />
            </div>

            <div className={clsx(styles.order__block, styles.order__block_gap)}>
               <h4 className="h4">Контактная информация</h4>

               <Tabs type={contactType} setType={setContactType} values={orderContactValues} />

               <PhoneInput
                  error={errors.tel?.message}
                  control={control}
                  classname={styles.order__phoneInput}
               />
               {/* {contactType === ContactValues.tel ? (
                  <PhoneInput
                     error={errors.tel?.message}
                     control={control}
                     classname={styles.order__phoneInput}
                  />
               ) : (
                  <InputField
                     {...register(
                        ANNOUNCEMENT_FORM_NAMES.email,
                        ValidationsSchemasService.emailSchema
                     )}
                     error={errors.email?.message}
                     classname={styles.order__margin}
                     disabled={false}
                     value={profile?.email}
                     type="email"
                     title="Почта"
                  />
               )} */}
            </div>
         </div>

         <div className={styles.order__btns}>
            <Button disabled={!isValid || isLoading} type="submit">
               {isLoading ? "Загрузка..." : "Разместить объявление"}
            </Button>
         </div>
      </form>
   );
};

export default OrderForm;
