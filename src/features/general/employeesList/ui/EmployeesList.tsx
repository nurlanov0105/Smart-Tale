import React from "react";

import { employeesCategories } from "../model/values.data";
import { EmployeesItem } from "@/entities/admin/employeesItem";
import { useThemeStore } from "@/shared/themeStore";

import clsx from "clsx";
import styles from "./styles.module.scss";
import {useEmployees} from "@/features/general/employeesList/model/useEmployees";

const EmployeesList = () => {
   const theme = useThemeStore((state) => state.theme);
   const list = [1, 2, 3, 4, 5,6,7,8,9];

   // const {data, isLoading, isError} = useEmployees()

   return (
       <div className={clsx(styles.table__border, styles[theme])}>
           <table className={styles.table}>
               <thead>
                    <tr className={styles.table__thead}>
                       {employeesCategories.map((category) => (
                           <th className={styles.table__item} key={category}>
                               {category}
                           </th>
                       ))}
                    </tr>
               </thead>
               <tbody className={styles.table__list}>
                    {list.map((item) => (
                        <EmployeesItem key={item} item={item}/>
                    ))}
               </tbody>
           </table>
       </div>
   );
};

export default EmployeesList;
