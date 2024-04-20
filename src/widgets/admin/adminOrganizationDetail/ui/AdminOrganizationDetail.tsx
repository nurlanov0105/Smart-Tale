"use client";
import React, { useState } from "react";
import { Logo } from "@/entities/general/logo";
import { Tabs } from "@/features/general/tabs";
import { valuesData } from "../model/values.data";
import { OrderList } from "@/features/general/orderList";
import styles from "./styles.module.scss";
// import { AdminBack } from "@/entities/admin/adminBack";

const AdminOrganizationDetail = () => {
   const [data, setData] = useState([
      { id: 1, type: "order" },
      { id: 2, type: "order" },
      { id: 3, type: "order" },
      { id: 4, type: "order" },
      { id: 5, type: "order" },
      { id: 6, type: "order" },
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
         <OrderList isAdmin={true} data={data} itemType="equipment" />
      </div>
   );
};

export default AdminOrganizationDetail;
