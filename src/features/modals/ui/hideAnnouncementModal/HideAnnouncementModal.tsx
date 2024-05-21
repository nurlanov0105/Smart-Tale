"use client"
import React from "react";
import { Button, Emojis } from "@/shared/ui";
import styles from "./styles.module.scss";
import {useHideAnnouncement} from "../../model/hooks/useMyAnnouncementDetails";

const HideAnnouncementModal = () => {

    const {
        hideAnnouncement,
        isError,
        isLoading
    } = useHideAnnouncement("type") //order | equipment

    const handleHide = () => {
        hideAnnouncement("slug") //slug order | equipment
    }

   return (
      <div className={styles.content}>
         <Emojis type="reverse" />
         <h3 className="h3">Скрыть объявление?</h3>
         <p className={styles.content__text}>Объявление больше не будет доступно <br/> для просмотра в маркетплейсе</p>
         <div className={styles.content__buttons}>
            <Button className="btn_bordered">Отменить</Button>
            <Button onClick={handleHide} type="button">Скрыть</Button>
         </div>
      </div>
   );
};

export default HideAnnouncementModal;
