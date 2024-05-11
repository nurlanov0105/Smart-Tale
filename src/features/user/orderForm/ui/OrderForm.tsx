import React, { FC, useState } from "react";
import { AddImages } from "@/features/general/addImages";
import { SelectDate } from "@/entities/general/selectDate";
import { Button, InputField, Select, TextArea } from "@/shared/ui";
import { showModal } from "@/views/modal";
import type { OrderProps } from "../model/types";
import { MODAL_KEYS, useInitialDate } from "@/shared/lib";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/themeStore";
import { contactsData, sizesData } from "../model/consts.data";
import crossIcon from "@@/imgs/form/cross.svg";
import Image from "next/image";

const OrderForm: FC<OrderProps> = ({ type, btnType }) => {
   const handleDeleteClick = () => {
      showModal(MODAL_KEYS.deleteAnnouncement);
   };
   const handleHideClick = () => {
      showModal(MODAL_KEYS.hideAnnouncement);
   };

   const theme = useThemeStore((state) => state.theme);

   const { day, setDay, month, setMonth, year, setYear } = useInitialDate();

   const [selectedSize, setSelectedSize] = useState(sizesData[0]);
   const [selectedContact, setSelectedContact] = useState(contactsData[0]);
   const [sizesArr, setSizesArr] = useState<string[]>([]);

   const handleChangeSize = (elem: string) => {
      if (!sizesArr.includes(elem) && elem !== "") {
         setSizesArr((prev) => [...prev, elem]);
      }
   };

   const handleDeleteSize = (elem: string) => {
      setSizesArr((prev) => prev.filter((item) => item !== elem));
   };

   return (
      <form className={clsx(styles.form, styles[theme])}>
         <div className={styles.order}>
            <InputField
               classname={styles.order__margin}
               disabled={false}
               type="text"
               error="errror"
               title="Название"
            />
            <TextArea disabled={false} error="errror" title="Описание" />

            {type === "order" && (
               <div className={clsx(styles.order__select)}>
                  <Select
                     selected={selectedSize}
                     setSelected={setSelectedSize}
                     data={sizesData}
                     title="Размеры"
                     handleSelectElem={handleChangeSize}
                  />
                  {sizesArr.length >= 1 && (
                     <ul className={styles.order__sizes}>
                        {sizesArr.map((size) => (
                           <li key={size}>
                              <span>{size}</span>
                              <svg viewBox="0 0 16 16" onClick={() => handleDeleteSize(size)}>
                                 <path d="M5.36569 4.23431C5.05327 3.9219 4.54673 3.9219 4.23431 4.23431C3.9219 4.54673 3.9219 5.05327 4.23431 5.36569L6.86863 8L4.23431 10.6343C3.9219 10.9467 3.9219 11.4533 4.23431 11.7657C4.54673 12.0781 5.05327 12.0781 5.36569 11.7657L8 9.13137L10.6343 11.7657C10.9467 12.0781 11.4533 12.0781 11.7657 11.7657C12.0781 11.4533 12.0781 10.9467 11.7657 10.6343L9.13137 8L11.7657 5.36569C12.0781 5.05327 12.0781 4.54673 11.7657 4.23431C11.4533 3.9219 10.9467 3.9219 10.6343 4.23431L8 6.86863L5.36569 4.23431Z" />
                              </svg>
                           </li>
                        ))}
                     </ul>
                  )}
               </div>
            )}

            <InputField
               classname={styles.order__margin}
               disabled={false}
               type="number"
               title="Стоимость в сомах"
            />

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
               <AddImages />
            </div>

            <div className={clsx(styles.order__block, styles.order__block_gap)}>
               <h3 className="h3">Контактная информация</h3>
               <Select
                  selected={selectedContact}
                  setSelected={setSelectedContact}
                  data={contactsData}
               />
               <InputField
                  disabled={false}
                  type={selectedContact.postValue}
                  title={selectedContact.value}
               />
            </div>
         </div>

         {btnType === "order" ? (
            <div className={styles.order__btns}>
               <Button>Разместить объявление</Button>
            </div>
         ) : (
            <div className={styles.order__btns}>
               <Button type="button" className="btn_danger" onClick={handleDeleteClick}>
                  Удалить
               </Button>
               <Button type="button" onClick={handleHideClick}>
                  Скрыть объявление
               </Button>
            </div>
         )}
      </form>
   );
};

export default OrderForm;
