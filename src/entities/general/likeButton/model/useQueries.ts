import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EquipmentQueryKeys } from "@/shared/api";
import { OrdersQueryKeys, ServiceQueryKeys, UserQueryKeys } from "@/shared/api/queryKeys";
import { EquipmentService, OrdersService, ServicesService } from "@/shared/lib";

export const useLikeEquipment = (slug: string, type: string) => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: EquipmentService.likeEquipment,
      mutationKey: [
         EquipmentQueryKeys.EQUIPMENTS,
         EquipmentQueryKeys.LIKED_EQUIPMENTS,
         EquipmentQueryKeys.EQUIPMENT_SLUG,
         slug,
         UserQueryKeys.COMMON_USER_ADS,
      ],

      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [EquipmentQueryKeys.EQUIPMENTS] });
         queryClient.invalidateQueries({ queryKey: [EquipmentQueryKeys.LIKED_EQUIPMENTS] });
         queryClient.invalidateQueries({
            queryKey: [type, slug],
         });
         queryClient.invalidateQueries({
            queryKey: [UserQueryKeys.COMMON_USER_ADS, slug],
         });
      },
   });
};
export const useLikeOrder = (slug: string, type: string) => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: OrdersService.likeOrder,
      mutationKey: [
         OrdersQueryKeys.ORDERS,
         OrdersQueryKeys.LIKED_ORDERS,
         slug,
         UserQueryKeys.COMMON_USER_ADS,
      ],
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [OrdersQueryKeys.ORDERS] });
         queryClient.invalidateQueries({ queryKey: [OrdersQueryKeys.LIKED_ORDERS] });
         queryClient.invalidateQueries({
            queryKey: [type, slug],
         });
         queryClient.invalidateQueries({
            queryKey: [UserQueryKeys.COMMON_USER_ADS, slug],
         });
      },
   });
};
export const useLikeService = (slug: string, type: string) => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: ServicesService.likeService,
      mutationKey: [
         ServiceQueryKeys.SERVICES,
         ServiceQueryKeys.LIKED_SERVICES,
         ServiceQueryKeys.SERVICE_SLUG,
         slug,
         UserQueryKeys.COMMON_USER_ADS,
      ],
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [ServiceQueryKeys.SERVICES] });
         queryClient.invalidateQueries({ queryKey: [ServiceQueryKeys.LIKED_SERVICES] });
         queryClient.invalidateQueries({
            queryKey: [type, slug],
         });
         queryClient.invalidateQueries({
            queryKey: [UserQueryKeys.COMMON_USER_ADS, slug],
         });
      },
   });
};
