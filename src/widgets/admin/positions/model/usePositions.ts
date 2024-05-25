import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";

export const usePositions = () => {
    return useQuery({
        queryKey: [OrganizationQueryKeys.POSITIONS],
        queryFn: () => OrganizationService.getPositions()
    })
}