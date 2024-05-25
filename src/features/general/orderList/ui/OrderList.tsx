import React, { FC, useEffect } from "react";
import { OrderItem } from "@/entities/general/orderItem";
import { Props } from "../model/types";
import styles from "./styles.module.scss";
import { CommonSkeleton } from "@/shared/ui";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";
import { ObserverSection } from "@/entities/general/observerSection";

// const OrderList: FC<Props> = ({ fetchFunction, queryKey, tab, type, isCurrent }) => {
//    const { observerTarget, isError, isLoading, isFetchingNextPage, data } = useInfiniteScroll({
//       fetchFunction,
//       param_tab: tab,
//       queryKey,
//    });

const OrderList: FC<Props> = ({ data, isLoading, isError, type, isCurrent }) => {
   const readyData = isError ? (
      <h3 className="h3">Упс, произошла ошибка 😅</h3>
   ) : isLoading ? (
      [...Array(8)].map((_, i: number) => <CommonSkeleton key={i} type={type} />)
   ) : (
      data?.map((item, i: number) => <OrderItem key={i} item={item} isCurrent={isCurrent} />)
   );

   return (
      <div>
         <div className={styles.list}>{readyData}</div>
         {/* <ObserverSection
            isInitialLoading={isLoading}
            isLoading={isFetchingNextPage}
            observerTarget={observerTarget}
         /> */}
      </div>
   );
};

export default OrderList;
