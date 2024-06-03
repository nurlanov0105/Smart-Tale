import { FC } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import type { PaginationButtonProps } from "../model/types";

const PaginationButton: FC<PaginationButtonProps> = ({ page, isActive, onClick }) => {
   return (
      <button
         className={clsx(styles.btn, isActive ? styles.btn_active : "")}
         onClick={onClick}
         disabled={typeof page === "string"}>
         {page}
      </button>
   );
};

export default PaginationButton;
