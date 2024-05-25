import { FC } from "react";
import { PaginationProps } from "../model/types";
import styles from "./styles.module.scss";
import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";

const Pagination: FC<PaginationProps> = ({ totalPages = 4, currentPage = 0 }) => {
   return (
      <div className={styles.pagination}>
         <button className={styles.pagination__btn}>
            <ArrowLeft />
         </button>
         <ul className={styles.pagination__list}>
            {[...Array(totalPages)].map((_: any, i: number) => (
               <li className={clsx(styles.pagination__item, styles.pagination__btn)} key={i}>
                  {i + 1}
               </li>
            ))}
         </ul>
         <button className={styles.pagination__btn}>
            <ArrowRight />
         </button>
      </div>
   );
};

export default Pagination;
