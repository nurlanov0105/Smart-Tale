import React from "react";
import Link from "next/link";
import {EmployeesResponseTypes} from "@/features/general/employeesList/model/types";
import { ORGANIZATION_ROUTES } from "@/shared/lib";
import { useThemeStore } from "@/shared/themeStore";

import clsx from "clsx";
import styles from "./styles.module.scss";


const EmployeesItem = ({
        job_title,
        user_slug,
        first_name,
        last_name,
        middle_name,
        order,
        status,
        email
    } : EmployeesResponseTypes) => {

    const theme = useThemeStore((state) => state.theme);

   return (
      <tr className={clsx(styles.item, styles[theme])}>
         <td>
            <Link href={ORGANIZATION_ROUTES.EMPLOYEES_DETAILS + `/${user_slug}`}>
                {last_name} {first_name} {middle_name}
            </Link>
         </td>
         <td>
            <Link href={ORGANIZATION_ROUTES.EMPLOYEES_DETAILS + `/${user_slug}`}>
                {email}
            </Link>
         </td>
         <td>
            <div className={styles.item__td}>
                {
                    order?.slice(0, 3).map(order =>
                        <p key={order.slug}>{order.title}</p>
                    )
                }
            </div>
         </td>
         <td>
            <span>{job_title}</span>
         </td>
         <td>
            <span>{status}</span>
         </td>
      </tr>
   );
};
export default EmployeesItem;
