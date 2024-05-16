import {baseApiInstance} from "@/shared/api/instance";
import {EquipmentsEndpoints, OrdersEndpoints} from "@/shared/api";
import {CreateOrderTypes} from "../types/orders-service.types";

export const OrdersService = {
    createOrder: async (params: CreateOrderTypes) => {
        const response = await baseApiInstance.post(OrdersEndpoints.CREATE_ORDER, params, {headers: {"Content-Type": "multipart/form-data"}})
        return response.data
    },
    getMyOrders: async (id: number) => {
        const response = await baseApiInstance.post(OrdersEndpoints.GET_MY_ORDERS + id)
        return response.data
    },
    getMyOrder: async (id: number) => {
        const response = await baseApiInstance.get(OrdersEndpoints.GET_MY_ORDER + id)
        return response.data
    },
}