import axios from "axios";
import { AuthEndpoints } from "./endpoints";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { EnumTokens } from "../lib";

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
      const errorKey = Object.keys(error.response.data)[0];
      const errorMessage = error.response.data[errorKey];

      console.log("Error occurred during the request: ", error.response.data);
      toast.error(errorMessage);
      return Promise.reject(error);
   }
);

baseApiInstance.interceptors.request.use(
   (config) => {
      const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);

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

         const accessToken = await refreshToken();
         Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, { path: "/", expires: 1 });

         axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
         originalRequest.headers["Authorization"] = "Bearer " + accessToken;

         return baseApiInstance(originalRequest);
      }

      console.error("Error occurred during the request: ", error.message);
      alert("Error occurred during the request");
      return Promise.reject(error);
   }
);

const refreshToken = async () => {
   const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN);

   const { data } = await axios.post(
      BASE_URL + AuthEndpoints.REFRESH_TOKEN,
      `Bearer ${refreshToken}`,
      { headers: { "Content-Type": "text/plain" } }
   );
   return data.accessToken;
};
