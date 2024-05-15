import {useMutation} from "@tanstack/react-query";
import {EquipmentService, UserQueryKeys} from "@/shared/api";
import {OrdersService} from "@/shared/lib";

export const useCreateOrder = () => {
    return useMutation({
        mutationKey: [UserQueryKeys.CREATE_ORDER],
        mutationFn: OrdersService.createOrder,
        onSuccess: () => {
            console.log("success")
        },
        onError: () => {
            console.log("error")
        }
    })
}

export const useCreateEquipment = () => {
    return useMutation({
        mutationKey: [UserQueryKeys.CREATE_EQUIPMENT],
        mutationFn: EquipmentService.createEquipment,
        onSuccess: () => {
            console.log("success")
        },
        onError: () => {
            console.log("error")
        }
    })
}