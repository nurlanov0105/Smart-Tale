import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService, PositionResponseTypes} from "@/shared/lib";

export const usePositions = () => {
    return useQuery<PositionResponseTypes[]>({
        queryKey: [OrganizationQueryKeys.POSITIONS],
        queryFn: () => OrganizationService.getPositions()
    })
}