"use client";

import { useEffect, useState } from "react";
import { EnumTokens } from "../types";
import { CookiesServices } from "../services/cookies.services";

export function useRememberMe() {
   const [isRemember, setIsRemember] = useState(true);

   useEffect(() => {
      const isClient = typeof window === "object";
      const remeberMe = CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME);

      if (isClient && remeberMe === "true") {
         setIsRemember(true);
      } else {
         setIsRemember(true);
      }
   }, []);

   return isRemember;
}
