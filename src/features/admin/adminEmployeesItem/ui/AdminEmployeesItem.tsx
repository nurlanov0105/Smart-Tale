"use client";

import React, { FC } from "react";
import { ItemProps } from "../model/types";
import { Button, GlobalLoading, PriceFormat } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";
import { currenciesMap, ORGANIZATION_ROUTES, ROUTES, useGetDates } from "@/shared/lib";
import avatar from "@@/imgs/auth/auth-1.jpg";
import { useThemeStore } from "@/shared/store/themeStore";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useGetOrderEmployees } from "../model/useQueries";
import GlobalError from "next/dist/client/components/error-boundary";
import { ErrorMessage } from "@/entities/general/errorMessage";
import { monthsForDate } from "@/widgets/admin/adminOrganizationDetail/model/helper";

const AdminEmployeesItem: FC<ItemProps> = ({ item }) => {
   const theme = useThemeStore((state) => state.theme);
   const currency = currenciesMap[item.currency as keyof typeof currenciesMap];

   const { data, isLoading, isError } = useGetOrderEmployees(item?.slug);

   const { push } = useRouter();
   const handleRoute = () => push(ROUTES.ORGANIZATION_ANNOUNCEMENT_DETAILS + `/${item.slug}`);

   const { day, month, year } = useGetDates(item?.booked_at ? item?.booked_at : "");
   const monthFormat = monthsForDate()[month]?.value;

   if (!isLoading) {
      console.log("employeesData", data);
   }

   return (
      <div className={clsx(styles.item, styles[theme])}>
         <div className={styles.item__info}>
            <div className={styles.item__pointer} onClick={handleRoute}>
               <h5 className={styles.item__subtitle}>Заказ</h5>
               <p className={styles.item__title}>{item.title}</p>
               <p className={styles.item__text}>{item.description}</p>
               <p className={styles.item__price}>
                  <PriceFormat type={item?.currency} price={+item?.price} />
               </p>
            </div>
            <p className={styles.item__date}>Принял {`${day} ${monthFormat} ${year}`}</p>
         </div>
         <div className={styles.item__border}>
            <h4 className="h4">Сотрудники</h4>
            <div className={styles.item__employees}>
               {isLoading ? (
                  <GlobalLoading />
               ) : isError ? (
                  <ErrorMessage />
               ) : (
                  <Link
                     href={ORGANIZATION_ROUTES.EMPLOYEES_DETAILS + "/employessDetailName"}
                     className={styles.item__employee}>
                     <Image
                        className={styles.item__image}
                        src={avatar}
                        alt="avatar"
                        width={48}
                        height={48}
                     />
                     <div>
                        <h4 className="h4">Кирилл Олейников</h4>
                        <p className={styles.item__salary}>
                           {" "}
                           <PriceFormat type={item?.currency} price={+item?.price} />
                        </p>
                     </div>
                  </Link>
               )}
            </div>
         </div>
         <div className={styles.item__border}>
            <h4 className="h4">Заказчик</h4>
            <div className={styles.item__employees}>
               <Link
                  href={ROUTES.USERS + "/" + item?.author?.slug}
                  className={styles.item__employee}>
                  <Image
                     className={styles.item__image}
                     src={item?.author?.profile_image || avatar}
                     alt="avatar"
                     width={48}
                     height={48}
                  />
                  <div>
                     <h4 className="h4">
                        {item?.author?.last_name} {item?.author?.first_name}
                     </h4>
                     <p className={styles.item__salary}>{item?.author?.phone_number}</p>
                  </div>
               </Link>
            </div>
         </div>
         <div className={styles.item__button}>
            <Button onClick={handleRoute}>Посмотреть подробнее</Button>
         </div>
      </div>
   );
};

export default AdminEmployeesItem;
