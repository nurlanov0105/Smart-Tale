"use client";

import React, { FC } from "react";
import { ItemProps } from "../model/types";
import { Button } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";
import { ORGANIZATION_ROUTES } from "@/shared/lib";
import avatar from "@@/imgs/auth/auth-1.jpg";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";
import {currenciesMap} from "@/widgets/user/createVacancy/model/values.data";

const AdminEmployeesItem: FC<ItemProps> = ({ item }) => {
   const theme = useThemeStore((state) => state.theme);
   const currency = currenciesMap[item.currency as keyof typeof currenciesMap]

   return (
      <div className={clsx(styles.item, styles[theme])}>
         <div className={styles.item__info}>
            <div>
               <h5 className={styles.item__subtitle}>Заказ</h5>
               <p className={styles.item__title}>{item.title}</p>
               <p className={styles.item__text}>{item.description}</p>
               <p className={styles.item__price}>{item.price} {currency.value}</p>
            </div>
            <div>
               <p className={styles.item__date}>Принял 10 апреля 2024</p>
            </div>
         </div>
         <div className={styles.item__border}>
            <h4 className="h4">Сотрудники</h4>
            <div className={styles.item__employees}>
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
                     <p className={styles.item__salary}>ЗП 900 сом</p>
                  </div>
               </Link>

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
                     <p className={styles.item__salary}>ЗП 900 сом</p>
                  </div>
               </Link>

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
                     <p className={styles.item__salary}>ЗП 900 сом</p>
                  </div>
               </Link>
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
                     <p className={styles.item__salary}>ЗП 900 сом</p>
                  </div>
               </Link>
            </div>
         </div>
         <div className={styles.item__border}>
            <h4 className="h4">Заказчик</h4>
            <div className={styles.item__employees}>
               <div className={styles.item__employee}>
                  <Image
                     className={styles.item__image}
                     src={avatar}
                     alt="avatar"
                     width={48}
                     height={48}
                  />
                  <div>
                     <h4 className="h4">Олег Васильев</h4>
                     <p className={styles.item__salary}>+996 700 010 101</p>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.item__button}>
            <Button>Завершить Заказ</Button>
         </div>
      </div>
   );
};

export default AdminEmployeesItem;
