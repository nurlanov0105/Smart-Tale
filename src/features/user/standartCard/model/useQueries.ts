"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { EquipmentQueryKeys } from "@/shared/api";
import { EquipmentService, OrdersService, ServicesService } from "@/shared/lib";
import { OrdersQueryKeys, ServiceQueryKeys } from "@/shared/api/queryKeys";

export const useEquipmentsQuery = (page: number) => {
   return useQuery({
      queryFn: () => EquipmentService.getEquipments({ page }),
      queryKey: [EquipmentQueryKeys.EQUIPMENTS, page],
   });
};
export const useEquipmentSlug = (slug: string) => {
   return useQuery({
      queryFn: () => EquipmentService.getEquipmentSlug,
      queryKey: [EquipmentQueryKeys.EQUIPMENT_SLUG, slug],
   });
};
