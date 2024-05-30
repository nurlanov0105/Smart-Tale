"use client";
import React, { useState } from "react";
import { Tabs } from "@/features/general/tabs";
import { OrderList } from "@/features/general/orderList";
import { Select } from "@/shared/ui";
import { employeesHistory, historyValues } from "../model/historyValues";
import { EquipmentService, SkeletonTypes } from "@/shared/lib";

import { useHistoryOrders } from "../model/useHistoryOrders";
import { EquipmentQueryKeys } from "@/shared/api";
import styles from "./styles.module.scss";

const AdminHistory = () => {
   const [type, setType] = useState(historyValues[0].postValue);
   const [selected, setSelected] = useState(employeesHistory[0]);

   const { data } = useHistoryOrders();
   console.log(data);

   return (
      <section className={styles.section}>
         <div className={styles.section__margin}>
            <h4 className="h4">Пользователь</h4>
         </div>
         <Select
            //@ts-ignore
            selected={selected}
            setSelected={setSelected}
            title="Сотрудник"
            data={employeesHistory}
            type="default"
         />
         <div className={styles.section__row}>
            <Tabs type={type} setType={setType} values={historyValues} />
            <div className={styles.section__date}>
               <h5>Фильтр по дате принятия заказа</h5>
               {/*<SelectDate*/}
               {/*   day={day}*/}
               {/*   setDay={setDay}*/}
               {/*   month={month}*/}
               {/*   setMonth={setMonth}*/}
               {/*   year={year}*/}
               {/*   setYear={setYear}*/}
               {/*   type="admin"*/}
               {/*/>*/}
               {/* <SelectDate*/}
               {/*     setValue={setValue}*/}
               {/*     control={control}*/}
               {/*     day={day}*/}
               {/*     month={month}*/}
               {/*     year={year}*/}
               {/*     type="user"*/}
               {/* />*/}
            </div>
         </div>

         <OrderList
            fetchFunction={EquipmentService.getMyAds}
            queryKey={EquipmentQueryKeys.GET_MY_ADS}
            type={SkeletonTypes.listItem}
            tab={type}
            isCurrent={type === "current"}
         />
      </section>
   );
};

export default AdminHistory;
