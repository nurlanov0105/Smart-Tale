import React from "react";
import { employeesCategories } from "@/features/general/employeesList/model/values.data";
import { EmployeesItem } from "@/entities/admin/employeesItem";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";

const EmployeesList = () => {
   const theme = useThemeStore((state) => state.theme);
   const list = [1, 2, 3, 4, 5];

   return (
      <div className={clsx(styles.list, styles[theme])}>
         <ul className={styles.list__top}>
            {employeesCategories.map((category) => (
               <li key={category} className={styles.list__item}>
                  {category}
               </li>
            ))}
         </ul>

         {list.map((item) => (
            <EmployeesItem key={item} item={item} />
         ))}
      </div>
   );
};

export default EmployeesList;
