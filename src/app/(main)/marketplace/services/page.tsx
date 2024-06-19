import React from "react";
import { TYPE_ANNOUNCEMENT_DETAIL } from "@/shared/lib";
import { BASE_URL, ServiceQueryKeys, ServicesEndpoints } from "@/shared/api";
import { ErrorMessage } from "@/entities/general/errorMessage";
import CardSection2 from "@/widgets/user/cardsSection/ui/CardSection2";

export default async function EquipmentPage() {
   const data = await fetchServices();

   if (!data) return <ErrorMessage />;

   return <CardSection2 initialData={data} queryKey={ServiceQueryKeys.SERVICES} />;
}

const fetchServices = async () => {
   try {
      const res = await fetch(BASE_URL + ServicesEndpoints.SERVICES, {
         next: { revalidate: 3600 },
      });

      if (!res.ok) {
         throw new Error("Произошла ошибка при запросе");
      }

      return res.json();
   } catch (err) {
      console.error("Ошибка при обработке запроса:", err);
   }
};
