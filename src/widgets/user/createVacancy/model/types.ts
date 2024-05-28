import { VacancyCardType } from "@/entities/user/vacancyItem";

export type CreateVacancyProps = {
   addVacancy: (data: VacancyCardType) => void;
   isLoading: boolean;
   isError: boolean;
};
