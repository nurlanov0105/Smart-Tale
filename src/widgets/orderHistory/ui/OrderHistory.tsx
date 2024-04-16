"use client";

import { ButtonsList } from "@/features/buttonsList";
import styles from "./styles.module.scss";
import { historyValues } from "../model/values";
import { useState } from "react";
import { OrderTable } from "@/features/orderTable";

const OrderHistory = () => {
   const [type, setType] = useState(historyValues[0].postValue);

   return (
      <section className={styles.section}>
         <div className={styles.section__btns}>
            <ButtonsList type={type} setType={setType} values={historyValues} />
         </div>
         <OrderTable />
      </section>
   );
};

export default OrderHistory;
