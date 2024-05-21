import {useDeleteEquipment, useDeleteOrder, useHideEquipment, useHideOrder} from "../useQueries";

export const useHideAnnouncement = (type: string) => {

    const isOrder = type === "order"

    const hideOrder = useHideOrder()
    const hideEquipment = useHideEquipment()

    return {
        hideAnnouncement: isOrder ? hideOrder.mutate : hideEquipment.mutate,
        isLoading: isOrder ? hideOrder.isPending : hideEquipment.isPending,
        isError: isOrder ? hideOrder.isError : hideEquipment.isError,
        isSuccess: isOrder ? hideOrder.isSuccess : hideEquipment.isSuccess,
    }
}


export const useDeleteAnnouncement = (type: string) => {

    const isOrder = type === "order"

    const deleteOrder = useDeleteOrder()
    const deleteEquipment = useDeleteEquipment()

    return {
        deleteAnnouncement: isOrder ? deleteOrder.mutate : deleteEquipment.mutate,
        isLoading: isOrder ? deleteOrder.isPending : deleteEquipment.isPending,
        isError: isOrder ? deleteOrder.isError : deleteEquipment.isError,
        isSuccess: isOrder ? deleteOrder.isSuccess : deleteEquipment.isSuccess,
    }
}