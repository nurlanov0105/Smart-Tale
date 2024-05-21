import { ROUTES } from "@/shared/lib";
import { usePathStore } from "./usePathStore";
import { EquipmentsEndpoints, ServicesEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";
import { useQuery } from "@tanstack/react-query";

const useFetchResource = (pathname: string, slug: string) => {
   const queryFn = async () => {
      let url = "";
      if (pathname === ROUTES.MARKETPLACE_EQUIPMENT) {
         url = EquipmentsEndpoints.EQUIPMENT_SLUG + slug;
      } else if (pathname === ROUTES.MARKETPLACE_SERVICES) {
         url = ServicesEndpoints.SERVICE_SLUG + slug;
      }
      if (!url) {
         throw new Error("No valid URL generated for the query.");
      }
      const response = await baseApiInstance.get(url);
      return response.data;
   };

   const { isPending, isError, data } = useQuery({ queryKey: [pathname, slug], queryFn });

   return { isPending, isError, data };
};

export default useFetchResource;
