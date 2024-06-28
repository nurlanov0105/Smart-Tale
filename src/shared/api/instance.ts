import axios from "axios";
import { toast } from "react-toastify";
import {
   CookiesServices,
   EnumTokens,
   refreshToken,
   errorCatch,
   ROUTES,
   ORGANIZATION_ROUTES,
} from "../lib";
import { showModal } from "@/views/modal";
import {AuthEndpoints, OrganizationEndpoints, ResumeEndpoints} from "@/shared/api/endpoints";
import {ResumeQueryKeys} from "@/shared/api/queryKeys";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

const baseOptions = {
   baseURL: BASE_URL,
   headers: { "Content-Type": "application/json" },
   withCredentials: true,
};

export const authApiInstance = axios.create(baseOptions);
export const baseApiInstance = axios.create(baseOptions);

authApiInstance.interceptors.response.use(
   (response) => {
      return response;
   },
   (error) => {
      const alertError = errorCatch(error);
      console.log(error);

      toast.error(alertError);
      return Promise.reject(error);
   }
);

baseApiInstance.interceptors.request.use(
   (config) => {
      const res = CookiesServices.getCookiesValue(EnumTokens.REMEMBER_ME);
      const isRemember = res === "true";

      let accessToken, refreshToken;

      if (isRemember) {
         accessToken = CookiesServices.getCookiesValue(EnumTokens.ACCESS_TOKEN);
         refreshToken = CookiesServices.getCookiesValue(EnumTokens.REFRESH_TOKEN);
      } else {
         accessToken = sessionStorage.getItem(EnumTokens.ACCESS_TOKEN);
         refreshToken = sessionStorage.getItem(EnumTokens.REFRESH_TOKEN);
      }

      if (accessToken) {
         if (!refreshToken) {
            CookiesServices.clearTokens();
            CookiesServices.clearCredentials();
         }
         config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      if (
         config.url &&
         !config.url.endsWith("logout") &&
         !config.url.includes(AuthEndpoints.DELETE_ACCOUNT) &&
         !config.url.includes(OrganizationEndpoints.GET_HISTORY_ORDERS) &&
         !config.url.includes(OrganizationEndpoints.GET_EMPLOYEE_ORDERS) &&
         !config.url.includes(OrganizationEndpoints.UPDATE_ORDER_STATUS) &&
         !config.url.includes(OrganizationEndpoints.GET_HISTORY_ORDERS) &&
         !config.url.includes(ResumeEndpoints.GET_RESUMES) &&
         !config.url.endsWith("/") &&
         !config.params
      ) {
         config.url += "/";
      }

      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

baseApiInstance.interceptors.response.use(
   (response) => response,

   async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
         originalRequest._retry = true;

         try {
            await refreshToken();

            return baseApiInstance.request(originalRequest);
         } catch (err) {
            console.log(err);
            CookiesServices.clearTokens();
            sessionStorage.clear();
            window.location.href = ROUTES.SIGN_IN;
         }

         return baseApiInstance(originalRequest);
      }
      return Promise.reject(error);
   }
);
