import axios from "axios";
import { toast } from "react-toastify";
import { CookiesServices, EnumTokens, ROUTES, refreshToken, errorCatch } from "../lib";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;
const options = {
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true
}

export const authApiInstance = axios.create(options);
export const baseApiInstance = axios.create(options);

authApiInstance.interceptors.response.use(
   (response) => {
      return response;
   },
   (error) => {
      // const errorKey = Object.keys(error.response.data)[0];
      // const errorMessage = error.response.data[errorKey];

      const alertError = errorCatch(error)
       console.log(error)

      toast.error(alertError);
      return Promise.reject(error);
   }
);

baseApiInstance.interceptors.request.use(
   (config) => {
      const accessToken = CookiesServices.getCookiesValue(EnumTokens.ACCESS_TOKEN);
      const refreshToken = CookiesServices.getCookiesValue(EnumTokens.REFRESH_TOKEN);

      if (accessToken) {
         if (!refreshToken) {
            CookiesServices.clearTokens();
            CookiesServices.clearCredentials();
            //window.location.href = ROUTES.SIGN_IN;
         }
         config.headers["Authorization"] = `Bearer ${accessToken}`;
      }

      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

baseApiInstance.interceptors.response.use(
    response => response,
   async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
         originalRequest._retry = true;

         try {
            await refreshToken()

            return baseApiInstance.request(originalRequest)
         }catch (err){
            //if (errorCatch(error) === 'jwt expired') CookiesServices.clearTokens()
             console.log(err)
         }

         return baseApiInstance(originalRequest);
      }

      console.log("Произошла ошибка при запросе: ", error.message);
      toast.error("Произошла ошибка при запросе");
      return Promise.reject(error);
   }
);
