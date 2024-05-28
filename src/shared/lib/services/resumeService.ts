import { ResumeEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";
import { ResumeType } from "../types/resume-service.types";

export const ResumeService = {
   addResume: async (data: ResumeType) => {
      const response = await baseApiInstance.post(ResumeEndpoints.ADD_RESUME, data);
      return response;
   },
};
