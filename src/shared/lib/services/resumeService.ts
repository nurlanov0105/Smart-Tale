import { ResumeEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";

export const ResumeService = {
   addResume: async (data: any) => {
      const response = await baseApiInstance.post(ResumeEndpoints.ADD_RESUME, data);
      return response;
   },
};
