import {useMutation} from "@tanstack/react-query";
import {UserQueryKeys} from "@/shared/api";
import {EquipmentFormService, OrderFormService} from "../model/services";

export const useCreateOrder = () => {
    return useMutation({
        mutationKey: [UserQueryKeys.CREATE_ORDER],
        mutationFn: OrderFormService.createOrder,
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
        mutationFn: EquipmentFormService.createEquipment,
        onSuccess: () => {
            console.log("success")
        },
        onError: () => {
            console.log("error")
        }
    })
}