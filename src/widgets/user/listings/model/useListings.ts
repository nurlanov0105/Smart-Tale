import {useQuery} from "@tanstack/react-query";
import {EquipmentService, UserQueryKeys} from "@/shared/api";
import {OrdersService} from "@/shared/lib";

export const useListings = (type: string) => {

    const isOrder = type === "order"

    const orders = useQuery({
        queryKey: [UserQueryKeys.ANNOUNCEMENTS_LISTINGS],
        queryFn: () => OrdersService.getMyOrders(),
        enabled: type === "order",
        retry: 1
    })

    const equipments = useQuery({
        queryKey: [UserQueryKeys.ANNOUNCEMENTS_LISTINGS],
        queryFn: () => EquipmentService.getMyEquipments(),
        enabled: type === "equipment",
        retry: 1
    })

    return {
        data: isOrder ? orders.data : equipments.data,
        isLoading: isOrder ? orders.isPending : equipments.isPending,
        isError: isOrder ? orders.isError : equipments.isError,
    }
}