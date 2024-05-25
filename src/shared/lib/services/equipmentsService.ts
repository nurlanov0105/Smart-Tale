import { EquipmentsEndpoints, OrdersEndpoints } from "@/shared/api";
import { UpdateEquipmentProps } from "@/shared/lib/types/orders-service.types";
import { baseApiInstance } from "@/shared/api/instance";

export const EquipmentService = {
   getEquipments: async (page: number) => {
      const response = await baseApiInstance.get(EquipmentsEndpoints.EQUIPMENTS, {
         params: {
            page: page,
         },
      });

      return response;
   },
   getEquipmentSlug: async (slug: string) => {
      const response = await baseApiInstance.get(EquipmentsEndpoints.EQUIPMENT_SLUG + slug);

      return response;
   },

   getMyAnnouncements: async (type: string) => {
      const response = await baseApiInstance.get(EquipmentsEndpoints.GET_MY_ANNOUNCEMENTS + type);
      return response.data;
   },

   getLikedEquipments: async (page: number) => {
      const response = await baseApiInstance.get(EquipmentsEndpoints.LIKED_EQUIPMENTS, {
         params: {
            page: page,
         },
      });

      return response;
   },
   createEquipment: async (params: FormData) => {
      const response = await baseApiInstance.post(EquipmentsEndpoints.CREATE_EQUIPMENT, params, {
         headers: { "Content-Type": "multipart/form-data" },
         method: "POST",
      });
      return response.data;
   },
   getMyAds: async (page: number, param_tab: string) => {
      const params =
         param_tab !== "all"
            ? {
                 page: page,
                 ads: param_tab,
              }
            : { page: page };
      const response = await baseApiInstance.get(EquipmentsEndpoints.GET_MY_ADS, {
         params,
      });
      return response.data;
   },

   getMyEquipment: async (slug: string) => {
      const response = await baseApiInstance.get(EquipmentsEndpoints.GET_MY_EQUIPMENT + slug);
      return response.data;
   },
   searchEquipment: async (search: string) => {
      const response = await baseApiInstance.post(EquipmentsEndpoints.SEARCH_EQUIPMENTS, {
         params: {
            search: search,
         },
      });
      return response.data;
   },
   getMyOrders: async (id: number) => {
      const response = await baseApiInstance.post(OrdersEndpoints.GET_MY_ORDER + id);
      return response.data;
   },
   hideEquipment: async (slug: string) => {
      const response = await baseApiInstance.put(EquipmentsEndpoints.HIDE_EQUIPMENT + slug);
      return response.data;
   },
   deleteEquipment: async (slug: string) => {
      const response = await baseApiInstance.put(EquipmentsEndpoints.DELETE_EQUIPMENT + slug);
      return response.data;
   },

   updateEquipment: async ({ equipmentSlug, params }: UpdateEquipmentProps) => {
      const headers = { "Content-Type": "multipart/form-data" };
      const response = await baseApiInstance.put(
         EquipmentsEndpoints.UPDATE_EQUIPMENT + equipmentSlug,
         params,
         { headers: headers }
      );
      return response.data;
   },
};
