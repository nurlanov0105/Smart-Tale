"use client";
import React, { useState } from "react";
import { Logo } from "@/entities/logo";
import { Button } from "@/shared/ui";
import { OrderList } from "@/features/orderList";
import { EmployeesList } from "@/features/employeesList";
import { organizationValues } from "@/widgets/organization";
import styles from "./styles.module.scss";
import { ButtonsList } from "@/features/buttonsList";
import { showModal } from "@/widgets/modal";

const Organization = () => {
   const [type, setType] = useState(organizationValues[0].postValue);

   const handleInviteClick = () => {
      showModal("InviteEmployeeModal", { isLightBg: true });
   };

   const data = [
      { id: 1, type: "order" },
      { id: 2, type: "equipment" },
      { id: 3, type: "order" },
      { id: 4, type: "equipment" },
      { id: 5, type: "equipment" },
      { id: 6, type: "order" },
   ];

   return (
      <div className={styles.organization}>
         <Logo />
         <div className={styles.organization__block}>
            <ButtonsList type={type} setType={setType} values={organizationValues} />
            {type === "users-list" && (
               <Button onClick={handleInviteClick}>Пригласить сотрудника</Button>
            )}
         </div>

         {type === "users-list" ? (
            <EmployeesList />
         ) : (
            <OrderList data={data} itemType="order" />
         )}
      </div>
   );
};

export default Organization;
