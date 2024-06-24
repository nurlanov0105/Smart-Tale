// import { BASE_URL, EquipmentQueryKeys, EquipmentsEndpoints } from "@/shared/api";
// import { ErrorMessage } from "@/entities/general/errorMessage";
// import CardSection2 from "@/widgets/user/cardsSection/ui/CardSection2";

// export default async function EquipmentPage() {
//    const data = await fetchEquipment();

//    if (!data) return <ErrorMessage />;

//    return <CardSection2 initialData={data} queryKey={EquipmentQueryKeys.EQUIPMENTS} />;
// }

// const fetchEquipment = async () => {
//    try {
//       const res = await fetch(BASE_URL + EquipmentsEndpoints.EQUIPMENTS, {
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
import { EquipmentService, SkeletonTypes } from "@/shared/lib";
import { EquipmentQueryKeys } from "@/shared/api";

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
