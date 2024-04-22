"use client";
import React, { useState } from "react";
import { Tabs } from "@/features/general/tabs";
import { OrderList } from "@/features/general/orderList";
import { Select } from "@/shared/ui";
import { employeesHistory, historyValues } from "../model/historyValues";
import { SelectDate } from "@/entities/general/selectDate";
import type { IDateProps } from "@/entities/general/selectDate";
import styles from "./styles.module.scss";

const AdminHistory = () => {
   const [type, setType] = useState(historyValues[0].postValue);
   const [selected, setSelected] = useState(employeesHistory[0]);

   const [day, setDay] = useState<IDateProps>({ value: 0, postValue: 0 });
   const [month, setMonth] = useState<IDateProps>({ value: "", postValue: 0 });
   const [year, setYear] = useState<IDateProps>({ value: 0, postValue: 0 });

   const data = [
      { id: 1, type: "order" },
      { id: 2, type: "order" },
      { id: 3, type: "order" },
      { id: 4, type: "order" },
      { id: 5, type: "order" },
      { id: 6, type: "order" },
   ];

   return (
      <section className={styles.section}>
         <div className={styles.section__margin}>
            <h4 className="h4">Пользователь</h4>
         </div>
         <Select
            selected={selected}
            setSelected={setSelected}
            title="Сотрудник"
            employees={employeesHistory}
         />
         <div className={styles.section__row}>
            <Tabs type={type} setType={setType} values={historyValues} />
            <div className={styles.section__date}>
               <h5>Фильтр по дате принятия заказа</h5>
               <SelectDate
                  day={day}
                  setDay={setDay}
                  month={month}
                  setMonth={setMonth}
                  year={year}
                  setYear={setYear}
                  type="admin"
               />
            </div>
         </div>
         <OrderList data={data} itemType="order" isAdmin={true} />
      </section>
   );
};

export default AdminHistory;
