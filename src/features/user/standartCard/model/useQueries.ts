"use client";

import { useQuery } from "@tanstack/react-query";
import { EquipmentQueryKeys, EquipmentService } from "@/shared/api";

export const useEquipmentsQuery = (page: number) => {
   return useQuery({
      queryFn: () => EquipmentService.fetchEquipments(page),
      queryKey: [EquipmentQueryKeys.EQUIPMENTS, page],
      staleTime: 1000 * 5,
   });
};
