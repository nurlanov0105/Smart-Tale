import { FC } from "react";
import { PaginationButton } from "@/entities/general/paginationButton";
import { PaginationProps } from "../model/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./styles.module.scss";

const Pagination: FC<PaginationProps> = ({
   totalPages,
   currentPage,
   fetchNextPage,
   fetchPreviousPage,
   setCurrentPage,
}) => {
   const renderPageButtons = () => {
      const buttons = [];

      if (totalPages <= 8) {
         for (let i = 1; i <= totalPages; i++) {
            buttons.push(
               <PaginationButton
                  key={i}
                  page={i}
                  isActive={currentPage === i}
                  onClick={() => setCurrentPage(i)}
               />
            );
         }
      } else {
         buttons.push(
            <PaginationButton
               key={1}
               page={1}
               isActive={currentPage === 1}
               onClick={() => setCurrentPage(1)}
            />
         );

         if (currentPage > 4) {
            buttons.push(<PaginationButton key="start-ellipsis" page="..." onClick={() => {}} />);
         }

         const startPage = Math.max(2, currentPage - 2);
         const endPage = Math.min(totalPages - 1, currentPage + 2);

         for (let i = startPage; i <= endPage; i++) {
            buttons.push(
               <PaginationButton
                  key={i}
                  page={i}
                  isActive={currentPage === i}
                  onClick={() => setCurrentPage(i)}
               />
            );
         }

         if (currentPage < totalPages - 3) {
            buttons.push(<PaginationButton key="end-ellipsis" page="..." onClick={() => {}} />);
         }

         buttons.push(
            <PaginationButton
               key={totalPages}
               page={totalPages}
               isActive={currentPage === totalPages}
               onClick={() => setCurrentPage(totalPages)}
            />
         );
      }

      return buttons;
   };

   return (
      <div className={styles.pagination}>
         <button className={styles.pagination__btn} onClick={fetchPreviousPage}>
            <ChevronLeft />
         </button>
         <div className={styles.pagination__list}>{renderPageButtons()}</div>
         <button className={styles.pagination__btn} onClick={fetchNextPage}>
            <ChevronRight />
         </button>
      </div>
   );
};

export default Pagination;
