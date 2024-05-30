"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { PathData } from "../model/consts";
import { ModalheaderProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";

const ModalCardHeader: FC<ModalheaderProps> = ({ title, cost, isLarge }) => {
   const pathname = usePathname() as string;

   const pathArray = pathname.split("/");
   const slug =
      pathname.includes("/order-details/1/") ||
      pathname.includes("/order-details/2/") ||
      pathname.includes("/order-details/3/") ||
      pathname.includes("/card-details/1/") ||
      pathname.includes("/card-details/2/") ||
      pathname.includes("/card-details/3/")
         ? pathArray.pop()
         : "";

   const remainingPath = pathArray.join("/");
   console.log(remainingPath);

   return (
      <div className={clsx(styles.block, isLarge ? styles.block_large : "")}>
         <h4 className={styles.block__subtitle}>
            {pathname === "/dashboard/favorites" ? "Личный кабинет/Избранные" : ""}
            {!slug ? PathData[pathname]?.path : PathData[remainingPath]?.path}
         </h4>
         <div className={styles.block__row}>
            <h3 className={styles.block__title}>{title}</h3>
         </div>
         <span className={styles.block__cost}>{cost} сом</span>
      </div>
   );
};

export default ModalCardHeader;
