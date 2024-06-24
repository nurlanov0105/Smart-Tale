// import { ErrorMessage } from "@/entities/general/errorMessage";
// import { BASE_URL, OrdersEndpoints, ServicesEndpoints } from "@/shared/api";
// import { OrdersQueryKeys } from "@/shared/api/queryKeys";
// import { EnumTokens, OrdersService, SkeletonTypes } from "@/shared/lib";
// import { CardsSection } from "@/widgets/user/cardsSection";
// import CardsSection2 from "@/widgets/user/cardsSection/ui/CardSection2";
// import { cookies } from "next/headers";

// export default async function OrderPage() {
//    const data = await fetchOrders();

//    if (!data) return <ErrorMessage />;

//    return <CardsSection2 initialData={data} queryKey={OrdersQueryKeys.ORDERS} />;
// }

// const fetchOrders = async () => {
//    try {
//       const res = await fetch(BASE_URL + OrdersEndpoints.GET_ORDERS, {
//          next: { revalidate: 5 },
//       });

//       if (!res.ok) {
//          throw new Error("Произошла ошибка при запросе");
//       }

//       return res.json();
//    } catch (err) {
//       console.error("Ошибка при обработке запроса:", err);
//    }
// };

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
