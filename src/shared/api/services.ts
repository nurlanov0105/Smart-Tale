import { EquipemntEndpoints } from "@/shared/api";

import { baseApiInstance } from "@/shared/api/instance";
import axios from "axios";

export const EquipmentService = {
   fetchEquipments: async (page: number) => {
      // const response = await baseApiInstance.get(EquipemntEndpoints.EQUIPMENTS);
      const response = await axios.get(
         `https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`
      );
      return response;
   },
};
