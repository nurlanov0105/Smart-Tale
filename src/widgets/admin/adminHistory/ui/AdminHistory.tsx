"use client";
import React, { useState } from "react";
import { Tabs } from "@/features/general/tabs";
import { OrderList } from "@/features/general/orderList";
import { Select } from "@/shared/ui";
import { employeesHistory, historyValues } from "../model/historyValues";
import { SelectDate } from "@/entities/general/selectDate";
import { SkeletonTypes } from "@/shared/lib";
import styles from "./styles.module.scss";
import {useHistoryOrders} from "../model/useHistoryOrders";

const AdminHistory = () => {
   const [type, setType] = useState(historyValues[0].postValue);
   const [selected, setSelected] = useState(employeesHistory[0]);

   const dataList = [
      { id: 1, type: "order", status: "В процессе" },
      { id: 2, type: "order", status: "В процессе" },
      { id: 3, type: "order", status: "В процессе" },
      { id: 4, type: "order", status: "В процессе" },
      { id: 5, type: "order", status: "В процессе" },
      { id: 6, type: "order", status: "В процессе" },
   ];
    const {data} = useHistoryOrders()
    console.log(data)




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
            data={dataList}
            isLoading={false}
            isError={false}
            isCurrent={type === "current"}
            type={SkeletonTypes.listItem}
         />
      </section>
   );
};

export default AdminHistory;
