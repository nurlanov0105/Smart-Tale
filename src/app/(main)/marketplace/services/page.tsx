"use client";

import React from "react";
import { NextPage } from "next";
import { CardsSection } from "@/widgets/user/cardsSection";
import { ServicesService } from "@/shared/lib";

const ServicesPage: NextPage = () => {
   return <CardsSection fetchFunction={ServicesService.getServices} type="standart" />;
};

export default ServicesPage;
