import { NotificationsQueryKeys } from "@/shared/api";
import { NotificationService } from "@/shared/lib";
import { useQuery } from "@tanstack/react-query";

export const useGetMyNotifications = () => {
   return useQuery({
      queryKey: [NotificationsQueryKeys.NOTIFICATIONS],
      queryFn: NotificationService.getMyNotifications,
   });
};
