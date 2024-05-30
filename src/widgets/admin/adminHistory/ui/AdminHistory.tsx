"use client";
import React, { useState } from "react";
import { Tabs } from "@/features/general/tabs";
import { OrderList } from "@/features/general/orderList";
import { Select } from "@/shared/ui";
import { employeesHistory, historyValues } from "../model/historyValues";
import { SelectDate } from "@/entities/general/selectDate";
import { EquipmentService, SkeletonTypes } from "@/shared/lib";
import styles from "./styles.module.scss";
import { EquipmentQueryKeys } from "@/shared/api";

const AdminHistory = () => {
   const [type, setType] = useState(historyValues[0].postValue);
   const [selected, setSelected] = useState(employeesHistory[0]);

   const data = [
      { id: 1, type: "order", status: "В процессе" },
      { id: 2, type: "order", status: "В процессе" },
      { id: 3, type: "order", status: "В процессе" },
      { id: 4, type: "order", status: "В процессе" },
      { id: 5, type: "order", status: "В процессе" },
      { id: 6, type: "order", status: "В процессе" },
   ];

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
