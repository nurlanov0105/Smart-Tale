import React from "react";
import { employeesCategories } from "@/features/general/employeesList/model/values.data";
import {EmployeesItem} from "@/entities/admin/employeesItem";
import styles from "./styles.module.scss";


const EmployeesList = () => {
   const list = [1, 2, 3, 4, 5];

   return (
      <div className={styles.list}>
         <ul className={styles.list__top}>

            {
               employeesCategories.map(category =>
                   <li key={category} className={styles.list__item}>{category}</li>
               )
            }
         </ul>

         {list.map((item) => (
            <EmployeesItem key={item} item={item} />
         ))}

      </div>


   );
};

export default EmployeesList;
