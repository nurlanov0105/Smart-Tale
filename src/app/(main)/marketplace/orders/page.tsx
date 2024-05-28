"use client";

import { NextPage } from "next";
import { CardsSection } from "@/widgets/user/cardsSection";
import { EquipmentService, OrdersService, SkeletonTypes } from "@/shared/lib";
import { EquipmentQueryKeys } from "@/shared/api";
import { OrdersQueryKeys } from "@/shared/api/queryKeys";

const OrderPage: NextPage = () => {
   return (
      <CardsSection
         fetchFunction={OrdersService.getOrders}
         queryKey={OrdersQueryKeys.ORDERS}
         type={SkeletonTypes.standart}
      />
   );
};

export default OrderPage;
