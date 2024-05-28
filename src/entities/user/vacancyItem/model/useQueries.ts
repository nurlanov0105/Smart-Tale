import { useMutation, useQuery } from "@tanstack/react-query";
import { ResumeQueryKeys, ServiceQueryKeys } from "@/shared/api";
import { ResumeService, VacancyService } from "@/shared/lib";
import { toast } from "react-toastify";
import { ResumeType } from "@/shared/lib/types/resume-service.types";
import { VacancyCardType } from "./types";

export const useGetVacancies = (page: number) => {
   return useQuery({
      queryFn: () => VacancyService.getVacancies(page),
      queryKey: [ServiceQueryKeys.SERVICES],
   });
};
export const useAddVacancy = () => {
   return useMutation({
      mutationFn: (data: VacancyCardType) => VacancyService.addVacancy(data),
      mutationKey: [ServiceQueryKeys.SERVICES],
   });
};
export const useAddResume = (reset: any) => {
   return useMutation({
      mutationFn: (data: ResumeType) => ResumeService.addResume(data),
      mutationKey: [ResumeQueryKeys.RESUME],
      onSuccess: () => {
         reset();
         toast.success("Успешно разместили резюме!");
      },
   });
};

export const useGetVacancySlug = (slug: string) => {
   return useQuery({
      queryFn: () => VacancyService.vacancySlug(slug),
      queryKey: [ServiceQueryKeys.SERVICES, slug],
   });
};
