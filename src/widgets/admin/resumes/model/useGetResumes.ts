import {useQuery} from "@tanstack/react-query";
import {ResumeQueryKeys} from "@/shared/api";
import {ResumeService} from "@/shared/lib";

export const useGetResumes = () => {
    return useQuery({
        queryKey: [ResumeQueryKeys.GET_RESUMES],
        queryFn: () => ResumeService.getResumes()
    })
}