"use client";

import React, { FC } from "react";
import { useThemeStore } from "@/shared/themeStore";
import { dateFormat, useInitialDate } from "@/shared/lib";
import { useSelectsOrder } from "@/features/user/orderForm/model/hooks/useSelectsOrder";
import { useSizesAndImages } from "@/features/user/orderForm/model/hooks/useSizesAndImages";
import { useOrderForm } from "@/features/user/orderForm/model/hooks/useOrderForm";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { Button, InputField, Select, TextArea } from "@/shared/ui";
import {
   contactsData,
   ORDER_FORM_NAMES,
   sizesData,
} from "@/features/user/orderForm/model/consts.data";
import {
   descriptionSchema,
   priceSchema,
   telSchema,
   titleSchema,
   typeSchema,
} from "@/features/user/orderForm/model/validationSchema";
import { SizeItem } from "@/entities/user/sizeItem";
import { currencies } from "@/widgets/user/createVacancy";
import { SelectDate } from "@/entities/general/selectDate";
import { AddImages } from "@/features/general/addImages";
import type { OrderCreateFormType } from "@/features/user/orderForm/model/types";
import { OrderDetailBtns } from "@/entities/user/orderDetailBtns";
import { useAnnouncementDetail } from "@/features/user/ announcementDetailForm/model/useAnnouncementDetail";

const AnnouncementDetailForm: FC<{ type: string }> = ({ type }) => {
   const theme = useThemeStore((state) => state.theme);

   const { day, setDay, month, setMonth, year, setYear } = useInitialDate(); //Даты

   const {
      selectCurrency,
      setSelectCurrency,
      selectedContact,
      setSelectedContact,
      selectedSize,
      setSelectedSize,
   } = useSelectsOrder(); //Селекты с валютами, типами контакта и списком размеров

   const { sizesDate, handleChangeSize, setSizesDate, images, setImages } = useSizesAndImages(); //массив с изображениями и массив с размерами заказа

   const deadline = dateFormat({ year, month, day });

   const { handleSubmit, isError, isLoading, register, errors, isValid } = useAnnouncementDetail({
      type,
      images,
      deadline,
   }); //Тип создания(заказа или оборудования)

   const isDisabled = () => {
      if (type === "order") {
         return (
            !images.length ||
            !sizesDate.length ||
            day.postValue === 0 ||
            month.postValue === 0 ||
            year.postValue === 0
         );
      } else {
         return !images.length;
      }
   };

   return (
      <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
         <div className={styles.order}>
            <InputField
               {...register(ORDER_FORM_NAMES.title, titleSchema)}
               classname={styles.order__margin}
               disabled={false}
               type="text"
               error={errors.title?.message}
               title="Название"
            />
            <TextArea
               {...register(ORDER_FORM_NAMES.description, descriptionSchema)}
               disabled={false}
               error={errors.description?.message}
               title="Описание"
            />

            {type === "order" && (
               <div className={clsx(styles.order__select)}>
                  <Select
                     selected={selectedSize}
                     setSelected={setSelectedSize}
                     data={sizesData}
                     title="Размеры"
                     handleSelectElem={handleChangeSize}
                     type="default"
                  />
                  {sizesDate.length >= 1 && (
                     <ul className={styles.order__sizes}>
                        {sizesDate.map((size) => (
                           <SizeItem key={size} size={size} setSizesData={setSizesDate} />
                        ))}
                     </ul>
                  )}
               </div>
            )}

            <div className={styles.order__block_flex}>
               <InputField
                  {...register(ORDER_FORM_NAMES.price, priceSchema)}
                  error={errors.price?.message}
                  classname={styles.order__margin}
                  disabled={false}
                  type="number"
                  title="Стоимость"
               />
               <div>
                  <Select
                     selected={selectCurrency}
                     setSelected={setSelectCurrency}
                     data={currencies}
                     type="vacancy"
                     classname={styles.order__currency}
                  />
               </div>
            </div>

            {type === "order" && (
               <div className={styles.order__block}>
                  <h3 className="h3">Крайняя дата выполнения</h3>
                  <div className={styles.order__margin}>
                     <SelectDate
                        day={day}
                        setDay={setDay}
                        month={month}
                        setMonth={setMonth}
                        year={year}
                        setYear={setYear}
                        type="user"
                     />
                  </div>
               </div>
            )}
            <div className={styles.order__block}>
               <h3 className="h3">Галерея фотографий</h3>
               <AddImages images={images} setImages={setImages} />
            </div>

            <div className={clsx(styles.order__block, styles.order__block_gap)}>
               <h3 className="h3">Контактная информация</h3>

               <InputField
                  {...register(ORDER_FORM_NAMES.tel, telSchema)}
                  error={errors.tel?.message}
                  disabled={false}
                  type="tel"
                  title="Номер телефона"
               />
            </div>
         </div>

          <OrderDetailBtns />

      </form>
   );
};

export default AnnouncementDetailForm;
