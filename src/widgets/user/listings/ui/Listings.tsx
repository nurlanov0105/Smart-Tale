"use client";

import { FC, useState } from "react";
import { Tabs } from "@/features/general/tabs";
import { OrderList } from "@/features/general/orderList";
import { EquipmentService, SkeletonTypes, announcementTabs } from "@/shared/lib";
import { useListings } from "../model/useListings";
import styles from "./styles.module.scss";
import { EquipmentQueryKeys } from "@/shared/api";

const Listings: FC = () => {
   const [type, setType] = useState(announcementTabs[0].postValue);

   // const { data, isLoading, isError } = useListings(type);

   return (
      <div className={styles.listings}>
         <div className={styles.listings__btns}>
            <Tabs type={type} setType={setType} values={announcementTabs} />
         </div>

         <OrderList
            fetchFunction={EquipmentService.getMyAds}
            queryKey={EquipmentQueryKeys.GET_MY_ADS}
            param_tab={type}
            type={SkeletonTypes.listItem}
         />
      </div>
   );
};

export default Listings;
