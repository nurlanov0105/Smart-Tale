import { OrdersQueryKeys } from "@/shared/api/queryKeys";
import CardSection2 from "@/widgets/user/cardsSection/ui/CardSection2";
import {cookies} from "next/headers";
import {BASE_URL, OrdersEndpoints} from "@/shared/api";
import {ErrorMessage} from "@/entities/general/errorMessage";
import {EnumTokens} from "@/shared/lib";


export default async function OrderPage(){
   const data = await fetchOrder()

   if (!data) return <ErrorMessage/>

   return (
       <CardSection2
           initialData={data}
           queryKey={OrdersQueryKeys.ORDERS}
       />
   );
};



const fetchOrder = async () => {
   try {
      const accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)

      const res = await fetch(BASE_URL + OrdersEndpoints.GET_ORDERS, {
         headers: {
            Authorization: `Bearer ${accessToken?.value}`,
            'Content-Type': 'application/json',
         },
         // cache: "force-cache",
         next: {revalidate: 3600}
      });

      if (!res.ok){
         throw new Error("Произошла ошибка при запросе")
      }

      return res.json();

   } catch (err){
      console.error('Ошибка при обработке запроса:', err);
   }

};

