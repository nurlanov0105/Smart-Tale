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
};
