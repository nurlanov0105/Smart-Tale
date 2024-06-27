"use client";

import { NextPage } from "next";
import { UserQueryKeys } from "@/shared/api";
// import CardSection2 from "@/widgets/user/cardsSection/ui/CardSection2";
import dynamic from "next/dynamic";
import { GlobalLoading } from "@/shared/ui";
import { CardsSection } from "@/widgets/user/cardsSection";
import { EquipmentService, SkeletonTypes } from "@/shared/lib";

// const CardSection2 = dynamic(() => import("@/widgets/user/cardsSection/ui/CardSection2"), {
//    ssr: false,
//    loading: () => <GlobalLoading />,
// });

const PurchasesPage: NextPage = () => {
   // const initialData = {
   //    data: [],
   //    has_next_page: true,
   //    next_page_number: 1,
   // };
   return (
      <CardsSection
         fetchFunction={EquipmentService.MY_PURCHASES}
         queryKey={UserQueryKeys.PURCHASES}
         type={SkeletonTypes.standart}
      />
   );
};

export default PurchasesPage;
