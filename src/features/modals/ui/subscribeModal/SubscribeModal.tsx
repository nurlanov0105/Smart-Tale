import React from "react";
import { Button, Emojis } from "@/shared/ui";

import styles from "./styles.module.scss";
import {closeModal} from "@/views/modal";

const SubscribeModal = () => {
   return (
      <div className={styles.subscribe}>
         <Emojis type="holidayStuff" />
         <h3 className="h3">
            Ура! <br />
            Подписка уже в пути!
         </h3>
         <p className={styles.subscribe__text}>С вами свяжется наш администратор</p>
         <Button onClick={closeModal}>Понятно</Button>
      </div>
   );
};

export default SubscribeModal;
