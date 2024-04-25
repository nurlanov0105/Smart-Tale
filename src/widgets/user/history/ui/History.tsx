"use client";

import { FC, useState } from "react";
import { Tabs } from "@/features/general/tabs";

import { OrderList } from "@/features/general/orderList";
import { historyValues } from "../model/values";
import {type IDateProps, SelectDate} from "@/entities/general/selectDate";
import styles from "./styles.module.scss";

const History: FC = () => {
   const [type, setType] = useState(historyValues[0].postValue)

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
                />
            </div>
         </div>
         <OrderList data={data} />
      </section>
   );
};

export default History;
