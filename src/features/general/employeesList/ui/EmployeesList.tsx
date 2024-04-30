import React from "react";
import { EmployeesItem } from "@/entities/admin/employeesItem";
import styles from "./styles.module.scss";
import { employeesCategories } from "@/features/general/employeesList/model/values.data";
import { CommonSkeleton } from "@/shared/ui";

const EmployeesList = () => {
   const list = [1, 2, 3, 4, 5];

   return (
      <div className={styles.list}>
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
      //  <CommonSkeleton type="table"/>
   );
};

export default EmployeesList;
