"use client";

import React, { useEffect, useState } from "react";
import { HeadingAuth } from "@/entities/auth/headingAuth";
import { OtpInputField } from "@/entities/auth/otpInput";
import { SendCodeBtn } from "@/entities/auth/sendCodeBtn";
import { useThemeStore } from "@/shared/themeStore";
import {useSendCode} from "../model/useQueries";
import {useProgress} from "../model/hooks";
import { EnumTokens } from "@/shared/lib";
import Cookies from "js-cookie";
import styles from "./styles.module.scss";
import clsx from "clsx";

const ConfirmationForm = () => {
   const theme = useThemeStore((state) => state.theme);

   const [type, setType] = useState("send")
   const [otp, setOtp] = useState("");

   const {
      sendCode,
      isLoading,
      isError
   } = useSendCode(setType)

   const {progress} = useProgress(isLoading)

   const onSubmit = (e: any) => {
      e.preventDefault()
      const values = {
         code: otp,
         email: Cookies.get(EnumTokens.REGISTER_EMAIL) || ""
      }
      sendCode(values)
   }

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);


   return (
       <div className={styles.auth}>
          <HeadingAuth
              isLoading={isLoading}
              isError={isError}
          />
          <form onSubmit={onSubmit} className={clsx({
             [styles.auth__row]: !isLoading,
             [styles.auth__none]: isLoading
          })}>
             <OtpInputField
                 isError={isError}
                 otp={otp}
                 setOtp={setOtp}
             />
             <SendCodeBtn
                 type={type}
                 isDisabled={otp.length !== 4}
             />
          </form>

          {isLoading && (
              <div className={styles.auth__bar}>
                 <div className={styles.auth__progress} style={{width: `${progress}%`}}></div>
              </div>
          )}
       </div>
   );
};

export default ConfirmationForm;
