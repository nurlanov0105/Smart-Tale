import { useMutation } from "@tanstack/react-query";
import { UseFormReset } from "react-hook-form";
import { OrdersService, ServicesService } from "@/shared/lib";
import { EquipmentService, UserQueryKeys } from "@/shared/api";
import type { OrderCreateFormType } from "../model/types";
import { toast } from "react-toastify";

export const useCreateOrder = (reset: UseFormReset<OrderCreateFormType>) => {
   return useMutation<any, Error, FormData, unknown>({
      mutationKey: [UserQueryKeys.CREATE_ORDER],
      mutationFn: (data) => OrdersService.createOrder(data),
      onSuccess: () => {
         reset();
         toast.success("Вы успешно разместили заказ!");
      },
      onError: (error) => {
         console.log(`Error: ${error}`);
      },
   });
};

export const useCreateEquipment = (reset: UseFormReset<OrderCreateFormType>) => {
   return useMutation<any, Error, FormData, unknown>({
      mutationKey: [UserQueryKeys.CREATE_EQUIPMENT],
      mutationFn: (data) => EquipmentService.createEquipment(data),
      onSuccess: () => {
         reset();
         toast.success("Вы успешно разместили оборудование!");
      },
      onError: (error) => {
         console.log(`Error: ${error}`);
      },
   });
};
export const useCreateService = (reset: UseFormReset<OrderCreateFormType>) => {
   return useMutation<any, Error, FormData, unknown>({
      mutationKey: [UserQueryKeys.CREATE_SERVICE],
      mutationFn: (data) => ServicesService.createService(data),
      onSuccess: () => {
         reset();
         toast.success("Вы успешно разместили услугу!");
      },
      onError: (error) => {
         console.log(`Error: ${error}`);
      },
   });
};
