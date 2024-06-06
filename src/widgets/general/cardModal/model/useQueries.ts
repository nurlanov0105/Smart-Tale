import { EquipmentQueryKeys } from "@/shared/api";
import { EquipmentService } from "@/shared/lib";
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
