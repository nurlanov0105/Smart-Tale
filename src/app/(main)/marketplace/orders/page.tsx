"use client";

import { NextPage } from "next";
import { CardsSection } from "@/widgets/user/cardsSection";
import { OrdersService, SkeletonTypes } from "@/shared/lib";
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
