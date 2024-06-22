import { VacancyCardType } from "@/entities/user/vacancyItem";
import { VacancyEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";
import type { FilterVacancyType, VacanciesRequestTypes } from "../types/vacancy-service.types";
import { VacancyUpdateTypes } from "@/entities/user/vacancyItem/model/types";
import { DefaultFilterTypes } from "@/shared/store/filtersStore/types";

export const VacancyService = {
   getVacancies: async (params?: any) => {
      const response = await baseApiInstance.get(VacancyEndpoints.VACANCY, {
         // params
      });
      return response.data;
   },
   getOrganizationVacancies: async () => {
      const response = await baseApiInstance.get(VacancyEndpoints.ORGANIZATION_VACANCIES);
      return response.data;
   },
   getVacancyResponses: async () => {
      const response = await baseApiInstance.get(VacancyEndpoints.VACANCY_RESPONSES);
      return response.data;
   },
   getFilteredVacancies: async (data: FilterVacancyType) => {
      const response = await baseApiInstance.get(VacancyEndpoints.VACANCY_FILTER, {
         params: {
            ...data,
         },
      });
      return response.data;
   },
   vacancySlug: async (slug: string) => {
      const response = await baseApiInstance.get<VacancyCardType>(
         VacancyEndpoints.VACANCY_SLUG + "/" + slug
      );
      return response.data;
   },
   getVacancyDetails: async (slug: string) => {
      const response = await baseApiInstance.get(VacancyEndpoints.VACANCY_DETAILS + slug);
      return response.data;
   },
   responseVacancy: async (slug: string) => {
      const response = await baseApiInstance.post(VacancyEndpoints.RESPONSE_VACANCY + slug, {
         cover_letter: slug,
      });
      return response.data;
   },
   addVacancy: async (data: VacancyCardType) => {
      const response = await baseApiInstance.post(VacancyEndpoints.ADD_VACANCY, data);
      return response;
   },
   changeVacancy: async ({ data, slug }: VacancyUpdateTypes) => {
      const response = await baseApiInstance.put(VacancyEndpoints.CHANGE_VACANCY + slug, data);
      return response;
   },
   deleteVacancy: async (slug: string) => {
      const response = await baseApiInstance.post(VacancyEndpoints.DELETE_VACANCY + slug);
      return response.data;
   },
   hideVacancy: async (slug: string) => {
      const response = await baseApiInstance.put(VacancyEndpoints.HIDE_VACANCY + slug);
      return response.data;
   },
   searchVacancy: async (job_title: string) => {
      const response = await baseApiInstance.get(VacancyEndpoints.VACANCY_SEARCH, {
         params: {
            job_title,
         },
      });
      return response;
   },
};
