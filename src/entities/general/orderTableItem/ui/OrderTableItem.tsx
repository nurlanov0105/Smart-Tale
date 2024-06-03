"use client";

import React, { FC } from "react";
import Link from "next/link";

import { ROUTES } from "@/shared/lib";
import { useThemeStore } from "@/shared/themeStore";

import clsx from "clsx";
import styles from "./styles.module.scss";
import { OrderTableItemProps } from "../model/types";
import { useRouter } from "next/navigation";

const OrderTableItem: FC<OrderTableItemProps> = ({ item }) => {
   const theme = useThemeStore((state) => state.theme);
   const router = useRouter();
   const { slug, title, price, booked_at, type } = item;

   const handleItemClick = () => {
      if (type === "Order") {
         router.push(ROUTES.ANNOUNCEMENT_DETAILS_ORDER + `/${item.slug}`);
      } else if (type === "Equipment") {
         router.push(ROUTES.ANNOUNCEMENT_DETAILS_EQUIPMENT + `/${item.slug}`);
      } else {
         router.push(ROUTES.ANNOUNCEMENT_DETAILS_SERVICE + `/${item.slug}`);
      }
   };

   return (
      <li className={clsx(styles.item, styles[theme])}>
         <span className={styles.item__link} onClick={handleItemClick}>
            {title}
         </span>
         <span>{Math.round(Number(price))} сом</span>
         <span>{booked_at}</span>
         <span>В процессе</span>
      </li>
   );
};

export default OrderTableItem;
