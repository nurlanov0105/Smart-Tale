"use client"

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { WORK } from "@/shared/lib/routes.config";
import { useThemeStore } from "@/shared/store/themeStore";

import { ResumeItemProps } from "../model/types";
import styles from "@/entities/user/vacancyItem/ui/styles.module.scss";
import dynamic from "next/dynamic";

const PriceFormat = dynamic(() => import("@/shared/ui/price/PriceFormat"), {ssr: false})
const ResumeItem = ({ item }: ResumeItemProps) => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <Link
         href={`${WORK.RESUME_INFO + `/${item?.slug}`}`}
         className={clsx(styles.item, styles[theme])}>
         <div className={styles.item__row}>
            <div>
               <h4 className={styles.item__title}>{item?.job_title}</h4>
               <h3 className={styles.item__salary}>
                  {/*{item.min_salary} - {item.max_salary}*/}
                  10 000 - 20 000 KGS
                  {/*<PriceFormat price={item.min_salary} type={item.currency} variant="number"/> -*/}
                  {/*<PriceFormat price={item.max_salary} type={item.currency}/>*/}
               </h3>
            </div>
            <div>
               <h4>
                  {item?.author?.first_name} {item?.author?.last_name} {item?.author?.middle_name}
               </h4>
               <h3>
                  {
                     // item.location
                  }
                  Бишкек
               </h3>
            </div>
            <div className={styles.item__experiance}>
               {/*<BriefcaseBusiness className={styles.item__icon} />*/}
               <p>Опыт работы: </p>
               {item?.experience}
            </div>

            <div>
               <span className={styles.item__block}>В поиске</span>
            </div>
         </div>
         <div>
            <button className={styles.item__button}>Посмотреть подробнее</button>
         </div>
      </Link>
   );
};

export default ResumeItem;
