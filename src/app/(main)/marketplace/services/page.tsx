"use client";

import React from "react";
import { NextPage } from "next";
import { CardsSection } from "@/widgets/user/cardsSection";
import { EquipmentService } from "@/shared/api";

const ServicesPage: NextPage = () => {
   return <CardsSection fetchFunction={EquipmentService.fetchEquipments} type="standart" />;
};

export default ServicesPage;
