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

const filterUniqueNotifications = (notifications: any[]) => {
   const seen = new Set();
   return notifications.filter((notification) => {
      const uniqKey = `${notification.id}-${notification.timestamp}`;
      if (seen.has(uniqKey)) {
         return false;
      } else {
         seen.add(uniqKey);
         return true;
      }
   });
};

export const useWSNotifications = (depencies?: DepenciesType) => {
   const [notifications, setNotifications] = useState<any[]>([]);
   // const [wsnotifications, setwsNotifications] = useState<any[]>([]);
   const profileId = useSubscribeStore((state) => state.data?.profile?.id);
   console.log("notifications - ", notifications);

   const { data: initialNotifications, isError, isLoading, isPending } = useGetMyNotifications();

   useEffect(() => {
      if (initialNotifications) {
         setNotifications(initialNotifications);
      }
   }, [initialNotifications]);

   useEffect(() => {
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
            // setwsNotifications((prevNotifications) => [...newNotification, ...prevNotifications]);
         }
      };

      // const wsnotifications = notifications.filter((item) => item.read == false);
      // ws.onerror = (error) => {
      //    console.error("WebSocket error:", error);
      // };

      ws.onclose = () => {
         console.log("WebSocket connection closed");
      };

      if (depencies?.deleteSuccess) {
         return () => {
            ws.close();
         };
      }
      return () => {
         ws.close();
         // setwsNotifications([]);
      };
   }, [isPending, depencies?.deleteSuccess, depencies?.readSuccess]);

   return {
      notifications,
      isError,
      isLoading,
      wsnotifications: notifications.filter((item) => item.read == false),
   };
};
