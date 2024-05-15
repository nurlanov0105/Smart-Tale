import {baseApiInstance} from "@/shared/api/instance";
import {EquipmentsEndpoints, OrdersEndpoints} from "@/shared/api";

export const OrderFormService = {
    createOrder: async () => {
        const response = await baseApiInstance.post(OrdersEndpoints.CREATE_ORDER)
        return response.data
    },
    getMyOrders: async (id: number) => {
        const response = await baseApiInstance.post(OrdersEndpoints.GET_MY_ORDER + id)
        return response.data
    }
}

export const EquipmentFormService = {
    createEquipment: async () => {
        const response = await baseApiInstance.post(EquipmentsEndpoints.CREATE_EQUIPMENT)
        return response.data
    },
    getMyOrders: async (id: number) => {
        const response = await baseApiInstance.post(OrdersEndpoints.GET_MY_ORDER + id)
        return response.data
    }
}