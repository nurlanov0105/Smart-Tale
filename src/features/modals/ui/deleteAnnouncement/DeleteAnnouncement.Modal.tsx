import React from 'react';
import {Button, Emojis} from "@/shared/ui";
import {CloseModalBtn} from "@/entities/closeModalBtn";
import styles from "./styles.module.scss"

const DeleteAnnouncementModal = () => {
    return (
        <div className={styles.content}>
            <Emojis/>
            <h3 className="h3">Удалить объявление?</h3>
            <p className={styles.content__text}>Объявление удалится навсегда!</p>
            <div className={styles.content__buttons}>
                <Button className="btn_bordered">Отменить</Button>
                <Button className="btn_danger">Удалить</Button>
            </div>
            <CloseModalBtn/>
        </div>
    );
};

export default DeleteAnnouncementModal;