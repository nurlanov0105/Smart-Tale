import React from "react";
import { Button, Emojis } from "@/shared/ui";
import styles from "./styles.module.scss";

const ChangeAvatarModal = () => {
   return (
      <div className={styles.content}>
         <Emojis type="fine" />
         <h3 className="h3">Изменить фото профиля?</h3>
         <p className={styles.content__text}>
            Загрузите фотографию из своей <br /> галлереи
         </p>
         <div className={styles.content__dragAndDrop}>
            <button className={styles.content__button}>+ Загрузить файл</button>
            <p className={styles.content__format}>Формат JPG, JPEG, PNG</p>
         </div>
         <Button>Сохранить</Button>
      </div>
   );
};

export default ChangeAvatarModal;
