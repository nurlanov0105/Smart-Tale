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
   const [resendDisable, setResendDisable] = useState(isError);
   const { seconds } = useTimer({
      isError,
      resendDisable,
      setResendDisable,
   });

   const secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

   return (
      <>
         {isError ? (
            <Button type="submit" onClick={handleSendAgain} disabled={resendDisable}>
               Отправить код еще раз
            </Button>
         ) : (
            <Button type="submit" disabled={!btnDisabled} onClick={handleSendCode}>
               Войти
            </Button>
         )}
         {resendDisable ? (
            <p className={styles.auth__button}>Отправить код повторно через 00:{secondsFormat}</p>
         ) : (
            <p className={styles.auth__button}>Отправить код повторно</p>
         )}
      </>
   );
};

export default SendCodeBtn;
