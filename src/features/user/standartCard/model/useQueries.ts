"use client";

import { useQuery } from "@tanstack/react-query";
import { EquipmentQueryKeys, EquipmentService } from "@/shared/api";

export const useEquipmentsQuery = (page: number) => {
   return useQuery({
      queryFn: () => EquipmentService.getEquipments(page),
      queryKey: [EquipmentQueryKeys.EQUIPMENTS, page],
   });
};
export const useEquipmentSlug = (slug: string) => {
   return useQuery({
      queryFn: () => EquipmentService.getEquipmentSlug,
      queryKey: [EquipmentQueryKeys.EQUIPMENT_SLUG, slug],
   });
};
