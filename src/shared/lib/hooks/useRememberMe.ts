"use client";

import { useEffect, useState } from "react";
import { EnumTokens } from "../types/types";
import { CookiesServices } from "../services/cookies.services";

export function useRememberMe() {
   const [isRemember, setIsRemember] = useState(true);

   useEffect(() => {
      const isClient = typeof window === "object";
      const res = isClient ? CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME) : "true";
      const rememberMe = res === "true";

      if (!rememberMe) {
         setIsRemember(false);
      }
   }, []);

   return { isRemember, setIsRemember };
}
