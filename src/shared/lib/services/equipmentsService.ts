import { EquipmentsEndpoints, OrdersEndpoints } from "@/shared/api";

import { baseApiInstance } from "@/shared/api/instance";

export const EquipmentService = {
   getEquipments: async (page: number) => {
      const response = await baseApiInstance.get(EquipmentsEndpoints.EQUIPMENTS);
      // const response = await axios.get(
      //    `https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`
      // );
      return response;
   },
   getEquipmentSlug: async (slug: string) => {
      const response = await baseApiInstance.get(EquipmentsEndpoints.EQUIPMENT_SLUG + slug);

      return response;
   },
   getLikedEquipments: async ({ type, page }: { type: string; page: number }) => {
      const response = await baseApiInstance.get(EquipmentsEndpoints.LIKED_EQUIPMENTS, {
         params: {
            page: page,
            type: type,
         },
      });

      return response;
   },
   createEquipment: async () => {
      const response = await baseApiInstance.post(EquipmentsEndpoints.CREATE_EQUIPMENT);
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
};
