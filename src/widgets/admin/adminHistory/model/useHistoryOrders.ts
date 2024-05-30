import {useQuery} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";

export const useHistoryOrders = () => {
    return useQuery({
        queryKey: [OrganizationQueryKeys.HISTORY_ORDERS],
        queryFn: () => OrganizationService.getHistoryOrders()
    })
}