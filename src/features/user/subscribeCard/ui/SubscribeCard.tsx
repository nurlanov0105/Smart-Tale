"use client";

import { Check } from "lucide-react";
import { Button } from "@/shared/ui";
import { showModal } from "@/views/modal";
import { MODAL_KEYS } from "@/shared/lib";
import { dataSubscribe } from "@/features/user/subscribeCard";

import { FC } from "react";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";
import styles from "./styles.module.scss";

const SubscribeCard: FC<{ type: string }> = ({ type }) => {
   const theme = useThemeStore((state) => state.theme);
   const handleSubscribeClick = () => {
      showModal(MODAL_KEYS.subscribe);
   };

   const data = dataSubscribe[type];

   const isPremium = data.title === "Премиум"

   return (
       <div className={clsx(styles.card, styles[theme])}>
           <div>
               <div
                   className={clsx(styles.card__heading, {
                       [styles.card__premium]: isPremium,
                   })}>
                   <h3 className="h3">{data.title}</h3>
                   <span
                       className={clsx({
                           [styles.card__hit]: isPremium,
                           [styles.card__none]: !isPremium,
                       })}>
                  ХИТ!
               </span>
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
           </div>
           <div className={styles.card__bottom}>
               <h5 className={styles.card__gray}>
                   Стоимость: <span className={styles.card__underline}>{data.title}</span>
               </h5>
               <div className={styles.card__price}>
                   <span className={styles.card__discount}>-50%</span>
                   <h4 className={styles.card__cost}>{data.price} сом</h4>
                   <span className={styles.card__oldCost}>{data.oldPrice} сом</span>
               </div>
               <Button onClick={handleSubscribeClick}>Оплатить</Button>
           </div>
       </div>



   )
};

export default SubscribeCard;
