"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { HeadingAuth } from "@/entities/auth/headingAuth";
import { OtpInputField } from "@/entities/auth/otpInput";
import { SendCodeBtn } from "@/entities/auth/sendCodeBtn";
import { useThemeStore } from "@/shared/themeStore";
import { useSendCode } from "../model/useQueries";
import { ProgressBar } from "@/entities/auth/progressBar";
import { EnumTokens, useThemeEffect } from "@/shared/lib";
import Cookies from "js-cookie";
import clsx from "clsx";
import styles from "./styles.module.scss";

const ConfirmationForm = () => {
   const theme = useThemeStore((state) => state.theme);

   const [type, setType] = useState("send");
   const [otp, setOtp] = useState("");

   const { sendCode, isLoading, isError } = useSendCode(setType);

   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const values = {
         code: otp,
         email: Cookies.get(EnumTokens.REGISTER_EMAIL) || "",
      };
      sendCode(values);
   };

   useThemeEffect();

   return (
      <div className={styles.auth}>
         <HeadingAuth isLoading={isLoading} isError={isError} />
         <form
            onSubmit={onSubmit}
            className={clsx({
               [styles.auth__none]: isLoading,
               [styles.auth__row]: !isLoading,
            })}>
            <OtpInputField isError={isError} otp={otp} setOtp={setOtp} />
            <SendCodeBtn type={type} isDisabled={otp.length !== 4} />
         </form>

         {isLoading && <ProgressBar isLoading={isLoading} />}
      </div>
   );
};

export default ConfirmationForm;
