import {useMutation} from "@tanstack/react-query";
import {EquipmentService, UserQueryKeys} from "@/shared/api";
import {OrdersService} from "@/shared/lib";
import {CreateEquipmentTypes, CreateOrderTypes} from "@/shared/lib/types/orders-service.types";

export const useCreateOrder = () => {
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

export const useCreateEquipment = () => {
    return useMutation<any, Error, CreateEquipmentTypes, unknown>({
        mutationKey: [UserQueryKeys.CREATE_EQUIPMENT],
        mutationFn: (data) => EquipmentService.createEquipment(data),
        onSuccess: () => {
            console.log("success")
        },
        onError: () => {
            console.log("error")
        }
    })
}