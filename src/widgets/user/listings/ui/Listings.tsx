"use client";

import { FC, useState } from "react";
import { listingsValues } from "../model/values";
import { Tabs } from "@/features/general/tabs";
import { OrderList } from "@/features/general/orderList";
import styles from "./styles.module.scss";
import { SkeletonTypes } from "@/shared/lib";

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
            <Tabs type={type} setType={setType} values={listingsValues} />
         </div>
         <OrderList data={data} isError={false} isLoading={false} type={SkeletonTypes.listItem} />
      </div>
   );
};

export default Listings;
