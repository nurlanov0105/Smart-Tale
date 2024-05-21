"use client"
import React from "react";
import { Button, Emojis } from "@/shared/ui";
import {useDeleteAnnouncement} from "../../model/hooks/useMyAnnouncementDetails";
import styles from "./styles.module.scss";
import {closeModal, ModalProps} from "@/views/modal";

const DeleteAnnouncementModal = (props: ModalProps) => {

    const {
        deleteAnnouncement,
        isError,
        isLoading
    } = useDeleteAnnouncement(props?.type ?? "") //order | equipment

    const handleDelete = () => {
        deleteAnnouncement(props.slug ?? "") //slug order | equipment
        closeModal()
    }

   return (
      <div className={styles.content}>
         <Emojis type="sad" />
         <h3 className="h3">Удалить объявление?</h3>
         <p className={styles.content__text}>Объявление удалится навсегда!</p>
         <div className={styles.content__buttons}>
            <Button onClick={closeModal} className="btn_bordered">Отменить</Button>
            <Button onClick={handleDelete} className="btn_danger">Удалить</Button>
         </div>
      </div>
   );
};

export default DeleteAnnouncementModal;
