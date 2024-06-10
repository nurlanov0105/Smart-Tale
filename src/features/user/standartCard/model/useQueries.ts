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
export const useLikeEquipment = (slug: string) => {
   return useMutation({
      mutationFn: EquipmentService.likeEquipment,
      mutationKey: [EquipmentQueryKeys.EQUIPMENTS, EquipmentQueryKeys.EQUIPMENT_SLUG, slug],
   });
};
export const useLikeOrder = (slug: string) => {
   return useMutation({
      mutationFn: OrdersService.likeOrder,
      mutationKey: [OrdersQueryKeys.ORDERS, OrdersQueryKeys.LIKED_ORDERS, slug],
   });
};
export const useLikeService = (slug: string) => {
   return useMutation({
      mutationFn: ServicesService.likeService,
      mutationKey: [ServiceQueryKeys.SERVICES, ServiceQueryKeys.LIKED_SERVICES, slug],
   });
};
