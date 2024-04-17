"use client";

import { FC } from "react";
import Image from "next/image";

import commerceBox from "@@/imgs/commerce/01.png";
import { Button } from "@/shared/ui";
import { showModal } from "@/widgets/modal";
import { Props } from "../model/types";

import checkIcon from "@@/imgs/commerce/check.svg";
import styles from "./styles.module.scss";

const SubscribeCommerce: FC<Props> = ({ isSubscribed = false }) => {
   const handleSubscribeClick = () => {
      showModal("SubscribeModal");
   };

   return (
      <>
         {!isSubscribed ? (
            <div className={styles.commerce}>
               <div className={styles.commerce__box}>
                  <Image src={commerceBox} alt="commercial box" />
                  <div className={styles.commerce__text}>
                     <p>Оформите подписку, чтобы получить больше возможностей</p>
                     <p>С вами свяжется наш администратор :wink:</p>
                  </div>
               </div>
               <Button className="btn_white" onClick={handleSubscribeClick}>
                  Отправить запрос на подписку
               </Button>
            </div>
         ) : (
            <div className={styles.box}>
               <Image src={checkIcon} alt="check icon" width={20} height={20} />
               <div className={styles.box__col}>
                  <h4>Подписка оформлена</h4>
                  <p>Срок: до 1 августа 2024</p>
               </div>
            </div>
         )}
      </>
   );
};
export default SubscribeCommerce;
