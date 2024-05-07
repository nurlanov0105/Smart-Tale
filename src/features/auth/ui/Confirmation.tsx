"use client";
import React, { useEffect, useState } from "react";
import { HeadingAuth } from "@/entities/auth/headingAuth";
import { OtpInputField } from "@/entities/auth/otpInput";
import { SendCodeBtn } from "@/entities/auth/sendCodeBtn";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";
import { useResendCode, useSendCode } from "../model/useQueries";
import { EnumTokens } from "@/shared/lib";
import Cookies from "js-cookie";

const ConfirmationForm = ({}) => {
   const theme = useThemeStore((state) => state.theme);

   const { mutate: sendCode, isPending: IsSendLoading, isError } = useSendCode();
   const {
      mutate: reSendCode,
      isPending: isResendLoading,
      isSuccess: isResendSuccess,
   } = useResendCode();

   const handleConfirmation = (code: string) => {
      const data = {
         code,
         email: Cookies.get(EnumTokens.REGISTER_EMAIL) || "",
      };
      console.log(data);

      sendCode(data);
   };
   const handleResendCode = (code: string) => {
      const data = {
         code,
         email: "some",
      };
      console.log(data);

      // cookies.get(EnumTokens.REGISTER_EMAIL)?.value;
      // sendCode(data);
   };

   const [progress, setProgress] = useState<number | null>(null);

   const [otp, setOtp] = useState("");

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);

   const handleSendCode = (e: any) => {
      e.preventDefault();
      handleConfirmation(otp);
      setOtp("");
   };
   const handleSendAgain = (e: any) => {
      e.stopPropagation();
      handleResendCode(otp);
      setOtp("");
   };

   return (
      <div className={styles.auth}>
         <HeadingAuth isLoading={false} isError={isError} />
         {(!IsSendLoading || isResendLoading) && (
            <form className={styles.auth__row}>
               <OtpInputField isError={isError} otp={otp} setOtp={setOtp} />
               <SendCodeBtn
                  isError={isError}
                  handleSendAgain={handleSendAgain}
                  handleSendCode={handleSendCode}
                  btnDisabled={otp.length === 4}
                  isResendSuccess={isResendSuccess}
               />
            </form>
         )}

         {(IsSendLoading || isResendLoading) && (
            <div className={styles.auth__bar}>
               <div className={styles.auth__progress} style={{ width: `${progress}%` }}></div>
            </div>
         )}
      </div>
   );
};

export default ConfirmationForm;
