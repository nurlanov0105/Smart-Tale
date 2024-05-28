import { useQuery } from "@tanstack/react-query";
import { UserEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";
import { ModalSlugEndpoints } from "./consts";

const useFetchResource = ({
   type,
   slug,
   isDetail,
}: {
   type: string;
   slug: string;
   isDetail?: boolean;
}) => {
   const queryFn = async () => {
      let url = "";
      if (isDetail) {
         url = ModalSlugEndpoints[type] + slug;
      } else {
         url = ModalSlugEndpoints[type] + slug;
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
