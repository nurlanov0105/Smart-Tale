import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { UseFormReset } from "react-hook-form";
import { toast } from "react-toastify";
import { OrdersQueryKeys } from "@/shared/api/queryKeys";
import { EquipmentQueryKeys, ServiceQueryKeys } from "@/shared/api";
import { EquipmentService, OrdersService, ServicesService, useScrollTop } from "@/shared/lib";
import type { AnnouncementCreateFormType } from "../types";

export const useCreateOrder = (reset: UseFormReset<AnnouncementCreateFormType>) => {
   const queryClient = useQueryClient();
   const { handleScrollToTop } = useScrollTop();
   return useMutation<any, Error, FormData, unknown>({
      mutationKey: [OrdersQueryKeys.CREATE_ORDER],
      mutationFn: (data) => OrdersService.createOrder(data),
      onSuccess: () => {
         reset();
         toast.success("Вы успешно разместили заказ!");
         handleScrollToTop();
         queryClient.invalidateQueries({ queryKey: [OrdersQueryKeys.ORDERS] });
         queryClient.invalidateQueries({ queryKey: [EquipmentQueryKeys.GET_MY_ADS] });
      },
      onError: (error) => {
         console.log(`Error: ${error}`);
      },
   });
};

export const useCreateEquipment = (reset: UseFormReset<AnnouncementCreateFormType>) => {
   const queryClient = useQueryClient();
   const { handleScrollToTop } = useScrollTop();
   return useMutation<any, Error, FormData, unknown>({
      mutationKey: [EquipmentQueryKeys.CREATE_EQUIPMENT],
      mutationFn: (data) => EquipmentService.createEquipment(data),
      onSuccess: () => {
         reset();
         handleScrollToTop();
         toast.success("Вы успешно разместили оборудование!");
         queryClient.invalidateQueries({ queryKey: [EquipmentQueryKeys.EQUIPMENTS] });
         queryClient.invalidateQueries({ queryKey: [EquipmentQueryKeys.GET_MY_ADS] });
      },
      onError: (error) => {
         console.log(`Error: ${error}`);
      },
   });
};

export const useCreateService = (reset: UseFormReset<AnnouncementCreateFormType>) => {
   const queryClient = useQueryClient();
   const { handleScrollToTop } = useScrollTop();
   return useMutation<any, Error, FormData, unknown>({
      mutationKey: [ServiceQueryKeys.UPDATE_SERVICE],
      mutationFn: (data) => ServicesService.createService(data),
      onSuccess: () => {
         reset();
         handleScrollToTop();
         toast.success("Вы успешно разместили услугу!");
         queryClient.invalidateQueries({ queryKey: [ServiceQueryKeys.SERVICES] });
         queryClient.invalidateQueries({ queryKey: [EquipmentQueryKeys.GET_MY_ADS] });
      },
      onError: (error) => {
         console.log(`Error: ${error}`);
      },
   });
};

export const useCreateAnnouncement = (
   type: string,
   reset: UseFormReset<AnnouncementCreateFormType>
) => {
   const createOrder = useCreateOrder(reset);
   const createEquipment = useCreateEquipment(reset);
   const createService = useCreateService(reset);

   const createAnnouncementByType = {
      order: createOrder,
      equipment: createEquipment,
      service: createService,
   };
   const createAnnouncement =
      createAnnouncementByType[type as keyof typeof createAnnouncementByType];

   return createAnnouncement;
};
