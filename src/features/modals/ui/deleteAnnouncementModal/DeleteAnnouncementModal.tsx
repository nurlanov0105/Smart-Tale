"use client"
import React from "react";
import { Button, Emojis } from "@/shared/ui";
import {useDeleteAnnouncement} from "../../model/hooks/useMyAnnouncementDetails";
import styles from "./styles.module.scss";

const DeleteAnnouncementModal = () => {

    const {
        deleteAnnouncement,
        isError,
        isLoading
    } = useDeleteAnnouncement("type") //order | equipment

    const handleDelete = () => {
        deleteAnnouncement("slug") //slug order | equipment
    }

   return (
      <div className={styles.content}>
         <Emojis type="sad" />
         <h3 className="h3">Удалить объявление?</h3>
         <p className={styles.content__text}>Объявление удалится навсегда!</p>
         <div className={styles.content__buttons}>
            <Button className="btn_bordered">Отменить</Button>
            <Button onClick={handleDelete} className="btn_danger">Удалить</Button>
         </div>
      </div>
   );
};

export default DeleteAnnouncementModal;
