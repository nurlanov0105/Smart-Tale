import React, { FC } from "react";
import { AddImages } from "@/features/general/addImages";
import { SelectDate } from "@/entities/general/selectDate";
import { Button, InputField, Select, TextArea } from "@/shared/ui";
import type { OrderCreateFormType, OrderProps } from "../model/types";
import { dateFormat, useInitialDate } from "@/shared/lib";
import { useThemeStore } from "@/shared/themeStore";
import { contactsData, ORDER_FORM_NAMES, sizesData } from "../model/consts.data";
import { currencies } from "@/widgets/user/createVacancy/model/values.data";
import { SizeItem } from "@/entities/user/sizeItem";

import { useSelectsOrder } from "../model/hooks/useSelectsOrder";
import { useSizesAndImages } from "../model/hooks/useSizesAndImages";
import { useOrderForm } from "../model/hooks/useOrderForm";
import { descriptionSchema, priceSchema, titleSchema, typeSchema } from "../model/validationSchema";
import clsx from "clsx";
import styles from "./styles.module.scss";

const OrderForm: FC<OrderProps> = ({ type }) => {
   const theme = useThemeStore((state) => state.theme);

   const {
      day,
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
      handleSubmit,
      isError,
      isLoading,
      register,
      errors,
      isValid
   } = useOrderForm({
      type,
      images,
      deadline,
      sizesData

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
               isDisabled={false}
               error={errors.description?.message}
               title="Описание"
               type="default"
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
               <Select
                  selected={selectedContact}
                  setSelected={setSelectedContact}
                  data={contactsData}
                  type="vacancy"
               />
               <InputField
                  {...register(
                     selectedContact.postValue as keyof OrderCreateFormType,
                     typeSchema(selectedContact.postValue)
                  )}
                  error={errors[selectedContact.postValue as keyof OrderCreateFormType]?.message}
                  disabled={false}
                  type={selectedContact.postValue}
                  title={selectedContact.value}
               />
            </div>
         </div>

         <div className={styles.order__btns}>
            <Button disabled={isDisabled() || !isValid} type="submit">
               Разместить объявление
            </Button>
         </div>
      </form>
   );
};

export default OrderForm;
