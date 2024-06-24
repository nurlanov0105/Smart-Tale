import { NotificationsQueryKeys } from "@/shared/api";
import { NotificationService } from "@/shared/lib";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetMyNotifications = () => {
   return useQuery({
      queryKey: [NotificationsQueryKeys.NOTIFICATIONS],
      queryFn: NotificationService.getMyNotifications,
   });
};
export const useDeleteNotification = (id: string) => {
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
