import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";

export const useGetOrganizationOrders = () => {
    return useQuery({
        queryKey: [OrganizationQueryKeys.GET_ORDERS],
        queryFn: () => OrganizationService.getOrganizationsOrders()
    })
}