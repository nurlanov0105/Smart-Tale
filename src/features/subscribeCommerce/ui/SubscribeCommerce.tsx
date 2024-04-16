'use client'
import Image from "next/image";
import styles from "./styles.module.scss";

import commerceBox from "@@/imgs/commerce/01.png";
import { Button } from "@/shared/ui";
import {useModalStore} from "@/widgets/modal/model/modalState";

const SubscribeCommerce = () => {
    const showModal = useModalStore(state => state.showModal)

   return (
      <div className={styles.commerce}>
         <div className={styles.commerce__box}>
            <Image src={commerceBox} alt="commercial box" />
            <div className={styles.commerce__text}>
               <p>Оформите подписку, чтобы получить больше возможностей</p>
               <p>С вами свяжется наш администратор 😉</p>
            </div>
         </div>

         <Button onClick={() => showModal("SubscribeModal")} className="btn_white">Отправить запрос на подписку</Button>
      </div>
   );
};

export default SubscribeCommerce;
