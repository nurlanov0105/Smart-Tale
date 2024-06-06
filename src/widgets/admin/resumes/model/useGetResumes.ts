import {useQuery} from "@tanstack/react-query";
import {ResumeQueryKeys} from "@/shared/api";
import {ResumeService, VacancyFilterStore} from "@/shared/lib";

export const useGetResumes = () => {
    const defaultValues = VacancyFilterStore(state => state.defaultValues)

    return useQuery({
        queryKey: [ResumeQueryKeys.GET_RESUMES, defaultValues],
        queryFn: () => ResumeService.getResumes(defaultValues)
    })
}