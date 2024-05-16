"use client";
import React, { useState } from "react";
import { OrderForm } from "@/features/user/orderForm";
import { Tabs } from "@/features/general/tabs";

import { orderDetailsValues } from "../model/values";
import styles from "./styles.module.scss";

const CreateAnnouncement = () => {
   const [type, setType] = useState(orderDetailsValues[0].postValue);

   return (
      <div className={styles.order}>
         <div className={styles.order__block}>
            <h3 className="h3">Тип объявления</h3>
            <div className={styles.order__margin}>
               <Tabs type={type} setType={setType} values={orderDetailsValues} />
            </div>
         </div>

         <h3 className="h3">Информация об оборудовании</h3>
         <OrderForm type={type} />
      </div>
   );
};

export default CreateAnnouncement;
