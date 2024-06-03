import { ResumeEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";
import {ResumeType, UpdateResumeTypes} from "../types/resume-service.types";

export const ResumeService = {
   addResume: async (data: ResumeType) => {
      const response = await baseApiInstance.post(ResumeEndpoints.ADD_RESUME, data);
      return response;
   },
   updateResume: async ({data, slug}: UpdateResumeTypes) => {
      const response = await baseApiInstance.put(ResumeEndpoints.UPDATE_RESUME + slug , data);
      return response;
   },
   deleteResume: async (slug: string) => {
      const response = await baseApiInstance.post(ResumeEndpoints.DELETE_RESUME + slug, {data: slug} );
      return response;
   },
   getResumes: async () => {
      const response = await baseApiInstance.get(ResumeEndpoints.GET_RESUMES);
      return response;
   },
   getResumeDetails: async (slug: string) => {
      const response = await baseApiInstance.get(ResumeEndpoints.GET_RESUME_DETAILS + slug);
      return response?.data;
   },
   getMyResumes: async () => {
      const response = await baseApiInstance.get(ResumeEndpoints.GET_MY_RESUMES);
      return response;
   }
};
