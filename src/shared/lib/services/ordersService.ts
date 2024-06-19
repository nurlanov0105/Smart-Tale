import { baseApiInstance } from "@/shared/api/instance";
import { OrdersEndpoints } from "@/shared/api";
import type {
   BookingOrderProps,
   CreateOrderTypes,
   GeneralPropsType,
   UpdateOrderProps,
   UpdateStatusProps,
} from "../types/orders-service.types";

export const OrdersService = {
   createOrder: async (params: FormData) => {
      const headers = { "Content-Type": "multipart/form-data" };
      const response = await baseApiInstance.post(OrdersEndpoints.CREATE_ORDER, params, {
         headers: headers,
      });
      return response.data;
   },

   getOrders: async ({ page }: { page: number }) => {
      const response = await baseApiInstance.get(OrdersEndpoints.GET_ORDERS, {
         params: { page: page },
      });
      return {
         data: response.data?.data,
         hasNextPage: response.data.has_next_page,
         nextPage: response.data.next_page_number,
      };
   },
   getMyOrders: async (page: number) => {
      const response = await baseApiInstance.get(OrdersEndpoints.GET_MY_ORDERS, {
         params: {
            page: page,
         },
      });
      return response.data;
   },
   getLikedOrders: async ({ page }: { page: number }) => {
      const response = await baseApiInstance.get(OrdersEndpoints.GET_LIKED_ORDERS, {
         params: {
            page: page,
         },
      });
      return response.data;
   },
   getOrdersHistory: async (page: number, stage: string) => {
      const response = await baseApiInstance.get(OrdersEndpoints.GET_ORDERS_HISTORY, {
         params: {
            page: page,
            stage: stage,
         },
      });
      return response.data;
   },
   getMyOrdersHistory: async ({ page, param_tab }: { page: number; param_tab: string }) => {
      const response = await baseApiInstance.get(OrdersEndpoints.GET_MY_ORDERS_HISTORY, {
         params: {
            page: page,
            status: param_tab,
         },
      });

      return {
         data: response.data?.data?.data,
         hasNextPage: response.data.has_next_page,
         nextPage: response.data.next_page_number,
      };
   },

   getMyOrder: async (orderSlug: string) => {
      const response = await baseApiInstance.get(OrdersEndpoints.GET_MY_ORDER + orderSlug);
      return response.data;
   },

   getAppliedOrganizations: async ({ slug, page }: GeneralPropsType) => {
      const response = await baseApiInstance.get(OrdersEndpoints.GET_APPLIED_ORGANIZATIONS + slug);
      return response;
   },

   applyOrder: async (orderSlug: string) => {
      const response = await baseApiInstance.post(OrdersEndpoints.APPLY_ORDER + orderSlug);
      return response.data;
   },

   addOrRemoveOrderFromFavorites: async (orderSlug: string) => {
      const response = await baseApiInstance.post(OrdersEndpoints.UPDATE_ORDER + orderSlug);
      return response.data;
   },

   bookingOrder: async ({ orderSlug, organizationSlug }: BookingOrderProps) => {
      const response = await baseApiInstance.post(
         `${OrdersEndpoints.BOOKING_ORDER + orderSlug}/${organizationSlug}`
      );
      return response.data;
   },

   deleteOrder: async (orderSlug: string) => {
      const response = await baseApiInstance.post(OrdersEndpoints.DELETE_ORDER + orderSlug);
      return response.data;
   },

   hideOrder: async (orderSlug: string) => {
      const response = await baseApiInstance.put(OrdersEndpoints.HIDE_ORDER + orderSlug);
      return response.data;
   },

   updateOrder: async ({ orderSlug, params }: UpdateOrderProps) => {
      // console.log(params, orderSlug)
      const headers = { "Content-Type": "multipart/form-data" };
      const response = await baseApiInstance.put(OrdersEndpoints.UPDATE_ORDER + orderSlug, params, {
         headers: headers,
      });
      return response.data;
   },

   updateOrderStatus: async ({ orderSlug, status }: UpdateStatusProps) => {
      const response = await baseApiInstance.post(
         `${OrdersEndpoints.UPDATE_ORDER_STATUS + orderSlug}?status=${status}`
      );
      return response.data;
   },
   likeOrder: async (orderSlug: string) => {
      const response = await baseApiInstance.post(OrdersEndpoints.LIKE_ORDER + orderSlug);
      return response.data;
   },
};
