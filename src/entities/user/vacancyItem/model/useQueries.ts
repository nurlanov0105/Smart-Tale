import { useMutation, useQuery } from "@tanstack/react-query";
import { ResumeQueryKeys, ServiceQueryKeys } from "@/shared/api";
import { ResumeService, VacancyService } from "@/shared/lib";
import { toast } from "react-toastify";
import {ResumeRequestTypes} from "@/entities/user/vacancyItem/model/types";

export const useGetVacancies = (page: number) => {
   return useQuery({
      queryFn: () => VacancyService.getVacancies(page),
      queryKey: [ServiceQueryKeys.SERVICES],
   });
};
export const useAddVacancy = () => {
   return useMutation({
      mutationFn: (data: any) => VacancyService.addVacancy(data),
      mutationKey: [ServiceQueryKeys.SERVICES],
   });
};
export const useAddResume = ({reset}: ResumeRequestTypes) => {
   return useMutation({
      mutationFn: (data: any) => ResumeService.addResume(data),
      mutationKey: [ResumeQueryKeys.RESUME],
      onSuccess: () => {
         reset();
         toast.success("Успешно разместили резюме!");
      },
   });
};

export const useGetMyResumes = () => {
   return useQuery({
      queryKey: [ResumeQueryKeys.GET_MY_RESUMES],
      queryFn: () => ResumeService.getMyResumes()
   })
}