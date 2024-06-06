"use client";

import Cookies from "js-cookie";
import { CookiesServicesType, EnumTokens, RefreshTokenTypes } from "../types/types";

export const CookiesServices = {
   getTokens: () => {
      const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
      const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN);

      return {
         accessToken,
         refreshToken,
      };
   },
   getCookiesValue: (keyName: EnumTokens) => {
      const res = Cookies.get(keyName);

      return res;
   },
   setToken: ({ value, keyName, time }: CookiesServicesType) => {
      if (
         keyName === EnumTokens.ACCESS_TOKEN ||
         (keyName === EnumTokens.REFRESH_TOKEN && value && typeof value !== "boolean")
      ) {
         Cookies.set(keyName, value.toString(), {
            path: "/",
            expires: 1,
            sameSite: "strict",
            secure: true,
         });
      } else {
         document.cookie = `${keyName}=${value};path=/;max-age=${time}`;
      }
   },
   clearCredentials: () => {
      Cookies.remove(EnumTokens.REGISTER_EMAIL);
      Cookies.remove(EnumTokens.SUBSCRIBE_TYPE);
      Cookies.remove(EnumTokens.SUBSCRIBED_DATA);
      Cookies.remove(EnumTokens.CARD_AUTHOR);
   },
   clearTokens: () => {
      Cookies.remove(EnumTokens.ACCESS_TOKEN);
      Cookies.remove(EnumTokens.REFRESH_TOKEN);
   },
};
