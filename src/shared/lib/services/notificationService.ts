import { NotificaitonEndpoints } from "@/shared/api/endpoints";
import { baseApiInstance } from "@/shared/api/instance";

export const NotificationService = {
   getMyNotifications: async () => {
      const response = await baseApiInstance.get(NotificaitonEndpoints.NOTIFICATIONS);
      return response.data;
   },
   deleteNotification: async (id: string) => {
      const response = await baseApiInstance.delete(NotificaitonEndpoints.DELETE_NOTIFICATION + id);
      return response.data;
   },
   deleteAllNotifications: async () => {
      const response = await baseApiInstance.delete(NotificaitonEndpoints.DELETE_ALL_NOTIFICATIONS);
      return response.data;
   },

   readNotification: async (id: string) => {
      const response = await baseApiInstance.put(NotificaitonEndpoints.READ_NOTIFICATION + id);
      return response.data;
   },
   readAllNotifications: async () => {
      const response = await baseApiInstance.put(NotificaitonEndpoints.READ_ALL_NOTIFICATIONS);
      return response.data;
   },
};
