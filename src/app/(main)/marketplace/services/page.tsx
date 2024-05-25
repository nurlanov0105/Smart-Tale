"use client";

import React from "react";
import { NextPage } from "next";
import { CardsSection } from "@/widgets/user/cardsSection";
import { ServicesService } from "@/shared/lib";
import { EquipmentQueryKeys, ServiceQueryKeys } from "@/shared/api";

const ServicesPage: NextPage = () => {
   return (
      <CardsSection
         fetchFunction={ServicesService.getServices}
         queryKey={ServiceQueryKeys.SERVICES}
         type="standart"
      />
   );
};

export default ServicesPage;
