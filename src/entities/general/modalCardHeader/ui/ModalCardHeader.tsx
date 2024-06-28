"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { PathData } from "../model/consts";
import { ModalheaderProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { usePathSlug } from "../../headerIntro";
import { DeadlineInfo } from "../../deadlineInfo";
import {AnnouncementTypes} from "@/shared/lib";
import dynamic from "next/dynamic";

const PriceButton = dynamic(() => import("@/shared/ui/price/PriceFormat"))

const ModalCardHeader: FC<ModalheaderProps> = ({ title, cost, isLarge, currency, type, deadline }) => {
   const { pathname, slug, remainingPath } = usePathSlug();

   return (
      <div className={clsx(styles.block, isLarge ? styles.block_large : "")}>
         <h4 className={styles.block__subtitle}>
            {pathname === "/dashboard/favorites" ? "Личный кабинет/Избранные" : ""}
            {!slug ? PathData[pathname]?.path : PathData[remainingPath]?.path}
         </h4>
         <div className={styles.block__row}>
            <h3 className={styles.block__title}>{title}</h3>
            {type === AnnouncementTypes.order && deadline && <DeadlineInfo deadline={deadline} />}
         </div>
         <span className={styles.block__cost}>
             <PriceButton price={+cost} type={currency}/>
         </span>
      </div>
   );
};

export default ModalCardHeader;
