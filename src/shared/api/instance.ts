import axios from "axios";
import { AuthEndpoints } from "./endpoints";
import { toast } from "react-toastify";
import { CookiesServices, EnumTokens } from "../lib";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

export const authApiInstance = axios.create({
   baseURL: BASE_URL,
   headers: { "Content-Type": "application/json" },
});

export const baseApiInstance = axios.create({
   baseURL: BASE_URL,
   headers: { "Content-Type": "application/json" },
});
authApiInstance.interceptors.response.use(
   (response) => {
      return response;
   },
   (error) => {
      // const errorKey = Object.keys(error.response.data)[0];
      // const errorMessage = error.response.data[errorKey];

      console.log("Произошла ошибка при запросе: ", error);
      toast.error("Произошла ошибка при запросе");
      return Promise.reject(error);
   }
);

baseApiInstance.interceptors.request.use(
   (config) => {
      // isRemeberMe - true/false, get from session storage
      const remeberMe = CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME);
      let accessToken;

      if (remeberMe) {
         accessToken = sessionStorage.getItem(EnumTokens.ACCESS_TOKEN);
      } else {
         accessToken = CookiesServices.getCookiesValue(EnumTokens.ACCESS_TOKEN);
      }

      if (accessToken) {
         config.headers["Authorization"] = `Bearer ${accessToken}`;
      }

      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

baseApiInstance.interceptors.response.use(
   (response) => {
      return response;
   },
   async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
         originalRequest._retry = true;

         // refresh token
         const { access, refresh } = await refreshToken();

         // save token to cookies/session storage
         const remeberMe = CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME);
         if (remeberMe) {
            sessionStorage.setItem(EnumTokens.ACCESS_TOKEN, access);
            sessionStorage.setItem(EnumTokens.REFRESH_TOKEN, refresh);
         } else {
            CookiesServices.setToken({ keyName: EnumTokens.ACCESS_TOKEN, value: access });
            CookiesServices.setToken({ keyName: EnumTokens.REFRESH_TOKEN, value: refresh });
         }

         axios.defaults.headers.common["Authorization"] = "Bearer " + access;
         originalRequest.headers["Authorization"] = "Bearer " + access;

         return baseApiInstance(originalRequest);
      }

      console.log("Произошла ошибка при запросе: ", error.message);
      toast.error("Произошла ошибка при запросе");
      return Promise.reject(error);
   }
);

const refreshToken = async () => {
   // isRemeberMe - true/false, get from session storage

   const remeberMe = CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME);
   let refreshToken;

   if (remeberMe) {
      refreshToken = sessionStorage.getItem(EnumTokens.REFRESH_TOKEN);
   } else {
      refreshToken = CookiesServices.getCookiesValue(EnumTokens.REFRESH_TOKEN);
   }

   const data = {
      refresh: refreshToken,
   };

   const response = await axios.post(BASE_URL + AuthEndpoints.REFRESH_TOKEN, data);

   return { access: response.data.access, refresh: response.data.refresh };
};
