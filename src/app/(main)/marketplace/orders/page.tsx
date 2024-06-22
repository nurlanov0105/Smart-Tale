"use client";

import { OrdersQueryKeys } from "@/shared/api/queryKeys";
import { OrdersService, SkeletonTypes } from "@/shared/lib";
import { CardsSection } from "@/widgets/user/cardsSection";

const OrderPage = () => {
   return (
      <CardsSection
         fetchFunction={OrdersService.getOrdersClient}
         queryKey={OrdersQueryKeys.ORDERS}
         type={SkeletonTypes.standart}
      />
   );
};
export default OrderPage;
