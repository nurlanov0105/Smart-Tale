import {baseApiInstance} from "@/shared/api/instance";
import {OrdersEndpoints} from "@/shared/api";
import type {
    BookingOrderProps,
    CreateOrderTypes,
    UpdateOrderProps,
    UpdateStatusProps
} from "../types/orders-service.types";



export const OrdersService = {

    createOrder: async (params: FormData) => {
        const headers = {"Content-Type": "multipart/form-data"}
        const response = await baseApiInstance.post(OrdersEndpoints.CREATE_ORDER, params, {headers: headers})
        return response.data
    },

    getMyOrders: async () => {
        const response = await baseApiInstance.get(OrdersEndpoints.GET_MY_ORDERS)
        return response.data
    },

    getMyOrder: async (orderSlug: string) => {
        const response = await baseApiInstance.get(OrdersEndpoints.GET_MY_ORDER + orderSlug)
        return response.data
    },

    getAppliedOrganizations: async (orderSlug: string) => {
        const response = await baseApiInstance.get(OrdersEndpoints.GET_MY_ORDERS + orderSlug)
        return response.data
    },

    applyOrder: async (orderSlug: string) => {
        const response = await baseApiInstance.post(OrdersEndpoints.LIKE_ORDER + orderSlug)
        return response.data
    },

    addOrRemoveOrderFromFavorites: async (orderSlug: string) => {
        const response = await baseApiInstance.post(OrdersEndpoints.LIKE_ORDER + orderSlug)
        return response.data
    },

    bookingOrder: async ({orderSlug, organizationSlug}: BookingOrderProps) => {
        const response = await baseApiInstance.post(`${OrdersEndpoints.BOOKING_ORDER + orderSlug}/${organizationSlug}`)
        return response.data
    },

    deleteOrder: async (orderSlug: string) => {
        const response = await baseApiInstance.post(OrdersEndpoints.DELETE_ORDER + orderSlug)
        return response.data
    },

    hideOrder: async (orderSlug: string) => {
        const response = await baseApiInstance.post(OrdersEndpoints.HIDE_ORDER + orderSlug)
        return response.data
    },

    updateOrder: async ({orderSlug, params}: UpdateOrderProps) => {
        console.log(params, orderSlug)
        const headers = { 'Content-Type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2) };
        const response = await baseApiInstance.put(OrdersEndpoints.UPDATE_ORDER + orderSlug, params, {headers: headers})
        return response.data
    },

    updateOrderStatus: async ({orderSlug, status}: UpdateStatusProps) => {
        const response = await baseApiInstance.post(`${OrdersEndpoints.UPDATE_ORDER_STATUS + orderSlug}?status=${status}`)
        return response.data
    },


}