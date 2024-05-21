import {QueryClient, useMutation, useQuery} from "@tanstack/react-query";
import {CreateEquipmentTypes, CreateOrderTypes} from "@/shared/lib/types/orders-service.types";
import {EquipmentService, UserQueryKeys} from "@/shared/api";
import {OrdersService, TYPE_ANNOUNCEMENT_DETAIL} from "@/shared/lib";


export const useGetOrder = (slug: string, type: string) => {

    return useQuery({
        queryKey: [UserQueryKeys.CREATE_ORDER, slug],
        queryFn: () => OrdersService.getMyOrder(slug),
        enabled: type === "order",
        retry: 2
    })
}

export const useGetEquipment = (slug: string, type: string) => {
    return useQuery({
        queryKey: [UserQueryKeys.CREATE_ORDER, slug],
        queryFn: () => EquipmentService.getMyEquipment(slug),
        enabled: type === "equipment",
        retry: 2
    })
}

export const useGetAnnouncement = (slug: string, type: string) => {
    const equipment = useGetEquipment(slug, type)
    const order = useGetOrder(slug, type)

    const isOrder = type === "order"

    return {
        data: isOrder ? order.data : equipment.data,
        isLoading: isOrder ? order.isPending : equipment.isPending,
        isError: isOrder ? order.isError : equipment.isError,
        isSuccess: isOrder ? order.isSuccess : equipment.isSuccess
    }
}


//
//
export const useUpdateOrder = () => {
    // const queryClient = QueryClient
    return useMutation<any, Error, {data: FormData, slug: string}>({
        mutationKey: [UserQueryKeys.CREATE_ORDER],
        mutationFn: ({data, slug}) =>
            OrdersService.updateOrder({params: data, orderSlug: slug}),
        onSuccess: () => {
            console.log("success")
        },
        onError: () => {
            console.log("error")
        }
    })
}

export const useUpdateEquipment = () => {
    // const queryClient = QueryClient
    return useMutation<any, Error, FormData, unknown>({
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

export const useUpdateAnnouncement = (type: string) => {
    const isOrder = type === "order"

    const updateOrder = useUpdateOrder()
    const updateEquipment = useUpdateEquipment()

   return {
        updateAnnouncement: isOrder ? updateOrder.mutate : updateEquipment.mutate,
        isLoading: isOrder ? updateOrder.isPending : updateEquipment.isPending,
        isError: isOrder ? updateOrder.isError : updateEquipment.isError,
        isSuccess: isOrder ? updateOrder.isSuccess : updateEquipment.isSuccess,
   }
}

