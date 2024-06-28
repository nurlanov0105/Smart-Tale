import React, { FC } from "react";
import { BriefcaseBusiness } from "lucide-react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import clsx from "clsx";
import { VacancyItemProps } from "../model/types";
import { useThemeStore } from "@/shared/store/themeStore";
import { ORGANIZATION_ROUTES, WORK } from "@/shared/lib/routes.config";
import styles from "./styles.module.scss";

const PriceFormat = dynamic(() => import("@/shared/ui/price/PriceFormat"), { ssr: false });

const VacancyItem: FC<VacancyItemProps> = ({ item, typeView, isAdmin, response }) => {
   const theme = useThemeStore((state) => state.theme);
   // const [isResponsed, setIsResponsed] = useState(false)

   // const handleResponse = () => {
   //    setIsResponsed(!isResponsed)
   //    response && response.mutate({slug: item.slug})
   // }
   const { push } = useRouter();
   const handleRoute = () => {
      push(`${WORK.VACANCY_DETAIL}/${item?.slug}`);
   };

   if (!item) return;

   return (
      <>
         {!isAdmin && (
            <div className={clsx(styles.item, styles[theme])}>
               <div className={styles.item__row}>
                  <div>
                     <Link
                        href={`${WORK.VACANCY_DETAIL}/${item?.slug}`}
                        className={styles.item__title}>
                        {item.job_title}
                     </Link>
                     <Link
                        href={`${WORK.VACANCY_DETAIL}/${item?.slug}`}
                        className={styles.item__salary}>
                        {/*{`${Math.round(+item.min_salary)}`} - {`${Math.round(+item.max_salary)}`}{" "}*/}
                        <PriceFormat
                           variant="number"
                           type={item.currency}
                           price={item.min_salary}
                        />{" "}
                        -
                        <PriceFormat type={item.currency} price={item.max_salary} />
                        {/*{item.currency}*/}
                     </Link>
                  </div>
                  <div>
                     <h4>{item?.organization?.title}</h4>
                     <h3>{item.location}</h3>
                  </div>
                  <div className={styles.item__experiance}>
                     <BriefcaseBusiness className={styles.item__icon} />
                     {item.experience}
                  </div>
                  {typeView && (
                     <div>
                        <p className={styles.item__description}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                           perferendis?
                        </p>
                     </div>
                  )}

                  <div>
                     <span className={styles.item__block}>Откликнитесь среди первых</span>
                  </div>
               </div>
               <div>
                  <button
                     onClick={handleRoute}
                     className={clsx(
                        styles.item__button
                        // isResponsed && styles.active
                     )}>
                     Посмотреть подробнее
                  </button>
               </div>
            </div>
         )}

         {isAdmin && (
            <Link
               href={`${ORGANIZATION_ROUTES.VACANCY_DETAIL}/${item?.slug}`}
               className={clsx(styles.item, styles[theme])}>
               <div className={styles.item__row}>
                  <div>
                     <h4 className={styles.item__title}>{item?.job_title}</h4>
                     <h3 className={styles.item__salary}>
                        {Math.round(+item?.min_salary)} - {Math.round(+item?.max_salary)}{" "}
                        {item.currency}
                     </h3>
                  </div>
                  <div>
                     <h4>{item?.organization?.title}</h4>
                     <h3>{item?.location}</h3>
                  </div>
                  <div className={styles.item__experiance}>
                     <BriefcaseBusiness className={styles.item__icon} />
                     {item?.experience}
                  </div>

                  <div>
                     {/*<span className={styles.item__block}>Откликнитесь среди первых</span>*/}
                  </div>
               </div>
               <div>
                  <button className={styles.item__button}>Подробнее</button>
               </div>
               <div className={styles.item__responses}>
                  {!!item?.response_count && `+${item?.response_count} отклика`}
               </div>
            </Link>
         )}
      </>
   );
};

export default VacancyItem;
