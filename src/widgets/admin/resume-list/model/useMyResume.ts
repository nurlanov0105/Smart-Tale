import {useQuery} from "@tanstack/react-query";
import {ResumeQueryKeys} from "@/shared/api";
import {ResumeService} from "@/shared/lib";
import {ResumeItemTypes} from "@/entities/admin/myResumeItem";

export const useGetMyResumes = () => {
    return useQuery({
        queryKey: [ResumeQueryKeys.GET_MY_RESUMES],
        queryFn: () => ResumeService.getMyResumes(),
        select: (data) => data?.data as ResumeItemTypes[]
    })
}