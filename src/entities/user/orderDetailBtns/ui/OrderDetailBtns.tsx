import React, { FC } from "react";
import {useFormContext} from "react-hook-form";
import { showModal } from "@/views/modal";
import { Button } from "@/shared/ui";
import { MODAL_KEYS } from "@/shared/lib";
import type {AnnouncementDetailFormType} from "@/features/user/ announcementDetailForm/model/types";
import {useParams} from "next/navigation";
import styles from "./styles.module.scss";

interface IProps {
    type: string;
    isSubmitting: boolean
    isHide: boolean
}
const OrderDetailBtns: FC<IProps> = ({ type, isSubmitting, isHide }) => {
   const {slug} = useParams<{slug?: string}>()

   const {
      formState: {isDirty, isValid},
      reset
   } = useFormContext<AnnouncementDetailFormType>()

   const handleDeleteClick = () => {
      showModal(MODAL_KEYS.confirmationModal, {slug, type, componentName: MODAL_KEYS.deleteAnnouncement,});
   };
   const handleHideClick = () => {
       const typeModal = isHide ? MODAL_KEYS.unHideAnnouncement : MODAL_KEYS.hideAnnouncement
      showModal(MODAL_KEYS.confirmationModal, {slug, type, componentName: typeModal});
   };

   const handleReset = () => reset();

   return (
       <div className={styles.buttons__wrapper}>
          <div className={styles.buttons}>
             <Button onClick={handleHideClick} type="button" >
                 {
                     isHide ? "Показать" : "Скрыть"
                 }
             </Button>
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
