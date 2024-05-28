import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { EquipmentQueryKeys, ServiceQueryKeys } from "@/shared/api";
import { EquipmentService, OrdersService, ServicesService } from "@/shared/lib";
import { OrdersQueryKeys } from "@/shared/api/queryKeys";

export const useGetOrder = (slug: string, type: string) => {
   return useQuery({
      queryKey: [OrdersQueryKeys.GET_MY_ORDERS, slug],
      queryFn: () => OrdersService.getMyOrder(slug),
      enabled: type === "order",
      retry: 2,
   });
};

export const useGetEquipment = (slug: string, type: string) => {
   return useQuery({
      queryKey: [EquipmentQueryKeys.GET_MY_EQUIPMENTS, slug],
      queryFn: () => EquipmentService.getMyEquipment(slug),
      enabled: type === "equipment",
      retry: 2,
   });
};

export const useGetService = (slug: string, type: string) => {
   return useQuery({
      queryKey: [ServiceQueryKeys.MY_SERVICE, slug],
      queryFn: () => ServicesService.getServiceSlug(slug),
      enabled: type === "service",
      retry: 2,
   });
};

export const useUpdateOrder = () => {
   const queryClient = useQueryClient();
   return useMutation<any, Error, { data: FormData; slug: string }>({
      mutationKey: [OrdersQueryKeys.ORDER_UPDATE],
      mutationFn: ({ data, slug }) => OrdersService.updateOrder({ params: data, orderSlug: slug }),
      onSuccess: () => {
         console.log("success");
      },
      onError: () => {
         console.log("error");
      },
   });
};

export const useUpdateEquipment = () => {
   const queryClient = useQueryClient();
   return useMutation<any, Error, { data: FormData; slug: string }>({
      mutationKey: [EquipmentQueryKeys.EQUIPMENT_UPDATE],
      mutationFn: ({ data, slug }) =>
         EquipmentService.updateEquipment({ params: data, equipmentSlug: slug }),
      onSuccess: () => {
         console.log("success");
      },
      onError: () => {
         console.log("error");
      },
   });
};

export const useUpdateService = () => {
   const queryClient = useQueryClient();

   return useMutation<any, Error, { data: FormData; slug: string }>({
      mutationKey: [ServiceQueryKeys.UPDATE_SERVICE],
      mutationFn: ({ data, slug }) =>
         ServicesService.updateService({ params: data, serviceSlug: slug }),
      onSuccess: () => {
         console.log("success");
      },
      onError: () => {
         console.log("error");
      },
   });
};
