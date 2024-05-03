"use client";
import React, { useEffect, useState } from "react";
import { HeadingAuth } from "@/entities/auth/headingAuth";
import { OtpInputField } from "@/entities/auth/otpInput";
import { SendCodeBtn } from "@/entities/auth/sendCodeBtn";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";

const ConfirmationForm = () => {
   const [progress, setProgress] = useState<number | null>(null);
   const [isError, setIsError] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const theme = useThemeStore((state) => state.theme);

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);

   return (
      <div className={styles.auth}>
         <HeadingAuth isLoading={false} isError={isError} />
         {!isLoading && (
            <form className={styles.auth__row}>
               <OtpInputField isError={isError} />
               <SendCodeBtn isError={isError} setIsError={setIsError} />
            </form>
         )}

         {isLoading && (
            <div className={styles.auth__bar}>
               <div className={styles.auth__progress} style={{ width: `${progress}%` }}></div>
            </div>
         )}
      </div>
   );
};

export default ConfirmationForm;
