"use client";

import { FC, useState } from "react";
import styles from "./styles.module.scss";
import { listingsValues } from "../model/values";
import { ButtonsList } from "@/features/buttonsList";
import { OrderList } from "@/features/orderList";

const Listings: FC = () => {
   const [type, setType] = useState(listingsValues[0].postValue);

   const data = [
      { id: 1, type: "order" },
      { id: 2, type: "equipment" },
      { id: 3, type: "order" },
      { id: 4, type: "equipment" },
      { id: 5, type: "equipment" },
      { id: 6, type: "order" },
   ];

   return (
      <div className={styles.listings}>
         <div className={styles.listings__btns}>
            <ButtonsList type={type} setType={setType} values={listingsValues} />
         </div>
         <OrderList data={data} itemType="equipment"/>
      </div>
   );
};

export default Listings;
