"use client";
import React, { useState } from "react";
import { Logo } from "@/entities/general/logo";
import { Tabs } from "@/features/general/tabs";
import { valuesData } from "../model/values.data";
import { OrderList } from "@/features/general/orderList";
import styles from "./styles.module.scss";
import { SkeletonTypes } from "@/shared/lib";
// import { AdminBack } from "@/entities/admin/adminBack";

const AdminOrganizationDetail = () => {
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
      <div className={styles.organization}>
         {/*<AdminBack title="Детали организации"/>*/}
         <Logo />
         <p className={styles.organization__date}>Создан 10 апреля 2024</p>
         <div className={styles.organization__margin}>
            <Tabs type={type} setType={setType} values={valuesData} />
         </div>
         <OrderList
            isAdmin={true}
            data={data}
            isError={false}
            isLoading={false}
            type={SkeletonTypes.listItem}
         />
      </div>
   );
};

export default AdminOrganizationDetail;
