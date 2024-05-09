import RegisterForm from "./ui/RegisterForm";
import ConfirmationForm from "./ui/Confirmation";
import LoginForm from "./ui/LoginForm";

import { authApi } from "./model/services";
import type { IRegisterRequest, ILoginRequest, registerFormType } from "./model/types";
import {
   useRegister,
   useLogin,
   useSendCode,
   useResendCode,
   useLogout,
   useDeleteAccount,
} from "./model/useQueries";

export {
   RegisterForm,
   ConfirmationForm,
   LoginForm,
   authApi,
   IRegisterRequest,
   ILoginRequest,
   registerFormType,
   useRegister,
   useLogin,
   useSendCode,
   useResendCode,
   useLogout,
   useDeleteAccount,
};
