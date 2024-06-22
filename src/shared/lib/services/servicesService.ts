import { ServicesEndpoints, OrdersEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";
import { UpdateServiceProps } from "@/shared/lib/types/orders-service.types";

export const ServicesService = {
   getServices: async ({ page }: { page: number }) => {
      const response = await baseApiInstance.get(ServicesEndpoints.SERVICES, {
         params: {
            page: page,
         },
      });

      return {
         data: response.data?.data,
         hasNextPage: response.data.has_next_page,
         nextPage: response.data.next_page_number,
      };
   },
   getServiceSlug: async (slug: string) => {
      const response = await baseApiInstance.get(ServicesEndpoints.SERVICE_SLUG + slug);
      return response;
   },
   getMyServices: async (page: number) => {
      const response = await baseApiInstance.get(ServicesEndpoints.MY_SERVICES, {
         params: {
            page: page,
         },
      });

      return response;
   },
   getLikedServices: async ({ page }: { page: number }) => {
      const response = await baseApiInstance.get(ServicesEndpoints.LIKED_SERVICES, {
         params: {
            page: page,
         },
      });

      return response;
   },
   createService: async (params: FormData) => {
      const response = await baseApiInstance.post(ServicesEndpoints.CREATE_SERVICE, params, {
         headers: { "Content-Type": "multipart/form-data" },
         method: "POST",
      });
      return response.data;
   },
   deleteService: async (slug: string) => {
      const response = await baseApiInstance.post(ServicesEndpoints.DELETE_SERVICE + slug);
      return response.data;
   },
   hideService: async (slug: string) => {
      const response = await baseApiInstance.put(ServicesEndpoints.HIDE_SERVICE + slug);
      return response.data;
   },
   likeService: async (slug: string) => {
      const response = await baseApiInstance.put(ServicesEndpoints.LIKE_SERVICE + slug);
      return response.data;
   },
   updateService: async ({ serviceSlug, params }: UpdateServiceProps) => {
      const headers = { "Content-Type": "multipart/form-data" };
      const response = await baseApiInstance.put(
         ServicesEndpoints.UPDATE_SERVICE + serviceSlug,
         params,
         { headers: headers }
      );
   },
};
