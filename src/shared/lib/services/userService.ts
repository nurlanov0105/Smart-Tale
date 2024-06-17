import { baseApiInstance } from "@/shared/api/instance";
import { UserEndpoints } from "@/shared/api";
import { ProfileRequestType } from "../types/user-service.types";

export const UserService = {
   getCommonUser: async (slug: string) => {
      const response = await baseApiInstance.get(UserEndpoints.COMMON_USER + slug);
      return response;
   },
   getProfile: async () => {
      const response = await baseApiInstance.get(UserEndpoints.MY_PROFILE);
      return response;
   },
   getSubscription: async (subscription: string) => {
      const response = await baseApiInstance.put(UserEndpoints.SUBSCRIBE, {
         subscription: subscription,
      });
      return response;
   },
   // ProfileRequestType
   changeProfile: async (formData: FormData) => {
      console.log("change profile formdata - ", formData);
      const response = await baseApiInstance.put(UserEndpoints.MY_PROFILE_CHANGE, formData, {
         headers: { "Content-Type": "multipart/form-data" },
      });
      return response;
   },
   subscribe: async (type: string) => {
      const response = await baseApiInstance.put(UserEndpoints.SUBSCRIBE, {
         subscription: type,
      });
      return response;
   },

   search: async ({ page, ads, title }: { page: number; ads: string; title: string }) => {
      const response = await baseApiInstance.get(UserEndpoints.SEARCH, {
         params: {
            ads,
            title,
            page,
         },
      });

      return response;
   },
   getCommonUserAds: async ({
      slug,
      page,
      param_tab,
   }: {
      slug: string;
      page: number;
      param_tab: string;
   }) => {
      const params = param_tab && param_tab !== "all" && {ads: param_tab}
      const response = await baseApiInstance.get(UserEndpoints.COMMON_USER_ADS + slug, {
         params: {...params, page}
      });
      return {
         data: response.data?.data,
         hasNextPage: response.data.has_next_page,
         nextPage: response.data.next_page_number
      };
   },
   getFavorites: async ({
      param_tab,
      page,
      title,
   }: {
      param_tab: string;
      page: number;
      title?: string;
   }) => {
      const params = param_tab && param_tab !== "all" && {type: param_tab}
      const response = await baseApiInstance.get(UserEndpoints.FAVOITES_ITEMS, {
         params: {page, title, ...params}
      });

      return {
         data: response.data?.data?.data,
         hasNextPage: response.data.has_next_page,
         nextPage: response.data.next_page_number
      };
   },
};
