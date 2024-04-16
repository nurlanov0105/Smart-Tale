import React from 'react';
import styles from "./styles.module.scss"
import {Button, Emojis} from "@/shared/ui";
import {CloseModalBtn} from "@/entities/closeModalBtn";


const ChangeAvatarModal = () => {
    return (
        <div className={styles.content}>
            <Emojis/>
            <h3 className="h3">Изменить фото профиля?</h3>
            <p className={styles.content__text}>Загрузите фотографию из своей <br/> галлереи</p>
            <div className={styles.content__dragAndDrop}>
                <button className={styles.content__button}>+ Загрузить файл</button>
                <p className={styles.content__format}>Формат JPG, JPEG, PNG</p>
            </div>
            <Button>Сохранить</Button>
            <CloseModalBtn/>
        </div>
    );
};

export default ChangeAvatarModal;