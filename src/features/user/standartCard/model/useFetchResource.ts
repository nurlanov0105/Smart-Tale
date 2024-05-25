import { AnnouncementTypes, ROUTES } from "@/shared/lib";
import { EquipmentsEndpoints, OrdersEndpoints, ServicesEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";
import { useQuery } from "@tanstack/react-query";

const useFetchResource = (type: string, slug: string) => {
   const queryFn = async () => {
      let url = "";
      console.log(type);
      if (type === AnnouncementTypes.equipment) {
         url = EquipmentsEndpoints.EQUIPMENT_SLUG + slug;
      } else if (type === AnnouncementTypes.service) {
         url = ServicesEndpoints.SERVICE_SLUG + slug;
      } else if (type === AnnouncementTypes.order) {
         url = OrdersEndpoints.GET_MY_ORDER + slug;
      }

      if (!url) {
         throw new Error("No valid URL generated for the query.");
      }
      const response = await baseApiInstance.get(url);
      return response.data;
   };

   const { isPending, isError, data } = useQuery({ queryKey: [type, slug], queryFn });

   return { isPending, isError, data };
};

export default useFetchResource;
