import { VacancyEndpoints } from "@/shared/api";
import { baseApiInstance } from "@/shared/api/instance";

type FilterVacancyType = {
   job_title: string;
   organization__title: string;
   experience: string;
   location: string;
   schedule: string;
   currency: string;
   min_salary: string;
   max_salary: string;
   days: string;
   week: string;
   month: string;
};

export const VacancyService = {
   getVacancies: async (page: number) => {
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
      const response = await baseApiInstance.get(VacancyEndpoints.VACANCY_SLUG);
      return response;
   },
   addVacancy: async (data: any) => {
      const response = await baseApiInstance.post(VacancyEndpoints.ADD_VACANCY, data);
      return response;
   },
   changeVacancy: async (data: any) => {
      const response = await baseApiInstance.put(VacancyEndpoints.CHANGE_VACANCY, data);
      return response;
   },
   deleteVacancy: async (data: any) => {
      const response = await baseApiInstance.delete(VacancyEndpoints.DELETE_VACANCY, data);
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
