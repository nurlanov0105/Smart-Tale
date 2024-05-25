"use client";

import { NextPage } from "next";
import { CardsSection } from "@/widgets/user/cardsSection";
import { SkeletonTypes } from "@/shared/lib";
import { EquipmentQueryKeys, EquipmentService, UserQueryKeys } from "@/shared/api";

const PurchasesPage: NextPage = () => {
   return (
      <CardsSection
         fetchFunction={EquipmentService.getEquipments}
         queryKey={UserQueryKeys.PURCHASES}
         type={SkeletonTypes.standart}
      />
   );
};

export default PurchasesPage;
