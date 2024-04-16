import React from 'react';
import {Button, Emojis} from "@/shared/ui";
import styles from "./styles.module.scss";
import {CloseModalBtn} from "@/entities/closeModalBtn";

const HideAnnouncement = () => {
    return (
        <div className={styles.content}>
            <Emojis/>
            <h3 className="h3">Удалить объявление?</h3>
            <p className={styles.content__text}>Объявление удалится навсегда!</p>
            <div className={styles.content__buttons}>
                <Button className="btn_bordered">Отменить</Button>
                <Button >Скрыть</Button>
            </div>
            <CloseModalBtn/>
        </div>
    );
};

export default HideAnnouncement;