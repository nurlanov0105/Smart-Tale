import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {UseFormReset} from "react-hook-form";
import { toast } from "react-toastify";
import {ResumeQueryKeys, ServiceQueryKeys, VacancyQueryKeys} from "@/shared/api";
import {ResumeService, VacancyFilterStore, VacancyService} from "@/shared/lib";

import type { ResumeType } from "@/shared/lib/types/resume-service.types";
import type { VacancyCardType, ResumeRequestTypes } from "./types";
import {ResumeFormTypes} from "@/entities/user/resumeForm/model/types";

export const useGetVacancies = (page: number) => {
   const defaultValues = VacancyFilterStore(state => state.defaultValues)

   return useQuery({
      queryKey: [VacancyQueryKeys.GET_VACANCIES],
      queryFn: () => {
         const filters = ""
         return VacancyService.getVacancies({page, filters})
      },
   });
};
export const useAddVacancy = () => {
   return useMutation({
      mutationFn: (data: VacancyCardType) => VacancyService.addVacancy(data),
      mutationKey: [ServiceQueryKeys.SERVICES],
   });
};
export const useAddResumeQuery = (reset: UseFormReset<ResumeFormTypes>) => {
   return useMutation({
      mutationFn: (data: ResumeType) => ResumeService.addResume(data),
      mutationKey: [ResumeQueryKeys.RESUME],
      onSuccess: () => {
         reset();
         toast.success("Успешно разместили резюме!");
      },
   });
};
export const useResumeDetailsQuery = (slug: string) => {
   return useQuery({
      queryKey: [ResumeQueryKeys.RESUME_DETAILS],
      queryFn: () => ResumeService.getResumeDetails(slug),
   });
};

export const useUpdateResumeQuery = ({reset, slug}: ResumeRequestTypes) => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (data: ResumeType) => ResumeService.updateResume({data, slug}),
      mutationKey: [ResumeQueryKeys.RESUME],
      onSuccess: async () => {
         await queryClient.invalidateQueries({queryKey: [ResumeQueryKeys.RESUME_DETAILS]})
         toast.success("Вы успешно обновили резюме!");
         reset()
      },
   });
};

export const useGetMyResumes = () => {
   return useQuery({
      queryKey: [ResumeQueryKeys.GET_MY_RESUMES],
      queryFn: () => ResumeService.getMyResumes()
   })
}
export const useGetVacancySlug = (slug: string) => {
   return useQuery({
      queryFn: () => VacancyService.vacancySlug(slug),
      queryKey: [ServiceQueryKeys.SERVICES, slug],
   });
};

