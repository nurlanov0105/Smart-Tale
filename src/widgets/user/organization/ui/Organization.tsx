"use client";
import React, { useState } from "react";
import { Logo } from "@/entities/general/logo";
import { Button } from "@/shared/ui";
import { OrderList } from "@/features/general/orderList";
import { EmployeesList } from "@/features/general/employeesList";
import { organizationValues } from "../model/values";
import { Tabs } from "@/features/general/tabs";
import { showModal } from "@/views/modal";
import {MODAL_KEYS} from "@/shared/lib";
import styles from "./styles.module.scss";
import { SkeletonTypes } from "@/shared/lib";

const Organization = () => {
   const [type, setType] = useState(organizationValues[0].postValue);

   const handleInviteClick = () => {
      showModal(MODAL_KEYS.inviteEmployee, { isLightBg: true });
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
         <Logo type="organization"/>
         <div className={styles.organization__block}>
            <Tabs type={type} setType={setType} values={organizationValues} />
            {type === "users-list" && (
               <Button onClick={handleInviteClick}>Пригласить сотрудника</Button>
            )}
         </div>

         {type === "users-list" ? (
            <EmployeesList />
         ) : (
            <OrderList
               data={data}
               isError={false}
               isLoading={false}
               type={SkeletonTypes.listItem}
            />
         )}
      </div>
   );
};

export default Organization;
