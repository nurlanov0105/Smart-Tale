"use client";

import { FC, useState } from "react";
// import { ListingsDefineService } from "../model/values";
import { Tabs } from "@/features/general/tabs";
import { OrderList } from "@/features/general/orderList";
import styles from "./styles.module.scss";
import { SkeletonTypes, announcementTabs } from "@/shared/lib";
import { EquipmentService, UserQueryKeys } from "@/shared/api";

const Listings: FC = () => {
   const [type, setType] = useState(announcementTabs[0].postValue);

   // const dataList = [
   //    { id: 1, type: "order" },
   //    { id: 2, type: "equipment" },
   //    { id: 3, type: "order" },
   //    { id: 4, type: "equipment" },
   //    { id: 5, type: "equipment" },
   //    { id: 6, type: "order" },
   // ];

   return (
      <div className={styles.listings}>
         <div className={styles.listings__btns}>
            <Tabs type={type} setType={setType} values={announcementTabs} />
         </div>
         <OrderList
            fetchFunction={EquipmentService.getMyAds}
            queryKey={UserQueryKeys.ANNOUNCEMENTS_LISTINGS}
            tab={type}
            type={SkeletonTypes.listItem}
         />
      </div>
   );
};

export default Listings;
