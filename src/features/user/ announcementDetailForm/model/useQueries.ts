import {useMutation} from "@tanstack/react-query";
import {CreateOrderTypes} from "@/shared/lib/types/orders-service.types";
import {UserQueryKeys} from "@/shared/api";
import {OrdersService} from "@/shared/lib";

export const useGetMyAnnouncement = () => {
    return useMutation<any, Error, CreateOrderTypes, unknown>({
        mutationKey: [UserQueryKeys.CREATE_ORDER],
        mutationFn: (data) => OrdersService.createOrder(data),
        onSuccess: () => {
            console.log("success")
        },
        onError: () => {
            console.log("error")
        }
    })
}