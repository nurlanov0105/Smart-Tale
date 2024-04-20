"use client";

import { FC, useState } from "react";
import styles from "./styles.module.scss";

import { ButtonsList } from "@/features/buttonsList";
import { OrderList } from "@/features/orderList";
import { historyValues } from "../model/values";
import { SelectDate } from "@/entities/selectDate";

const History: FC = () => {
   const [type, setType] = useState(historyValues[0].postValue);

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
            <ButtonsList type={type} setType={setType} values={historyValues} />
            <div className={styles.section__date}>
               <h5>Фильтр по дате принятия заказа</h5>
               {/*<SelectDate />*/}
            </div>
         </div>
         <OrderList data={data} itemType="order" />
      </section>
   );
};

export default History;
