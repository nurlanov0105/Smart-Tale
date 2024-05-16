import { ServicesEndpoints, OrdersEndpoints } from "@/shared/api";

import { baseApiInstance } from "@/shared/api/instance";

export const ServicesService = {
   getServices: async ({ page, title }: { page: number; title?: string }) => {
      const response = await baseApiInstance.get(ServicesEndpoints.SERVICES, {
         params: {
            title: "",
         },
      });
      // const response = await axios.get(
      //    `https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`
      // );
      return response;
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
   getLikedServices: async (page: number) => {
      const response = await baseApiInstance.get(ServicesEndpoints.LIKED_SERVICES, {
         params: {
            page: page,
         },
      });

      return response;
   },
   createService: async () => {
      const response = await baseApiInstance.post(ServicesEndpoints.CREATE_SERVICE);
      return response.data;
   },
   deleteService: async () => {
      const response = await baseApiInstance.post(ServicesEndpoints.DELETE_SERVICE);
      return response.data;
   },
   hideService: async () => {
      const response = await baseApiInstance.post(ServicesEndpoints.HIDE_SERVICE);
      return response.data;
   },
   likeService: async () => {
      const response = await baseApiInstance.post(ServicesEndpoints.LIKE_SERVICE);
      return response.data;
   },
   updateService: async () => {
      const response = await baseApiInstance.post(ServicesEndpoints.UPDATE_SERVICE);
      return response.data;
   },
   // searchService: async (search: string) => {
   //    const response = await baseApiInstance.post(ServicesEndpoints.,{
   //       params: {
   //          search: search,
   //       },
   //    });
   //    return response.data;
   // },
};
