"use client";
import React, { useState } from "react";
import { Logo } from "@/entities/general/logo";
import { Tabs } from "@/features/general/tabs";
import { valuesData } from "../model/values.data";
import { OrderList } from "@/features/general/orderList";
import styles from "./styles.module.scss";
import { SkeletonTypes } from "@/shared/lib";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";
import { EmployeesList } from "@/features/general/employeesList";
// import { AdminBack } from "@/entities/admin/adminBack";

const AdminOrganizationDetail = () => {
   const theme = useThemeStore((state) => state.theme);
   const [data, setData] = useState([
      { id: 1, type: "equipment" },
      { id: 2, type: "equipment" },
      { id: 3, type: "equipment" },
      { id: 4, type: "equipment" },
      { id: 5, type: "equipment" },
      { id: 6, type: "equipment" },
   ]);
   const [type, setType] = useState(valuesData[0].postValue);

   return (
      <div className={clsx(styles.organization, styles[theme])}>
         {/*<AdminBack title="Детали организации"/>*/}
         <Logo />
         <p className={styles.organization__date}>Создан 10 апреля 2024</p>
         <div className={styles.organization__margin}>
            <Tabs type={type} setType={setType} values={valuesData} />
         </div>

         {type === "users-list" ? (
            <EmployeesList />
         ) : (
            //   <OrderList
            //       data={data}
            //       isError={false}
            //       isLoading={false}
            //       type={SkeletonTypes.listItem}
            //   />
            <h3>Timely</h3>
         )}
      </div>
   );
};

export default AdminOrganizationDetail;
