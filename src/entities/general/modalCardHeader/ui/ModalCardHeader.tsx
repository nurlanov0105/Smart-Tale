"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { PathData } from "../model/consts";
import { ModalheaderProps } from "../model/types";
import styles from "./styles.module.scss";
import clsx from "clsx";

const ModalCardHeader: FC<ModalheaderProps> = ({ title, cost, isLarge }) => {
   const pathname = usePathname() as string;
   console.log(pathname);

   const pathArray = pathname.split("/");
   const slug =
      pathname.includes("/order-details/") || pathname.includes("/card-details/")
         ? pathArray.pop()
         : "";

   const remainingPath = pathArray.join("/");

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
