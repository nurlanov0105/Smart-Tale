"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { EnumTokens } from "../types/types";
import { useRememberMe } from "./useRememberMe";

export function useSubscribed() {
   const [subscribed, setSubscribed] = useState<{
      subscription: string;
      "is subscribed": boolean;
   } | null>(null);
   const [isSubscribed, setIsSubscribed] = useState(false);
   const [isLoading, setIsLoading] = useState(true)
   const { isRemember } = useRememberMe();

   let subscribeData: any;
   if (isRemember) {
      subscribeData = Cookies.get(EnumTokens.SUBSCRIBED_DATA);
   } else {
      subscribeData = sessionStorage.getItem(EnumTokens.SUBSCRIBED_DATA);
   }

   useEffect(() => {
      const isClient = typeof window === "object";
      if (isClient && subscribeData) {
         setSubscribed(JSON.parse(subscribeData));
         setIsSubscribed(JSON.parse(subscribeData)["is subscribed"]);
      } else {
         setSubscribed(null);
         setIsSubscribed(false);
      }
      setIsLoading(false)
   }, [subscribeData]);

   return { subscribed, isSubscribed, isLoading };
}
