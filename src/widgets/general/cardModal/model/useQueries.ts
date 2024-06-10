import { EquipmentQueryKeys } from "@/shared/api";
import { OrdersQueryKeys } from "@/shared/api/queryKeys";
import { EquipmentService, OrdersService } from "@/shared/lib";
import { showModal } from "@/views/modal";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useBuyEquipment = () => {
   return useMutation({
      mutationKey: [EquipmentQueryKeys.EQUIPMENTS, EquipmentQueryKeys.EQUIPMENT_SLUG],
      mutationFn: (slug: string) => EquipmentService.buyEquipment(slug),
      onSuccess: () => {
         showModal("BuyAnnouncementModal");
      },
   });
};
export const useOrderApply = () => {
   return useMutation({
      mutationKey: [OrdersQueryKeys.APPLIED_OERGANIZATIONS, OrdersQueryKeys.APPLY_ORDER],
      mutationFn: (slug: string) => OrdersService.applyOrder(slug),
      onSuccess: () => {
         showModal("AcceptAnnouncementModal");
      },
   });
};
