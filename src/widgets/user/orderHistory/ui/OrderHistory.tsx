"use client";

import { Tabs } from "@/features/general/tabs";
import styles from "./styles.module.scss";
import { historyValues } from "../model/values";
import { useState } from "react";
import { OrderTable } from "@/features/user/orderTable";

const OrderHistory = () => {
   const [type, setType] = useState(historyValues[0].postValue);

   return (
      <section className={styles.section}>
         <div className={styles.section__btns}>
            <Tabs type={type} setType={setType} values={historyValues} />
         </div>
         <OrderTable/>
      </section>
   );
};

export default OrderHistory;
