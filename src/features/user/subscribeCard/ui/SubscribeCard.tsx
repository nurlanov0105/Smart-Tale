"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { useThemeStore } from "@/shared/store/themeStore";
import { Check } from "lucide-react";
import { Button } from "@/shared/ui";
import { CookiesServices, EnumTokens, ROUTES } from "@/shared/lib";
import { dataSubscribe } from "@/features/user/subscribeCard";
import { SubscribeCardProps } from "../model/types";

import clsx from "clsx";
import styles from "./styles.module.scss";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";

const SubscribeCard: FC<SubscribeCardProps> = ({ type, isPayment = false }) => {
   const theme = useThemeStore((state) => state.theme);
   const isSubscribe = useSubscribeStore(state => state.isSubscribe);
   const subscription = useSubscribeStore(state => state.data?.subscription);
   //    const handleSubscribeClick = () => {
   //       showModal(MODAL_KEYS.subscribe);
   //    };
   const router = useRouter();
   const data = dataSubscribe[type];
   const isPremium = data.title === "Премиум";

   const handleBuyClick = () => {
      CookiesServices.setToken({
         keyName: EnumTokens.SUBSCRIBE_TYPE,
         value: type,
         time: "3600",
      });
      router.push(ROUTES.STRIPE_PAYMENT);
   };

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
               {isPayment && (
                  <div className={styles.card__price}>
                     <span className={styles.card__discount}>-50%</span>
                     <h4 className={styles.card__cost}>{data.price} сом</h4>
                     <span className={styles.card__oldCost}>{data.oldPrice} сом</span>
                  </div>
               )}

               <div className={styles.card__descr}>{data.description}</div>
               <ul className={styles.card__list}>
                  {data.data.map((item: string) => (
                     <li className={styles.card__item} key={item}>
                        <Check />
                        <span>{item}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         {!isPayment && (
            <div className={styles.card__bottom}>
               <h5 className={styles.card__gray}>
                  Стоимость: <span className={styles.card__underline}>{data.title}</span>
               </h5>

               <div className={styles.card__price}>
                  <span className={styles.card__discount}>-50%</span>
                  <h4 className={styles.card__cost}>{data.price} сом</h4>
                  <span className={styles.card__oldCost}>{data.oldPrice} сом</span>
               </div>
               <Button disabled={isSubscribe} onClick={handleBuyClick}>
                  {
                     !isSubscribe ? "Приобрести" : "Куплено"
                  }

               </Button>
            </div>
         )}
      </div>
   );
};

export default SubscribeCard;
