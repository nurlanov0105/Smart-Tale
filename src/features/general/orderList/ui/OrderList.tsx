import React, { FC } from "react";
import { OrderItem } from "@/entities/general/orderItem";
import { Props } from "../model/types";
import styles from "./styles.module.scss";
import { CommonSkeleton } from "@/shared/ui";
import { Pagination } from "../../pagination";
import { usePagination } from "@/shared/lib";
import { usePathname } from "next/navigation";
import { VacancyItem } from "@/entities/user/vacancyItem";
import { ResumeItem } from "@/entities/admin/resumeItem";

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

   const pathname = usePathname();

   const readyData = isError ? (
      <h3 className="h3">Упс, произошла ошибка 😅</h3>
   ) : isLoading ? (
      [...Array(8)].map((_, i: number) => <CommonSkeleton key={i} type={type} />)
   ) : (
      data?.map((item, i: number) => {
         if (pathname.includes("work-vacancies")) {
            // @ts-ignore
            return <VacancyItem item={item} key={i} />;
         } else if (pathname.includes("work-resumes")) {
            // @ts-ignore
            return <ResumeItem item={item} key={i} />;
         } else {
            return <OrderItem key={i} item={item} isCurrent={isCurrent} />;
         }
      })
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
