import { ResumeEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";
import {ResumeType, UpdateResumeTypes} from "../types/resume-service.types";
import {DefaultFilterTypes} from "@/shared/store/filtersStore/types";

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
   hideResume: async (slug: string) => {
      const response = await baseApiInstance.put(ResumeEndpoints.HIDE_RESUME + slug, {data: slug} );
      return response;
   },
   getResumes: async (data: DefaultFilterTypes) => {
      // job_title, location и schedule
      const { experience, incomeLevel, location, job_title, schedule} = data
      const locationData = location.join(",");
      const positionsData = job_title.join(",")
      const scheduleData = schedule.join(",");
      const needPositionComma = !!job_title.length ? "," : "";
      const needLocationComma = !!location.length ? "," : "";
      const params = "?params=" + locationData + needLocationComma + positionsData + needPositionComma + scheduleData

      const response = await baseApiInstance.get(ResumeEndpoints.GET_RESUMES + params, {

      });

      return {
         data: response.data?.data,
         hasNextPage: response.data.has_next_page,
         nextPage: response.data.next_page_number
      };
   },
   getResumeDetails: async (slug: string) => {
      const response = await baseApiInstance.get(ResumeEndpoints.GET_RESUME_DETAILS + slug);
      return response.data;
   },
   getMyResumes: async () => {
      const response = await baseApiInstance.get(ResumeEndpoints.GET_MY_RESUMES);
      return response.data;
   }
};
