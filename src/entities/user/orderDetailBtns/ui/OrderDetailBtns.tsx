import React, { FC } from "react";
import {useFormContext, UseFormReset} from "react-hook-form";
import { showModal } from "@/views/modal";
import { AnnouncementCreateFormType } from "@/features/user/orderForm/model/types";
import { Button } from "@/shared/ui";
import { MODAL_KEYS } from "@/shared/lib";
import styles from "./styles.module.scss";
import type {AnnouncementDetailFormType} from "@/features/user/ announcementDetailForm/model/types";

interface IProps {
   type: string;
   slug: string;
}
const OrderDetailBtns: FC<IProps> = ({ type }) => {

   const {
      formState: {isDirty, isSubmitting, isValid},
      reset
   } = useFormContext<AnnouncementDetailFormType>()

   const handleDeleteClick = () => {
      showModal(MODAL_KEYS.confirmationModal, {
         slug: "nitki-s-igolkami-2",
         type,
         componentName: MODAL_KEYS.deleteAnnouncement,
      });
   };
   const handleHideClick = () => {
      showModal(MODAL_KEYS.confirmationModal, {
         slug: "nitki-s-igolkami-2",
         type,
         componentName: MODAL_KEYS.hideAnnouncement,
      });
   };
   const handleReset = () => reset();

   return (
       <div className={styles.buttons__wrapper}>
          <div className={styles.buttons}>
             <Button onClick={handleHideClick} type="button" >Скрыть</Button>
             <Button onClick={handleDeleteClick} type="button" classType="btn_danger">Удалить</Button>
          </div>
          <div className={styles.buttons}>
             {isDirty && (
                 <Button onClick={handleReset} type="button" classType="btn_bordered">
                    Отменить изменения
                 </Button>
             )}
             <Button disabled={!isValid || !isDirty} type="submit">
                {isSubmitting ? "Загрузка..." : "Изменить объявление"}
             </Button>
          </div>
       </div>
   );
};

export default OrderDetailBtns;
