"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { PathData } from "../model/consts";
import { Props } from "../model/types";
import styles from "./styles.module.scss";

const ModalCardHeader: FC<Props> = ({ title, cost }) => {
   const pathname = usePathname();

   return (
      <div className={styles.block}>
         <h4 className={styles.block__subtitle}>{PathData[pathname]?.path}</h4>
         <div className={styles.block__row}>
            <h3 className={styles.block__title}>{title}</h3>
         </div>
         <span className={styles.block__cost}>{cost} сом</span>
      </div>
   );
};

export default ModalCardHeader;
