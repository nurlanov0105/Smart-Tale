import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { ADMIN_ROUTES } from "@/shared/lib";
import { useThemeStore } from "@/shared/themeStore";

const EmployeesItem = ({ item }: { item: number }) => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <ul className={clsx(styles.item, styles[theme])}>
         <Link
            href={ADMIN_ROUTES.EMPLOYEES_DETAILS + "/employessDetailName"}
            className={styles.item__text}>
            <button>Олейников Кирилл Кириллович</button>
         </Link>
         <Link
            href={ADMIN_ROUTES.EMPLOYEES_DETAILS + "/employessDetailName"}
            className={styles.item__text}>
            <button>oleinikov@gmail.com</button>
         </Link>
         <li className={clsx(styles.item__text)}>
            <button className={styles.item__underline}>Заказ №234</button>
         </li>
         <li className={styles.item__text}>Утюжник</li>
         <li className={styles.item__text}>Авторизован</li>
      </ul>
   );
};

export default EmployeesItem;
