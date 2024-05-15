import {EquipmentsEndpoints, OrdersEndpoints} from "@/shared/api";

import { baseApiInstance } from "@/shared/api/instance";
import axios from "axios";

export const EquipmentService = {
   fetchEquipments: async (page: number) => {
      // const response = await baseApiInstance.get(EquipmentsEndpoints.EQUIPMENTS);
      const response = await axios.get(
         `https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`
      );
      return response;
   },
   createEquipment: async () => {
      const response = await baseApiInstance.post(EquipmentsEndpoints.CREATE_EQUIPMENT)
      return response.data
   },
   getMyOrders: async (id: number) => {
      const response = await baseApiInstance.post(OrdersEndpoints.GET_MY_ORDER + id)
      return response.data
   },
};
