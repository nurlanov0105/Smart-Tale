"use client";

import { FC } from "react";
import { ModalProps } from "../../model/types";
import styles from "./styles.module.scss";
import { Button } from "@/shared/ui";
import { ModalActionsMap } from "../../model/helper";
import clsx from "clsx";
import { useAddEmployeeOrder } from "@/features/admin/adminEmployeesItem";

const InfoListModal: FC<ModalProps> = ({ componentName, data, type }) => {
   // const { title, type } = ModalActionsMap[componentName as keyof typeof ModalActionsMap];

   const { mutate: orderAdd, isPending: orderIsLoading } = useAddEmployeeOrder();

   const handleClick = (slug: any) => {
      if (type === "order") {
         orderAdd({ orderSlug: slug, employeeSlug: data?.slug ? data.slug : "" });
      } else {
         orderAdd({
            orderSlug: data?.slug ? data.slug : "",
            employeeSlug: slug,
         });
      }
   };

   return (
      <div className={styles.modal}>
         <h3 className={clsx(styles.modal__title, "h3")}>
            {type === "order" ? "Список заказов" : "Список сотрудников"}
         </h3>

         <ul className={styles.list}>
            {data?.data?.length === 0 ? (
               <p>Список пуст</p>
            ) : (
               data?.data?.map((item) => {
                  if (type === "order") {
                     return (
                        <li key={item?.slug || item?.user_slug} className={styles.list__item}>
                           <div className={styles.list__block}>
                              <div
                                 className={styles.list__img}
                                 style={{ backgroundImage: `url(${item?.image})` }}
                              />
                              <h3>{item?.title || `${item?.first_name} ${item?.last_name}`}</h3>
                           </div>

                           <Button
                              disabled={orderIsLoading}
                              onClick={() => handleClick(item?.slug || item?.user_slug)}>
                              {orderIsLoading ? "Загрузка..." : "Выбрать"}
                           </Button>
                        </li>
                     );
                  } else {
                     // Проверка для другого типа
                     const isMatch = item?.order?.some((orderItem) => orderItem.slug === data.slug);

                     if (isMatch || item.job_title === "Основатель") {
                        return null;
                     }
                     return (
                        <li key={item?.slug || item?.user_slug} className={styles.list__item}>
                           <div className={styles.list__block}>
                              <div
                                 className={styles.list__img}
                                 style={{ backgroundImage: `url(${item?.image})` }}
                              />
                              <h3>{item?.title || `${item?.first_name} ${item?.last_name}`}</h3>
                           </div>

                           <Button onClick={() => handleClick(item?.slug || item?.user_slug)}>
                              {orderIsLoading ? "Загрузка..." : "Выбрать"}
                           </Button>
                        </li>
                     );
                  }
               })
            )}
         </ul>
      </div>
   );
};

export default InfoListModal;
