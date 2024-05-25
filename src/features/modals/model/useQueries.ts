import {useMutation, useQueryClient} from "@tanstack/react-query";
import {EquipmentQueryKeys, EquipmentService, OrganizationQueryKeys, ServiceQueryKeys} from "@/shared/api";
import {OrdersService, OrganizationService, ServicesService} from "@/shared/lib";
import {OrdersQueryKeys} from "@/shared/api/queryKeys";
import {toast} from "react-toastify";


export const useHideEquipment = () => {
    const queryClient = useQueryClient()
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
    const queryClient = useQueryClient()
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

export const useHideService = () => {
    const queryClient = useQueryClient()
    return useMutation<any, Error, string>({
        mutationKey: [ServiceQueryKeys.HIDE_SERVICE],
        mutationFn: (slug) => ServicesService.hideService(slug),
        onSuccess: () => {
            toast.success("Вы успешно скрыли услугу")
        },
        onError: () => {
            console.log("error")
        }
    })
}

export const useDeleteEquipment = () => {
    const queryClient = useQueryClient()
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
    const queryClient = useQueryClient()
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

export const useDeleteEmployee = () => {
    const queryClient = useQueryClient()
    return useMutation<any, Error, string>({
        mutationKey: [OrganizationQueryKeys.DELETE_EMPLOYEE],
        mutationFn: (slug) => OrganizationService.deleteEmployee(slug),
        onSuccess: () => {
            toast.success("Сотрудник был удалён!")
        },
        onError: () => {
            console.log("error")
        }
    })
}


export const useDeleteService = () => {
    const queryClient = useQueryClient()
    return useMutation<any, Error, string>({
        mutationKey: [ServiceQueryKeys.DELETE_SERVICE],
        mutationFn: (slug) => ServicesService.deleteService(slug),
        onSuccess: () => {
            toast.success("Услуга была удалена")
        },
        onError: () => {
            console.log("error")
        }
    })
}
