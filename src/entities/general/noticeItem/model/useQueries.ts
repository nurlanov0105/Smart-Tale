import { NotificationsQueryKeys, OrganizationQueryKeys } from "@/shared/api";
import { OrdersQueryKeys, UserQueryKeys } from "@/shared/api/queryKeys";
import { NotificationService, OrdersService, OrganizationService, useAuth } from "@/shared/lib";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

export const useGetMyNotifications = () => {
   const { isAuth } = useAuth();
   return useQuery({
      queryKey: [NotificationsQueryKeys.NOTIFICATIONS],
      queryFn: NotificationService.getMyNotifications,
      enabled: isAuth,
   });
};
export const useDeleteNotification = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationKey: [NotificationsQueryKeys.DELETE_NOTIFICATION],
      mutationFn: NotificationService.deleteNotification,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [NotificationsQueryKeys.NOTIFICATIONS] });
      },
   });
};

export const useDeleteAllNotifications = (setwsNotifications: Dispatch<SetStateAction<any[]>>) => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationKey: [NotificationsQueryKeys.DELETE_ALL_NOTIFICATIONS],
      mutationFn: NotificationService.deleteAllNotifications,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [NotificationsQueryKeys.NOTIFICATIONS] });
         setwsNotifications([]);
      },
   });
};

export const useReadNotification = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationKey: [NotificationsQueryKeys.READ_NOTIFICATION],
      mutationFn: NotificationService.readNotification,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [NotificationsQueryKeys.NOTIFICATIONS] });
      },
   });
};
export const useReadAllNotifications = (setwsNotifications: Dispatch<SetStateAction<any[]>>) => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationKey: [NotificationsQueryKeys.READ_ALL_NOTIFICATIONS],
      mutationFn: NotificationService.readAllNotifications,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [NotificationsQueryKeys.NOTIFICATIONS] });
         setwsNotifications([]);
      },
   });
};

export const useEmployeeApply = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationKey: [OrganizationQueryKeys.EMPLOYEE_APPLY],
      mutationFn: OrganizationService.employeeApply,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [NotificationsQueryKeys.NOTIFICATIONS] });
         queryClient.invalidateQueries({ queryKey: [UserQueryKeys.PROFILE] });
         toast.success("Вы успешно приняли приглашение");
      },
   });
};
export const useEmployeeDecline = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationKey: [OrganizationQueryKeys.EMPLOYEE_DECLINE],
      mutationFn: OrganizationService.employeeDecline,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [NotificationsQueryKeys.NOTIFICATIONS] });
         toast.success("Вы отклонили приглашение");
      },
   });
};
export const useOrderFinish = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationKey: [OrdersQueryKeys.ORDER_FINISH],
      mutationFn: OrdersService.finishOrder,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [NotificationsQueryKeys.NOTIFICATIONS] });
         queryClient.invalidateQueries({ queryKey: [UserQueryKeys.COMMON_USER_ADS] });
         queryClient.invalidateQueries({ queryKey: [UserQueryKeys.ORDER_HISTORY] });
         queryClient.invalidateQueries({ queryKey: [OrganizationQueryKeys.GET_ORDERS] });
         queryClient.invalidateQueries({ queryKey: [OrganizationQueryKeys.HISTORY_ORDERS] });
         toast.success("Заказ успешно получен");
      },
   });
};
