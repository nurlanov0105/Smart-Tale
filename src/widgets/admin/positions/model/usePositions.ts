import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {RightsTypes} from "@/shared/lib/types/organizations-service.types";

export interface PositionResponseTypes extends RightsTypes{
    title: string;
    description: string;
}
export const usePositions = () => {
    return useQuery<PositionResponseTypes[]>({
        queryKey: [OrganizationQueryKeys.POSITIONS],
        queryFn: () => OrganizationService.getPositions()
    })
}