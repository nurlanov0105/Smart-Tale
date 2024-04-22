"use client";
import React, { useState } from "react";
import { Logo } from "@/entities/general/logo";
import { Button } from "@/shared/ui";
import { OrderList } from "@/features/general/orderList";
import { EmployeesList } from "@/features/general/employeesList";
import { organizationValues } from "../model/values";
import { Tabs } from "@/features/general/tabs";
import { showModal } from "@/views/modal";
import styles from "./styles.module.scss";

const Organization = () => {
   const [type, setType] = useState(organizationValues[0].postValue);

   const handleInviteClick = () => {
      showModal("InviteEmployeeModal", { isLightBg: true });
   };

   const data = [
      { id: 1, type: "order" },
      { id: 2, type: "order" },
      { id: 3, type: "order" },
      { id: 4, type: "order" },
      { id: 5, type: "order" },
      { id: 6, type: "order" },
   ];

   return (
      <div className={styles.organization}>
         <Logo />
         <div className={styles.organization__block}>
            <Tabs type={type} setType={setType} values={organizationValues} />
            {type === "users-list" && (
               <Button onClick={handleInviteClick}>Пригласить сотрудника</Button>
            )}
         </div>

         {type === "users-list" ? <EmployeesList /> : <OrderList data={data}/>}
      </div>
   );
};

export default Organization;
