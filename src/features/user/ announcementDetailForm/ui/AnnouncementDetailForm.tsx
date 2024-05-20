"use client";

import React, { FC } from "react";
import { useThemeStore } from "@/shared/themeStore";
import { dateFormat, useInitialDate } from "@/shared/lib";
import { useSelectsOrder } from "@/features/user/orderForm/model/hooks/useSelectsOrder";
import { useSizesAndImages } from "@/features/user/orderForm/model/hooks/useSizesAndImages";
import clsx from "clsx";
import styles from "./styles.module.scss";
import {InputField, PhoneInput, Select, TextArea} from "@/shared/ui";
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
import { OrderDetailBtns } from "@/entities/user/orderDetailBtns";
import { useAnnouncementDetail } from "../model/hooks/useAnnouncementDetail";
import {useAnnouncementType} from "../model/hooks/useAnnouncementType";
import {useInitialData} from "../model/hooks/useInitialData";

const AnnouncementDetailForm = () => {
   const theme = useThemeStore((state) => state.theme);

   const {type, slug} = useAnnouncementType()

   const { day,
      setDay,
      month,
      setMonth,
      year,
      setYear
   } = useInitialDate({}); //Даты

   const {
      selectCurrency,
      setSelectCurrency,
      selectedContact,
      setSelectedContact,
      selectedSize,
      setSelectedSize,
   } = useSelectsOrder(); //Селекты с валютами, типами контакта и списком размеров

   const {
      sizesDate,
      handleChangeSize,
      setSizesDate,
      images,
      setImages
   } = useSizesAndImages(); //массив с изображениями и массив с размерами заказа

   const deadline = dateFormat({ year, month, day });

   const {
      data,
      isError,
      isLoading,
      register,
      errors,
      isValid,
       isSuccess,
       reset,
       control
   } = useAnnouncementDetail({
      type,
      slug,
      // images,
      // deadline,
   }); //Тип создания(заказа или оборудования)

   useInitialData({reset, type, slug, data, isSuccess})

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
      <form className={clsx(styles.form, styles[theme])}>
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


            <div className={clsx(styles.order__select)}>
               <h4 className="h4">Размеры</h4>
               <Select
                   selected={selectedSize}
                   setSelected={setSelectedSize}
                   data={sizesData}
                   handleSelectElem={handleChangeSize}
                   type="vacancy"
               />
               {sizesDate.length >= 1 && (
                   <ul className={styles.order__sizes}>
                      {sizesDate.map((size) => (
                          <SizeItem key={size} size={size} setSizesData={setSizesDate}/>
                      ))}
                   </ul>
               )}
            </div>
            <div>
               <h4 className={clsx(styles.order__margin, "h4")}>Стоимость</h4>
               <div className={styles.order__block_flex}>
                  <InputField
                      type="number"
                      {...register(ORDER_FORM_NAMES.price, priceSchema)}
                      error={errors.price?.message}
                      disabled={false}
                      isBordered={true}
                      classname={styles.order__input}
                  />
                  <div>
                     <Select
                         selected={selectCurrency}
                         setSelected={setSelectCurrency}
                         data={currencies}
                         type="auth"
                         classname={styles.order__currency}
                     />
                  </div>
               </div>
            </div>


            <div className={styles.order__block_row}>
               <h4 className="h4">Крайняя дата выполнения</h4>
               <div>
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
            <div className={styles.order__block}>
               <h4 className="h4">Галерея фотографий</h4>
               <AddImages images={images} setImages={setImages}/>
            </div>

            <div className={styles.order__block_gap}>
               <h4 className="h4">Контактная информация</h4>

               <PhoneInput classname={styles.order__phoneInput} control={control}/>

            </div>
         </div>

         <OrderDetailBtns/>

      </form>
   );
};

export default AnnouncementDetailForm;
