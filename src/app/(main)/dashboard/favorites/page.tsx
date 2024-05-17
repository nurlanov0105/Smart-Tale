"use client";

import { CardsSection } from "@/widgets/user/cardsSection";
import { SkeletonTypes } from "@/shared/lib";
import { NextPage } from "next";
import { EquipmentService } from "@/shared/api";
import { Tabs } from "@/features/general/tabs";
import { useState } from "react";
import { orderDetailsValues } from "@/widgets/user/createAnnouncement/model/values";
import styles from "./styles.module.scss";

const PurchasesPage: NextPage = () => {
   const [type, setType] = useState(orderDetailsValues[0].postValue);

   return (
      <div className={styles.favorites}>
         <div className={styles.favorites__tabs}>
            <Tabs type={type} setType={setType} values={orderDetailsValues} />
         </div>

         <CardsSection
            fetchFunction={EquipmentService.getEquipments}
            type={SkeletonTypes.standart}
         />
      </div>
   );
};

export default PurchasesPage;
