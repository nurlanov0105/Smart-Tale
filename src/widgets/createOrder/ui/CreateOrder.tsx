"use client";
import React, { useState } from "react";
import { OrderForm } from "@/features/orderForm";
import { createOrderValues } from "@/widgets/createOrder";
import styles from "./styles.module.scss";
import { ButtonsList } from "@/features/buttonsList";

const CreateOrder = () => {
   const [type, setType] = useState(createOrderValues[0].postValue);

   return (
      <div className={styles.order}>
         <div className={styles.order__block}>
            <h3 className="h3">Тип объявления</h3>
            <div className={styles.order__margin}>
               <ButtonsList type={type} setType={setType} values={createOrderValues} />
            </div>
         </div>

         <h3 className="h3">Информация об оборудовании</h3>
         <OrderForm type={type} />
      </div>
   );
};

export default CreateOrder;
