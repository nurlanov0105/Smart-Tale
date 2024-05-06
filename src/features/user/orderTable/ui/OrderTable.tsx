"use client";

import React from "react";
import clsx from "clsx";

import { OrderTableItem } from "@/entities/general/orderTableItem";
import { OrderCategories } from "../model/values";
import { useThemeStore } from "@/shared/themeStore";

import styles from "./styles.module.scss";

const OrderTable = () => {
   const theme = useThemeStore((state) => state.theme);
   return (
       <div className={styles.table__orders}>
           <table className={clsx(styles.table, styles[theme])}>
               <thead>
               <tr className={styles.table__thead}>
                   {OrderCategories.map((category) => (
                       <th className={styles.table__item} key={category}>
                           {category}
                       </th>
                   ))}
               </tr>
               </thead>
               <tbody className={styles.table__list}>
               {[...Array(11)].map((_, i) => (
                   <OrderTableItem key={i}/>
               ))}
               </tbody>
           </table>
       </div>
       // <CommonSkeleton type="orderTable"/>
   );
};

export default OrderTable;
