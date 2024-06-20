import React from "react";
import {EnumTokens} from "@/shared/lib";
import {BASE_URL, ServiceQueryKeys, ServicesEndpoints} from "@/shared/api";
import {ErrorMessage} from "@/entities/general/errorMessage";
import CardSection2 from "@/widgets/user/cardsSection/ui/CardSection2";
import {cookies} from "next/headers";

export default async function EquipmentPage(){
   const data = await fetchServices()
   // const data2 = Posts()

   if (!data) return <ErrorMessage/>

   return (
       <CardSection2
           initialData={data}
           queryKey={ServiceQueryKeys.SERVICES}
       />
   );
};
//
// function Posts() {
//    return  useQuery({
//       queryKey: ['posts'],
//       queryFn: fetchServices,
//    })
// }



const fetchServices = async () => {
   const accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)
   try {

      const res = await fetch(BASE_URL + ServicesEndpoints.SERVICES, {
         next: {revalidate: 10},
         headers: {
            Authorization: `Bearer ${accessToken?.value}`,
            'Content-Type': 'application/json',
         },
      });

      if (!res.ok){
         throw new Error("Произошла ошибка при запросе")
      }

      return res.json();

   } catch (err){
      console.error('Ошибка при обработке запроса:', err);
   }
};
