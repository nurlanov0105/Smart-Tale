import { FC } from "react";
import { PaginationProps } from "../model/types";
import styles from "./styles.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

const Pagination: FC<PaginationProps> = ({
   totalPages,
   currentPage,
   fetchNextPage,
   fetchPreviousPage,
   setCurrentPage,
}) => {
   return (
      <div className={styles.pagination}>
         <button className={styles.pagination__btn} onClick={fetchPreviousPage}>
            <ChevronLeft />
         </button>
         <div className={styles.pagination__list}>
            {[...Array(totalPages)].map((_: null, i: number) => (
               <button
                  key={i}
                  className={clsx(
                     styles.pagination__item,
                     styles.pagination__btn,
                     currentPage === i + 1 ? styles.pagination_active : ""
                  )}
                  onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
               </button>
            ))}
         </div>
         <button className={styles.pagination__btn} onClick={fetchNextPage}>
            <ChevronRight />
         </button>
      </div>
   );
};

export default Pagination;
