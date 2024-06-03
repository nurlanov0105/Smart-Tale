import { VacancyCardType } from "@/entities/user/vacancyItem";
import { VacancyEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";
import type {FilterVacancyType, VacanciesRequestTypes} from "../types/vacancy-service.types";
import {VacancyUpdateTypes} from "@/entities/user/vacancyItem/model/types";

export const VacancyService = {
   getVacancies: async ({page, filters}: VacanciesRequestTypes) => {
      const response = await baseApiInstance.get(VacancyEndpoints.VACANCY, {
         params: {
            page,
         },
      });
      return response;
   },
   getFilteredVacancies: async ({
      job_title,
      organization__title,
      experience,
      location,
      schedule,
      currency,
      min_salary,
      max_salary,
      days,
      week,
      month,
   }: FilterVacancyType) => {
      const response = await baseApiInstance.get(VacancyEndpoints.VACANCY_FILTER, {
         params: {
            job_title,
            organization__title,
            experience,
            location,
            schedule,
            currency,
            min_salary,
            max_salary,
            days,
            week,
            month,
         },
      });
      return response;
   },
   vacancySlug: async (slug: string) => {
      const response = await baseApiInstance.get<VacancyCardType>(
         VacancyEndpoints.VACANCY_SLUG + "/" + slug
      );
      return response;
   },
   getVacancyDetails: async (slug: string) => {
      const response = await baseApiInstance.get(VacancyEndpoints.VACANCY_DETAILS + slug);
      return response.data;
   },
   addVacancy: async (data: VacancyCardType) => {
      const response = await baseApiInstance.post(VacancyEndpoints.ADD_VACANCY, data);
      return response;
   },
   changeVacancy: async ({data, slug}: VacancyUpdateTypes) => {
      const response = await baseApiInstance.put(VacancyEndpoints.CHANGE_VACANCY + slug, data);
      return response;
   },
   deleteVacancy: async (slug: string) => {
      const response = await baseApiInstance.delete(VacancyEndpoints.DELETE_VACANCY + slug);
      return response;
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
