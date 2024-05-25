import axios, {AxiosHeaders} from "axios";
import { toast } from "react-toastify";
import {
   CookiesServices,
   EnumTokens,
   ROUTES,
   refreshToken,
   errorCatch,
   useRememberMe,
} from "../lib";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;
const authOptions = {
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true
}

const baseOptions = {
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    // transformRequest: [function (data: any, headers: AxiosHeaders) {
    //     if (headers['Content-Type'] && headers['Content-Type'].startsWith('multipart/form-data')) {
    //         const form = new FormData();
    //         for (const key in data) {
    //             const value = data[key];
    //             if (Array.isArray(value)) {
    //                 const arrayKey = `${key}[]`;
    //                 value.forEach(v => {
    //                     form.append(arrayKey, v);
    //                 });
    //             } else{
    //                 form.append(key, value);
    //             }
    //         }
    //         return form;
    //     }
    //
    //     return data;
    // }],
}


export const authApiInstance = axios.create(authOptions);
export const baseApiInstance = axios.create(baseOptions);


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
            //window.location.href = ROUTES.SIGN_IN;
         }
         config.headers["Authorization"] = `Bearer ${accessToken}`;
      }

       // if (config.url && !config.url.endsWith('logout') && !config.url.endsWith('/')) {
       //     config.url += '/';
       // }

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
            //if (errorCatch(error) === "Токен недействителен или просрочен") CookiesServices.clearTokens()
            console.log(err);
         }

         return baseApiInstance(originalRequest);
      }

      console.log("Произошла ошибка при запросе: ", error);
      toast.error("Произошла ошибка при запросе");
      return Promise.reject(error);
   }
);
