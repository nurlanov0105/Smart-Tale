"use client";

import { CookiesServices, EnumTokens } from "@/shared/lib";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";

import { useEffect, useState } from "react";
import { useGetMyNotifications } from "./useQueries";

type DepenciesType = {
   deleteSuccess?: boolean;
   readSuccess?: boolean;

   data?: any[];
};

interface Props {
   depencies?: DepenciesType;
}

export const useWSNotifications = (depencies?: DepenciesType) => {
   const [notifications, setNotifications] = useState<any[]>([]);
   const [wsnotifications, setwsNotifications] = useState<any[]>([]);
   const profileId = useSubscribeStore((state) => state.data?.profile?.id);

   const { data: initialNotifications, isError, isLoading, isPending } = useGetMyNotifications();

   useEffect(() => {
      if (initialNotifications) {
         setNotifications(initialNotifications);
      }
   }, [initialNotifications]);

   useEffect(() => {
      if (!profileId) {
         return;
      }
      const token = CookiesServices.getCookiesValue(EnumTokens.ACCESS_TOKEN);

      const url = `wss://helsinki-backender.org.kg/ws/notifications/${profileId}/?token=${token}`;

      const ws = new WebSocket(url);

      ws.onopen = () => {
         console.log("WebSocket connection established");
      };

      ws.onmessage = (event) => {
         console.log("Received message:", JSON.parse(event.data).notifications);
         const newNotification = JSON.parse(event.data).notifications;
         if (newNotification) {
            setNotifications((prevNotifications) => [...newNotification, ...prevNotifications]);

            // для показа кол-ва уведомлений
            setwsNotifications((prevNotifications) => {
               const updatedNotification = newNotification?.filter((item: any) => !item.read);
               return updatedNotification;
            });
         }
      };

      ws.onclose = () => {
         console.log("WebSocket connection closed");
      };

      if (depencies?.deleteSuccess) {
         return () => {
            ws.close();
            setwsNotifications([]);
         };
      }
      return () => {
         ws.close();
         setwsNotifications([]);
      };
   }, [isPending, depencies?.deleteSuccess, depencies?.readSuccess, profileId]);

   return {
      notifications,
      isError,
      isLoading,
      wsnotifications: wsnotifications,
      setwsNotifications,
   };
};
