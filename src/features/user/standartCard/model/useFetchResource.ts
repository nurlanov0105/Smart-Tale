import { useQuery } from "@tanstack/react-query";
import { UserEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";
import { ModalSlugEndpoints } from "./consts";
import { AnnouncementTypes } from "@/shared/lib";

const useFetchResource = ({
   type,
   slug,
   isDetail,
}: {
   type: string;
   slug: string;
   isDetail?: boolean;
}) => {
   console.log(type);
   const queryFn = async () => {
      let url = "";
      url = ModalSlugEndpoints[type] + slug;

      if (!url) {
         throw new Error("No valid URL generated for the query.");
      }

      const response = await baseApiInstance.get(url);
      return AnnouncementTypes.service === type ? response : response.data;
   };

   const { isPending, isError, isSuccess, data } = useQuery({ queryKey: [type, slug], queryFn });

   return { isPending, isError, isSuccess, data };
};

export default useFetchResource;
