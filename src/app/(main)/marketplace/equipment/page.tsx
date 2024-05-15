"use client";

import { NextPage } from "next";

import { CardsSection } from "@/widgets/user/cardsSection";
import { SkeletonTypes } from "@/shared/lib";
import { EquipmentService } from "@/shared/api";

const EquipmentPage: NextPage = () => {
   return (
      <CardsSection
         fetchFunction={EquipmentService.fetchEquipments}
         type={SkeletonTypes.standart}
      />
   );
};

export default EquipmentPage;
