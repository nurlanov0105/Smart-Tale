"use client";
import React, { useState } from "react";
import { EmptyContent } from "@/entities/admin/emptyContent";
import { EmployeesList } from "@/features/general/employeesList";
import { Button } from "@/shared/ui";
import { ADMIN_ROUTES } from "@/shared/lib";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

const AdminEmployees = () => {
   const [data, setData] = useState<number[]>([2]);
   const router = useRouter();
   const handleRoute = () => {
      router.push(ADMIN_ROUTES.INVITE_EMPLOYEES);
   };

   return (
      <>
         {!data.length ? (
            <EmptyContent type="employees" />
         ) : (
             <div className={styles.employees__wrapper}>
                <div>
                   <div className={styles.employees}>
                      <h4 className="h4">Список сотрудников</h4>
                      <div className={styles.employees__btns}>
                         <Button onClick={handleRoute}>Пригласите сотрудника</Button>
                      </div>
                   </div>
                   <EmployeesList/>
                </div>

             </div>
         )}
      </>
   );
};

export default AdminEmployees;
