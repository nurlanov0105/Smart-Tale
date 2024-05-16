import {EquipmentsEndpoints, OrdersEndpoints} from "@/shared/api";

import { baseApiInstance } from "@/shared/api/instance";
import axios from "axios";
import {CreateEquipmentTypes} from "@/shared/lib/types/orders-service.types";

export const EquipmentService = {
   fetchEquipments: async (page: number) => {
      // const response = await baseApiInstance.get(EquipmentsEndpoints.EQUIPMENTS);

      const response = await axios.get(
         `https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`
      );
      return response;
   },
   createEquipment: async (params: CreateEquipmentTypes) => {
      const response = await baseApiInstance.post(EquipmentsEndpoints.CREATE_EQUIPMENT, params, {headers: {"Content-Type": "multipart/form-data"}})
      return response.data
   },
   getMyEquipments: async (id: number) => {
      const response = await baseApiInstance.post(EquipmentsEndpoints.GET_MY_EQUIPMENT + id)
      return response.data
   },
   getMyEquipment: async (id: number) => {
      const response = await baseApiInstance.get(EquipmentsEndpoints.GET_MY_EQUIPMENT + id)
      return response.data
   },
};
