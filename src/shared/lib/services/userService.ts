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
   changeProfile: async (data: ProfileRequestType) => {
      const response = await baseApiInstance.put(UserEndpoints.MY_PROFILE_CHANGE, data);
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
      const params =
         param_tab && param_tab !== "all"
            ? {
                 page: page,
                 ads: param_tab,
              }
            : { page: page };
      const response = await baseApiInstance.get(UserEndpoints.COMMON_USER_ADS + slug, {
         params,
      });
      return response.data;
   },
};
