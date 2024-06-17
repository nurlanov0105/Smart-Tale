"use client";

import React, { FC } from "react";
import Link from "next/link";

import { ROUTES } from "@/shared/lib";
import { useThemeStore } from "@/shared/store/themeStore";

import clsx from "clsx";
import { OrderTableItemProps } from "../model/types";
import { useRouter } from "next/navigation";
import {boardHeadings} from "@/features/user/boardColumn/model/consts";
import styles from "./styles.module.scss";
import {getDate, getMonth, getYear} from "date-fns";
import {monthsForDate} from "@/widgets/admin/adminOrganizationDetail/model/helper";

const OrderTableItem: FC<OrderTableItemProps> = ({ item }) => {
   const theme = useThemeStore((state) => state.theme);
   const router = useRouter();

   if (!item) return null

   const { slug, title, price, booked_at, type,status, deadline  } = item;

   const handleItemClick = () => {
      if (type === "Order") {
         router.push(ROUTES.ANNOUNCEMENT_DETAILS_ORDER + `/${item.slug}`);
      } else if (type === "Equipment") {
         router.push(ROUTES.ANNOUNCEMENT_DETAILS_EQUIPMENT + `/${item.slug}`);
      } else {
         router.push(ROUTES.ANNOUNCEMENT_DETAILS_SERVICE + `/${item.slug}`);
      }
   };

   const day = getDate(deadline ?? "2024")
   const year = getYear(deadline ?? "2024")
    const month = getMonth(deadline ?? "2024")
    const monthFormat = monthsForDate()[month]

   const statusOrder = boardHeadings["Waiting"]

   return (
      <li className={clsx(styles.item, styles[theme])}>
         <span className={styles.item__link} onClick={handleItemClick}>
            {title}
         </span>
         <span>{Math.round(Number(price))} сом</span>
          <span>
              {
                  booked_at
              }
              3 апреля 2024 год
          </span>
         <span>
             {day} {monthFormat.value} {year} года
         </span>
         <span>
             <span className={styles.item__status} style={{
                 backgroundColor: statusOrder[theme]
             }}>
                 {statusOrder.name}
             </span>
         </span>
      </li>
   );
};

export default OrderTableItem;
