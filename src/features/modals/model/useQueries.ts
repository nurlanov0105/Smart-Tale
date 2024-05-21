import {useMutation} from "@tanstack/react-query";
import {EquipmentQueryKeys, EquipmentService} from "@/shared/api";
import {OrdersService} from "@/shared/lib";
import {OrdersQueryKeys} from "@/shared/api/queryKeys";
import {toast} from "react-toastify";


export const useHideEquipment = () => {
    return useMutation<any, Error, string>({
        mutationKey: [OrdersQueryKeys.ORDER_HIDE],
        mutationFn: (slug) => EquipmentService.hideEquipment(slug),
        onSuccess: () => {
            toast.success("Вы успешно скрыли оборудование")
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
            toast.success("Вы успешно скрыли заказ")
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
            toast.success("Вы успешно удалили оборудование")
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
            toast.success("Вы успешно удалили заказ")
        },
        onError: () => {
            console.log("error")
        }
    })
}


