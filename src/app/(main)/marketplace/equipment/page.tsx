"use client";

import { NextPage } from "next";

import { CardsSection } from "@/widgets/user/cardsSection";
import { SkeletonTypes } from "@/shared/lib";
import { EquipmentQueryKeys, EquipmentService, EquipmentsEndpoints } from "@/shared/api";

const EquipmentPage: NextPage = () => {
   return (
      <CardsSection
         fetchFunction={EquipmentService.getEquipments}
         queryKey={EquipmentQueryKeys.EQUIPMENTS}
         type={SkeletonTypes.standart}
      />
   );
};

export default EquipmentPage;
