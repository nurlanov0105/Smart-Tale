import React, { FC, useEffect } from "react";
import { ItemType, OrderItem } from "@/entities/general/orderItem";
import { Props } from "../model/types";
import styles from "./styles.module.scss";
import { CommonSkeleton } from "@/shared/ui";
import { Pagination } from "../../pagination";
import { usePagination } from "@/shared/lib";

const OrderList: FC<Props> = ({
   fetchFunction,
   queryKey,
   param_tab,
   tab,
   ads,
   title,
   type,
   isCurrent,
}) => {
   const {
      data,
      totalPages,
      currentPage,
      isLoading,
      isError,
      hasNextPage,
      fetchNextPage,
      fetchPreviousPage,
      setCurrentPage,
   } = usePagination({
      fetchFunction,
      queryKey,
      param_tab,
      tab,
      ads,
      title,
   });

   if (!isLoading) {
      console.log(data);
   }

   const readyData = isError ? (
      <h3 className="h3">Упс, произошла ошибка 😅</h3>
   ) : isLoading ? (
      [...Array(8)].map((_, i: number) => <CommonSkeleton key={i} type={type} />)
   ) : (
      data?.map((item: ItemType, i: number) => (
         <OrderItem key={i} item={item} isCurrent={isCurrent} />
      ))
   );

   return (
      <div className={styles.section}>
         <div className={styles.list}>{readyData}</div>
         {totalPages > 1 && (
            <Pagination
               totalPages={totalPages}
               currentPage={currentPage}
               fetchNextPage={fetchNextPage}
               fetchPreviousPage={fetchPreviousPage}
               setCurrentPage={setCurrentPage}
            />
         )}
      </div>
   );
};

export default OrderList;
