"use client";
import React, { FC, useState } from "react";
import { OrderForm } from "@/features/user/orderForm";
import { Tabs } from "@/features/general/tabs";
import { orderDetailsValues } from "../model/values";
import { Props } from "../model/types";
import styles from "./styles.module.scss";

const OrderDetail: FC<Props> = ({ btnType, isService = false }) => {
   const [type, setType] = useState(orderDetailsValues[0].postValue);

   return (
      <div className={styles.order}>
         {!isService && (
            <div className={styles.order__block}>
               <h3 className="h3">Тип объявления</h3>
               <div className={styles.order__margin}>
                  <Tabs type={type} setType={setType} values={orderDetailsValues} />
               </div>
            </div>
         )}

         <h3 className="h3">Информация об услуге</h3>
         <OrderForm type={type} btnType={btnType} />
      </div>
   );
};

export default OrderDetail;
