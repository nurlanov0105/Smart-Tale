import {useMutation} from "@tanstack/react-query";
import {EquipmentQueryKeys, EquipmentService} from "@/shared/api";
import {OrdersService} from "@/shared/lib";
import {OrdersQueryKeys} from "@/shared/api/queryKeys";


export const useHideEquipment = () => {
    return useMutation<any, Error, string>({
        mutationKey: [OrdersQueryKeys.ORDER_HIDE],
        mutationFn: (slug) => EquipmentService.hideEquipment(slug),
        onSuccess: () => {
            console.log("success")
        },
        onError: () => {
            console.log("error")
        }
    })
}

export const useHideOrder = () => {
    return useMutation<any, Error, string>({
        mutationKey: [EquipmentQueryKeys.EQUIPMENT_HIDE],
        mutationFn: (slug) => OrdersService.hideOrder(slug),
        onSuccess: () => {
            console.log("success")
        },
        onError: () => {
            console.log("error")
        }
    })
}


export const useDeleteEquipment = () => {
    return useMutation<any, Error, string>({
        mutationKey: [OrdersQueryKeys.ORDER_DELETE],
        mutationFn: (slug) => EquipmentService.deleteEquipment(slug),
        onSuccess: () => {
            console.log("success")
        },
        onError: () => {
            console.log("error")
        }
    })
}

export const useDeleteOrder = () => {
    return useMutation<any, Error, string>({
        mutationKey: [EquipmentQueryKeys.EQUIPMENT_DELETE],
        mutationFn: (slug) => OrdersService.deleteOrder(slug),
        onSuccess: () => {
            console.log("success")
        },
        onError: () => {
            console.log("error")
        }
    })
}


