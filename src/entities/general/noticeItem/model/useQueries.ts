import {NotificationsQueryKeys, OrganizationQueryKeys, UserQueryKeys} from "@/shared/api";
import {NotificationService, OrganizationService, useAuth} from "@/shared/lib";
import { showModal } from "@/views/modal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useGetMyNotifications = () => {
   const {isAuth} = useAuth();
   return useQuery({
      queryKey: [NotificationsQueryKeys.NOTIFICATIONS],
      queryFn: NotificationService.getMyNotifications,
      enabled: isAuth
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

export const useDeleteAllNotifications = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationKey: [NotificationsQueryKeys.DELETE_ALL_NOTIFICATIONS],
      mutationFn: NotificationService.deleteAllNotifications,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [NotificationsQueryKeys.NOTIFICATIONS] });
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
export const useReadAllNotifications = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationKey: [NotificationsQueryKeys.READ_ALL_NOTIFICATIONS],
      mutationFn: NotificationService.readAllNotifications,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [NotificationsQueryKeys.NOTIFICATIONS] });
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
