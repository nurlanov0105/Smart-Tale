import React from "react";
import Link from "next/link";
import { ORGANIZATION_ROUTES } from "@/shared/lib";
import { useThemeStore } from "@/shared/themeStore";

import clsx from "clsx";
import styles from "./styles.module.scss";

const EmployeesItem = ({ item }: { item: number }) => {
   const theme = useThemeStore((state) => state.theme);

   return (
      <tr className={clsx(styles.item, styles[theme])}>
         <td>
            <Link href={ORGANIZATION_ROUTES.EMPLOYEES_DETAILS + "/employessDetailName"}>
               Олейников Кирилл Кириллович
            </Link>
         </td>
         <td>
            <Link href={ORGANIZATION_ROUTES.EMPLOYEES_DETAILS + "/employessDetailName"}>
               oleinikov@gmail.com
            </Link>
         </td>
         <td>
            <div className={styles.item__td}>
               <p>Заказ №234</p>
               <p>Заказ №234</p>
               <p>Заказ №234</p>
            </div>
         </td>
         <td>
            <span>Утюжник</span>
         </td>
         <td>
            <span>Авторизован</span>
         </td>
      </tr>
   );
};
export default EmployeesItem;
