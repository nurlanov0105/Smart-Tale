"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { EnumTokens } from "../types/types";
import { useRememberMe } from "./useRememberMe";
import { usePathname } from "next/navigation";
import { CookiesServices } from "../services/cookies.services";

export function useSubscribed() {
   const pathname = usePathname();

   const [subscribed, setSubscribed] = useState<{
      subscription: string;
      "is subscribed": boolean;
   } | null>(null);
   const [isSubscribed, setIsSubscribed] = useState(false);

   const res = CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME);
   const isRemember = res === "true";

   useEffect(() => {
      const isClient = typeof window === "object";
      if (isClient) {
         const subscribeData = isRemember
            ? Cookies.get(EnumTokens.SUBSCRIBED_DATA)
            : sessionStorage.getItem(EnumTokens.SUBSCRIBED_DATA);

         if (subscribeData) {
            const parsedData = JSON.parse(subscribeData);
            setSubscribed(parsedData);
            setIsSubscribed(parsedData["is subscribed"]);
         } else {
            setSubscribed(null);
            setIsSubscribed(false);
         }
      }
   }, [isRemember, pathname]);

   return { subscribed, isSubscribed };
}
