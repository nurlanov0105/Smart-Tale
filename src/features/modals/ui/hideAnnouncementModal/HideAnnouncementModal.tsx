"use client"
import React from "react";
import { Button, Emojis } from "@/shared/ui";
import {closeModal, ModalProps} from "@/views/modal";
import {useHideAnnouncement} from "../../model/hooks/useMyAnnouncementDetails";
import styles from "./styles.module.scss";

const HideAnnouncementModal = (props: ModalProps) => {

    const {
        hideAnnouncement,
        isError,
        isLoading
    } = useHideAnnouncement(props?.type ?? "") //order | equipment | service

    const handleHide = () => {
        hideAnnouncement(props.slug ?? "") //slug order | equipment | service
        closeModal()
    }

   return (
      <div className={styles.content}>
         <Emojis type="reverse" />
         <h3 className="h3">Скрыть объявление?</h3>
         <p className={styles.content__text}>Объявление больше не будет доступно <br/> для просмотра в маркетплейсе</p>
         <div className={styles.content__buttons}>
            <Button onClick={closeModal} className="btn_bordered">Отменить</Button>
            <Button onClick={handleHide} type="button">Скрыть</Button>
         </div>
      </div>
   );
};

export default HideAnnouncementModal;
