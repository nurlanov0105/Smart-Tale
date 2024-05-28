import { ResumeEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";
import { ResumeType } from "../types/resume-service.types";

export const ResumeService = {
   addResume: async (data: ResumeType) => {
      const response = await baseApiInstance.post(ResumeEndpoints.ADD_RESUME, data);
      return response;
   },
   getResumes: async () => {
      const response = await baseApiInstance.get(ResumeEndpoints.GET_RESUMES);
      return response;
   },
   getMyResumes: async () => {
      const response = await baseApiInstance.get(ResumeEndpoints.GET_MY_RESUMES);
      return response;
   }
};
