import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ItemProps } from "../model/types";
import { DASHBOARD } from "@/shared/lib";

import cardImage from "@@/imgs/order/equipment.png";
import clsx from "clsx";
import styles from "./styles.module.scss";

const OrderItem: FC<ItemProps> = ({ id, type, itemType, isDetail }) => {
   return (
      <Link href={DASHBOARD.ORDER_DETAIL} className={styles.item}>
         <div className={styles.item__left}>
            <Image
               className={styles.item__image}
               src={cardImage}
               alt="card"
               width={75}
               height={75}
            />
            <div className={styles.item__info}>
               {itemType === "order" ? (
                  <p className={clsx(styles.item__subtitle)}>Заказ №234</p>
               ) : itemType === "equipment" ? (
                  <p className={clsx(styles.item__subtitle, styles.item__subtitle_green)}>
                     Оборудование
                  </p>
               ) : (
                  <p
                     className={clsx(
                        styles.item__subtitle,
                        type === "order" ? styles.item__subtitle_green : ""
                     )}>
                     {type === "order" ? "Заказ" : "Оборудование"}
                  </p>
               )}
               <h6 className={styles.item__title}>Сшить костюм</h6>
               <p className={styles.item__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt...
               </p>
            </div>
         </div>
         {itemType === "order" && !isDetail ? (
            <p className={styles.item__price}>1000 сом</p>
         ) : (
            <p className={styles.item__detail}>Посмотреть детали</p>
         )}
      </Link>
   );
};

export default OrderItem;
