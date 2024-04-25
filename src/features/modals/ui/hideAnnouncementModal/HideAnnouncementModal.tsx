import React from "react";
import { Button, Emojis } from "@/shared/ui";
import styles from "./styles.module.scss";

const HideAnnouncementModal = () => {
   return (
      <div className={styles.content}>
         <Emojis type="reverse" />
         <h3 className="h3">Удалить объявление?</h3>
         <p className={styles.content__text}>Объявление удалится навсегда!</p>
         <div className={styles.content__buttons}>
            <Button className="btn_bordered">Отменить</Button>
            <Button>Скрыть</Button>
         </div>
      </div>
   );
};

export default HideAnnouncementModal;