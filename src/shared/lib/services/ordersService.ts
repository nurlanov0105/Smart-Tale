import {baseApiInstance} from "@/shared/api/instance";
import {OrdersEndpoints} from "@/shared/api";

export const OrdersService = {
    createOrder: async () => {
        const response = await baseApiInstance.post(OrdersEndpoints.CREATE_ORDER)
        return response.data
    },
    getMyOrders: async (id: number) => {
        const response = await baseApiInstance.post(OrdersEndpoints.GET_MY_ORDER + id)
        return response.data
    }
}