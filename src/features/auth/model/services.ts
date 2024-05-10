import { AuthEndpoints, authApiInstance } from "@/shared/api";
import {
   ILoginRequest,
   IRegisterRequest,
   IResendCodeRequest,
   IForgotPasswordRequest,
   IResetPasswordRequest,
   IEmailVerifyRequest,
   LogoutType,
} from "./types";
import { baseApiInstance } from "@/shared/api/instance";
import { EnumTokens } from "@/shared/lib";

export const authApi = {
   register: async (params: IRegisterRequest) => {
      const response = await authApiInstance.post(AuthEndpoints.REGISTER, params);
      return response;
   },

   login: async (params: ILoginRequest) => {
      const response = await authApiInstance.post(AuthEndpoints.LOGIN, params);
      return response;
   },

   emailVerify: async (params: IEmailVerifyRequest) => {
      const response = await authApiInstance.post(AuthEndpoints.EMAIL_CONFIRMATION, params);
      return response;
   },

   emailAvailable: async (email: string) => {
      const response = await authApiInstance.post(AuthEndpoints.EMAIL_AVAILABLE, email, {
         headers: { "Content-Type": "text/plain" },
      });
      return response;
   },

   resendCode: async (email: IResendCodeRequest) => {
      const response = await authApiInstance.post(AuthEndpoints.RESEND_CODE, email);
      return response;
   },

   sendForgotPassword: async (params: IForgotPasswordRequest) => {
      const response = await authApiInstance.post(AuthEndpoints.FORGOT_PASSWORD, params);
      return response;
   },

   resetPassword: async (params: IResetPasswordRequest) => {
      const response = await authApiInstance.put(AuthEndpoints.RESET_PASSWORD, params);
      return response;
   },

   logout: async (params: LogoutType) => {
      const response = await baseApiInstance.post(AuthEndpoints.LOGOUT, params);
      return response;
   },

   deleteAccount: async (data: { refresh: string }) => {
      const response = await baseApiInstance.delete(AuthEndpoints.DELETE_ACCOUNT, { data });
      return response;
   },
};
