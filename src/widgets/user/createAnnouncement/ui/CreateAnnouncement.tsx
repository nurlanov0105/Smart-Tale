"use client";

import React, { useState } from "react";
import { OrderForm } from "@/features/user/orderForm";
import { Tabs } from "@/features/general/tabs";
import { orderDetailsValues } from "../model/values";
import CreateAnnouncementContext from "./useFormContext";
import styles from "./styles.module.scss";

const CreateAnnouncement = () => {
   const [type, setType] = useState(orderDetailsValues[0].postValue);

   return (
      <div className={styles.order}>
         <div className={styles.order__block}>
            <h4 className="h4">Тип объявления</h4>
            <div className={styles.order__margin}>
               <Tabs type={type} setType={setType} values={orderDetailsValues} />
            </div>
         </div>

         <h4 className="h4">Информация об объявлении</h4>
         <CreateAnnouncementContext>
            <OrderForm type={type} />
         </CreateAnnouncementContext>
      </div>
   );
};

export default CreateAnnouncement;
