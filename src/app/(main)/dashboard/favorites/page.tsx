"use client";

import { CardsSection } from "@/widgets/user/cardsSection";
import { SkeletonTypes } from "@/shared/lib";
import { NextPage } from "next";
import { EquipmentService } from "@/shared/api";
// import styles from "./styles.module.scss";

const PurchasesPage: NextPage = () => {
   return (
      <div>
         <CardsSection
            fetchFunction={EquipmentService.fetchEquipments}
            type={SkeletonTypes.standart}
         />
      </div>
   );
};

export default PurchasesPage;
