"use client";

import { Tabs } from "@/features/general/tabs";
import styles from "./styles.module.scss";
import { historyValues, profileHistoryValues } from "../model/values.data";
import { useState } from "react";
import { OrderTable } from "@/features/user/orderTable";
import { OrdersService } from "@/shared/lib";
import { UserQueryKeys } from "@/shared/api";

const OrderHistory = () => {
   const [type, setType] = useState(profileHistoryValues[0].postValue);

   return (
      <section className={styles.section}>
         <div className={styles.section__btns}>
            <Tabs type={type} setType={setType} values={profileHistoryValues} />
         </div>
         <OrderTable
            fetchFunction={OrdersService.getMyOrdersHistory}
            queryKey={UserQueryKeys.ORDER_HISTORY}
            param_tab={type}
         />
      </section>
   );
};

export default OrderHistory;
