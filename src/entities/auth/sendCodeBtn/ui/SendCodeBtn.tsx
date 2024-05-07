import React, { FC, useState } from "react";
import { Button } from "@/shared/ui";
import { useTimer, SendBtnProps } from "../index";
import styles from "./styles.module.scss";

const SendCodeBtn: FC<SendBtnProps> = ({
   isError,
   handleSendAgain,
   handleSendCode,
   isResendSuccess,
   btnDisabled,
}) => {
   // const { seconds } = useTimer({ isError });

   // const secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

   return (
      <>
         {isError ? (
            <Button type="submit" onClick={handleSendAgain}>
               Отправить код еще раз
            </Button>
         ) : (
            <Button type="submit" disabled={!btnDisabled} onClick={handleSendCode}>
               Войти
            </Button>
         )}
         {isResendSuccess ? (
            <p className={styles.auth__button}>Отправить код повторно через 00:{59}</p>
         ) : (
            <p className={styles.auth__button}>Отправить код повторно</p>
         )}
      </>
   );
};

export default SendCodeBtn;
