"use client";
import React, { FC, useState } from "react";
import { OrderForm } from "@/features/orderForm";
import styles from "./styles.module.scss";
import { ButtonsList } from "@/features/buttonsList";
import { orderDetailsValues } from "../model/values";
import { Props } from "../model/types";

const OrderDetail: FC<Props> = ({ btnType }) => {
   const [type, setType] = useState(orderDetailsValues[0].postValue);

   return (
      <div className={styles.order}>
         <div className={styles.order__block}>
            <h3 className="h3">Тип объявления</h3>
            <div className={styles.order__margin}>
               <ButtonsList type={type} setType={setType} values={orderDetailsValues} />
            </div>
         </div>

         <h3 className="h3">Информация об оборудовании</h3>
         <OrderForm type={type} btnType={btnType} />
      </div>
   );
};

export default OrderDetail;
