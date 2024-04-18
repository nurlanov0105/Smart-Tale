import React, { FC } from "react";
import { AddImages } from "@/features/addImages";
import { SelectDate } from "@/entities/selectDate";
import { Button, InputField, TextArea } from "@/shared/ui";
import type { OrderProps } from "../model/types";
import styles from "./styles.module.scss";
import { showModal } from "@/widgets/modal";

const OrderForm: FC<OrderProps> = ({ type, btnType }) => {
   const handleDeleteClick = () => {
      showModal("DeleteAnnouncementModal");
   };
   const handleHideClick = () => {
      showModal("HideAnnouncementModal");
   };

   return (
      <form className={styles.form}>
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
               <InputField
                  classname={styles.order__margin}
                  disabled={false}
                  type="text"
                  error="error"
                  title="Размеры"
               />
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
                  <SelectDate />
               </div>
            )}
            <div className={styles.order__block}>
               <h3 className="h3">Галерея фотографий</h3>
               <AddImages />
            </div>

            <div className={styles.order__block}>
               <h3 className="h3">Контактная информация</h3>
               <InputField
                  classname={styles.order__margin}
                  disabled={false}
                  type="phone"
                  title="Номер телефона"
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
