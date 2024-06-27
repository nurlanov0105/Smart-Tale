"use client";

import { Tabs } from "@/features/general/tabs";
import { historyValues } from "../model/values.data";
import { useState } from "react";
import { OrderTable } from "@/features/user/orderTable";
import { OrdersService } from "@/shared/lib";
import { UserQueryKeys } from "@/shared/api";
import styles from "./styles.module.scss";

const OrderHistory = () => {
   const [type, setType] = useState(historyValues[0].postValue);

   return (
      <section className={styles.section}>
         <div className={styles.section__btns}>
            <Tabs type={type} setType={setType} values={historyValues} />
         </div>
         <OrderTable
            fetchFunction={OrdersService.getMyOrders}
            queryKey={UserQueryKeys.ORDER_HISTORY}
            param_tab={type}
         />
      </section>
   );
};

export default OrderHistory;
