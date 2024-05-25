import { ServicesEndpoints, OrdersEndpoints } from "@/shared/api";

import { baseApiInstance } from "@/shared/api/instance";
import axios from "axios";
import {UpdateServiceProps} from "@/shared/lib/types/orders-service.types";

export const ServicesService = {
   getServices: async (page: number, title?: string) => {
      const response = await baseApiInstance.get(ServicesEndpoints.SERVICES, {
         params: {
            page: page,
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
   createService: async (params: FormData) => {
      const response = await baseApiInstance.post(ServicesEndpoints.CREATE_SERVICE, params, {
         headers: { "Content-Type": "multipart/form-data" },
         method: "POST"
      });
      return response.data;
   },
   deleteService: async (slug: string) => {
      const response = await baseApiInstance.post(ServicesEndpoints.DELETE_SERVICE + slug);
      return response.data;
   },
   hideService: async (slug: string) => {
      const response = await baseApiInstance.post(ServicesEndpoints.HIDE_SERVICE + slug);
      return response.data;
   },
   likeService: async () => {
      const response = await baseApiInstance.post(ServicesEndpoints.LIKE_SERVICE);
      return response.data;
   },
   updateService: async ({serviceSlug, params}: UpdateServiceProps) => {
      const headers = { "Content-Type": "multipart/form-data" }
      const response = await baseApiInstance.post(ServicesEndpoints.UPDATE_SERVICE + serviceSlug, params, {headers: headers});
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