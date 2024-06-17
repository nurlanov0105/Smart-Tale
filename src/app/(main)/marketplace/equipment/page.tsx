import {BASE_URL, EquipmentQueryKeys, EquipmentsEndpoints} from "@/shared/api";
import {ErrorMessage} from "@/entities/general/errorMessage";
import CardSection2 from "@/widgets/user/cardsSection/ui/CardSection2";



export default async function EquipmentPage(){
   const data = await fetchEquipment()

   if (!data) return <ErrorMessage/>

   return (
       <CardSection2
           initialData={data}
           queryKey={EquipmentQueryKeys.EQUIPMENTS}
       />
   );
};


const fetchEquipment = async () => {
   try {

      const res = await fetch(BASE_URL + EquipmentsEndpoints.EQUIPMENTS, {next: {revalidate: 3600}});

      if (!res.ok){
         throw new Error("Произошла ошибка при запросе")
      }

      return res.json();

   } catch (err){
      console.error('Ошибка при обработке запроса:', err);
   }

};
