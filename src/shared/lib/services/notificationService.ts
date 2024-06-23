import { NotificaitonEndpoints } from "@/shared/api/endpoints";
import { baseApiInstance } from "@/shared/api/instance";

export const NotificationService = {
   getMyNotifications: async () => {
      const response = await baseApiInstance.get(NotificaitonEndpoints.NOTIFICATIONS);
      return response.data;
   },
};
