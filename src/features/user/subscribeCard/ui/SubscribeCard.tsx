"use client";

import { Check } from "lucide-react";
import { Button } from "@/shared/ui";
import { showModal } from "@/views/modal";
import { MODAL_KEYS } from "@/shared/lib";
import { dataSubscribe } from "@/features/user/subscribeCard";

import styles from "./styles.module.scss";
import { FC } from "react";

const SubscribeCard: FC<{ type: string }> = ({ type }) => {
   const handleSubscribeClick = () => {
      showModal(MODAL_KEYS.subscribe);
   };

   const data = dataSubscribe[type];

   return (
      <div className={styles.card}>
         <div className={styles.card__heading}>
            <h3 className="h3">{data.title}</h3>
         </div>
         <div className={styles.card__body}>
            <div className={styles.card__descr}>{data.description}</div>

            <ul className={styles.card__list}>
               {data.data.map((item: any) => (
                  <li className={styles.card__item} key={item}>
                     <Check />
                     <span>{item}</span>
                  </li>
               ))}
            </ul>
         </div>
         <div className={styles.card__bottom}>
            <h5 className={styles.card__gray}>Стоимость {data.title}</h5>
            <h4 className={styles.card__cost}>{data.price} сом.</h4>
            <Button onClick={handleSubscribeClick}>Оплатить</Button>
         </div>
      </div>
   );
};

export default SubscribeCard;
