import { useMutation } from "@tanstack/react-query";
import { UseFormReset } from "react-hook-form";
import { OrdersService, ServicesService } from "@/shared/lib";
import {EquipmentQueryKeys, EquipmentService, ServiceQueryKeys, UserQueryKeys} from "@/shared/api";
import type { OrderCreateFormType } from "../model/types";
import { toast } from "react-toastify";
import {OrdersQueryKeys} from "@/shared/api/queryKeys";

export const useCreateOrder = (reset: UseFormReset<OrderCreateFormType>) => {
   return useMutation<any, Error, FormData, unknown>({
      mutationKey: [OrdersQueryKeys.CREATE_ORDER],
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
      mutationKey: [EquipmentQueryKeys.CREATE_EQUIPMENT],
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
      mutationKey: [ServiceQueryKeys.UPDATE_SERVICE],
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
