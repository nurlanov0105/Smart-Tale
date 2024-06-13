import React, {FC, useState} from "react";
import { BriefcaseBusiness } from "lucide-react";
import { VacancyItemProps } from "../model/types";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/store/themeStore";
import clsx from "clsx";
import Link from "next/link";
import { ORGANIZATION_ROUTES, WORK } from "@/shared/lib/routes.config";
import {Button} from "@/shared/ui";

const VacancyItem: FC<VacancyItemProps> = ({ item, typeView, isAdmin, response }) => {
   const theme = useThemeStore((state) => state.theme);
   const [isResponsed, setIsResponsed] = useState(false)

   const handleResponse = () => {
      setIsResponsed(!isResponsed)
      response && response.mutate({slug: item.slug})
   }

   return (
      <>
         {!isAdmin && (
            <div className={clsx(styles.item, styles[theme])}>
               <div className={styles.item__row}>
                  <div>
                     <Link href={`${WORK.VACANCY_DETAIL}/${item.slug}`} className={styles.item__title}>{item.job_title}</Link>
                     <Link href={`${WORK.VACANCY_DETAIL}/${item.slug}`} className={styles.item__salary}>
                        {`${Math.round(+item.min_salary)}`} - {`${Math.round(+item.max_salary)}`}{" "}
                        {item.currency}
                     </Link>
                  </div>
                  <div>
                     <h4>{item.organization.title}</h4>
                     <h3>{item.location}</h3>
                  </div>
                  <div className={styles.item__experiance}>
                     <BriefcaseBusiness className={styles.item__icon} />
                     {item.experience}
                  </div>
                  {typeView && (
                     <div>
                        <p className={styles.item__description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, perferendis?</p>
                     </div>
                  )}

                  <div>
                     <span className={styles.item__block}>Откликнитесь среди первых</span>
                  </div>
               </div>
               <div>

                  <button onClick={handleResponse} className={clsx(styles.item__button, isResponsed && styles.active)}>
                     {
                        !isResponsed ? "Откликнуться" : "Отозвать отклик"
                     }
                  </button>
               </div>
            </div>
         )}

         {isAdmin && (
            <Link
               href={`${ORGANIZATION_ROUTES.VACANCY_DETAIL}/${item.slug}`}
               className={clsx(styles.item, styles[theme])}>
               <div className={styles.item__row}>
                  <div>
                     <h4 className={styles.item__title}>{item.job_title}</h4>
                     <h3 className={styles.item__salary}>
                        {Math.round(+item.min_salary)} - {Math.round(+item.max_salary)} {item.currency}
                     </h3>
                  </div>
                  <div>
                     <h4>{item.organization.title}</h4>
                     <h3>{item.location}</h3>
                  </div>
                  <div className={styles.item__experiance}>
                     <BriefcaseBusiness className={styles.item__icon} />
                     {item.experience}
                  </div>

                  <div>
                     {/*<span className={styles.item__block}>Откликнитесь среди первых</span>*/}
                  </div>
               </div>
               <div>
                  <button className={styles.item__button}>Подробнее</button>
               </div>
               <div className={styles.item__responses}>{
                  !!item.response_count && `+${item.response_count} отклика`
               }</div>
            </Link>
         )}
      </>
   );
};

export default VacancyItem;
