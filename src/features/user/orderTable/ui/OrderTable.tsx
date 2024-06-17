"use client";

import React, { FC, useEffect } from "react";
import { OrderItemType, OrderTableItem } from "@/entities/general/orderTableItem";
import { OrderCategories } from "../model/values";
import { useThemeStore } from "@/shared/store/themeStore";
import { OrderTableProps } from "../model/types";
import { CommonSkeleton } from "@/shared/ui";
import { ObserverSection } from "@/entities/general/observerSection";
import clsx from "clsx";
import {useInfinityScroll2} from "@/widgets/user/cardsSection/model/useInfinityScroll2";
import styles from "./styles.module.scss";

const OrderTable: FC<OrderTableProps> = ({  queryKey, param_tab }) => {
   const theme = useThemeStore((state) => state.theme);

   const initialData = {
       data: [],
       has_next_page: true,
       next_page_number: 1
   }

   const {
       observerTarget,
       isError,
       isLoading,
       isFetchingNextPage,
       data
   } = useInfinityScroll2({initialData, queryKey, dependencies: {param_tab} })


   const readyData = isError ? (
      <h3 className="h3">Упс, произошла ошибка 😅</h3>
   ) : isLoading ? (
      <div className={styles.skeletons}>
         {[...Array(8)].map((_, i: number) => (
            <CommonSkeleton key={i} type="listItem" />
         ))}
      </div>
   ) : (
      data?.map((item: OrderItemType, i: number) => <OrderTableItem key={i} item={item} />).reverse()
   );

   return (
      <section className={styles.section}>
         <div className={clsx(styles.table, styles[theme])}>
            <div className={styles.table__heading}>
               {OrderCategories.map((category) => (
                  <h4 key={category} className={styles.table__title}>
                     {category}
                  </h4>
               ))}
            </div>
            <ul className={styles.table__list}>{readyData}</ul>
         </div>
         <ObserverSection
            isInitialLoading={isLoading}
            isLoading={isFetchingNextPage}
            observerTarget={observerTarget}
         />
      </section>
      // <CommonSkeleton type="orderTable"/>
   );
};

export default OrderTable;
