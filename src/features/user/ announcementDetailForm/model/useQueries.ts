import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { EquipmentQueryKeys, ServiceQueryKeys } from "@/shared/api";
import {EquipmentService, OrdersService, ServicesService, useScrollTop} from "@/shared/lib";
import { OrdersQueryKeys } from "@/shared/api/queryKeys";
import {toast} from "react-toastify";

export const useGetOrder = (slug: string, type: string) => {
   return useQuery({
      queryKey: [OrdersQueryKeys.GET_MY_ORDER, slug],
      queryFn: () => OrdersService.getMyOrder(slug),
      enabled: type === "order",
      retry: 2,
   });
};

export const useGetEquipment = (slug: string, type: string) => {
   return useQuery({
      queryKey: [EquipmentQueryKeys.GET_MY_EQUIPMENT, slug],
      queryFn: () => EquipmentService.getMyEquipment(slug),
      enabled: type === "equipment",
      retry: 2,
   });
};

export const useGetService = (slug: string, type: string) => {
   return useQuery({
      queryKey: [ServiceQueryKeys.GET_MY_SERVICE, slug],
      queryFn: () => ServicesService.getServiceSlug(slug),
      enabled: type === "service",
      retry: 2,
   });
};

export const useUpdateOrder = () => {
   const queryClient = useQueryClient();
   const {handleScrollToTop} = useScrollTop()
   return useMutation<any, Error, { data: FormData; slug: string }>({
      mutationKey: [OrdersQueryKeys.ORDER_UPDATE],
      mutationFn: ({ data, slug }) => OrdersService.updateOrder({ params: data, orderSlug: slug }),
      onSuccess: async() => {
         handleScrollToTop()
         await queryClient.invalidateQueries({queryKey: [OrdersQueryKeys.GET_MY_ORDER]})
         toast.success("Поздравлям! Вы успешно обновили заказ!");
      },
      onError: () => {
         toast.error("Произошла ошибка при запросе, попробуйте еще раз")
      },
   });
};

export const useUpdateEquipment = () => {
   const {handleScrollToTop} = useScrollTop()
   const queryClient = useQueryClient();
   return useMutation<any, Error, { data: FormData; slug: string }>({
      mutationKey: [EquipmentQueryKeys.EQUIPMENT_UPDATE],
      mutationFn: ({ data, slug }) => EquipmentService.updateEquipment({ params: data, equipmentSlug: slug }),
      onSuccess: async () => {
         await queryClient.invalidateQueries({queryKey: [EquipmentQueryKeys.GET_MY_EQUIPMENT]})
         handleScrollToTop()
         toast.success("Поздравлям! Вы успешно обновили оборудование!")
      },
      onError: () => {
         toast.error("Произошла ошибка при запросе, попробуйте еще раз")
      },
   });
};

export const useUpdateService = () => {
   const queryClient = useQueryClient();
   const {handleScrollToTop} = useScrollTop()
   return useMutation<any, Error, { data: FormData; slug: string }>({
      mutationKey: [ServiceQueryKeys.UPDATE_SERVICE],
      mutationFn: ({ data, slug }) => ServicesService.updateService({ params: data, serviceSlug: slug }),
      onSuccess: async () => {
         handleScrollToTop()
         await queryClient.invalidateQueries({queryKey: [ServiceQueryKeys.GET_MY_SERVICE]})
         toast.success("Поздравлям! Вы успешно обновили услугу!")
      },
      onError: () => {
         toast.error("Произошла ошибка при запросе, попробуйте еще раз")
      },
   });
};


export const useAnnouncementDetailsType = (slug: string, type: string) => {
   const getOrder = useGetOrder(slug, type)
   const getEquipment = useGetEquipment(slug, type)
   const getService = useGetService(slug, type)

   const dataMap = {
      order: getOrder,
      equipment: getEquipment,
      service: getService
   };
   const responseData = dataMap[type as keyof typeof dataMap]

   return responseData
}


export const useAnnouncementAction = (type: string) => {
   const updateOrder = useUpdateOrder()
   const updateEquipment = useUpdateEquipment()
   const updateService = useUpdateService()

   const updateAnnouncementMap = {
      order: updateOrder,
      equipment: updateEquipment,
      service: updateService
   };
   const updateData = updateAnnouncementMap[type as keyof typeof updateAnnouncementMap]

   return updateData
}