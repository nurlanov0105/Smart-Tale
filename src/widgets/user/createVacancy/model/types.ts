import { VacancyCardType } from "@/entities/user/vacancyItem";

export type CreateVacancyProps = {
   addVacancy: (data: VacancyCardType) => void;
   isLoading: boolean;
   isError: boolean;
};

export interface FormData {
   job_title: string;
   description: string;
   min_salary: number;
   max_salary: number;
   experience: string;
   schedule: string;
   location: string;
}
