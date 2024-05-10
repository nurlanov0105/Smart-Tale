import React, { FC } from "react";
import { Button } from "@/shared/ui";
import { useTimer, SendBtnProps } from "../index";
import styles from "./styles.module.scss";
import {useResendCode} from "@/features/auth";
import Cookies from "js-cookie";
import {EnumTokens} from "@/shared/lib";

const SendCodeBtn: FC<SendBtnProps> = ({ type, isDisabled}) => {

   const {
       seconds,
       isResendDisabled,
       setIsResendDisabled
   } = useTimer();

   const {resend} = useResendCode()

   const secondsFormat = seconds < 10 ? `0${seconds}` : seconds;
    const handleResend = () => {
       const email = Cookies.get(EnumTokens.REGISTER_EMAIL) || ""
       resend(email)
        setIsResendDisabled(true)
    }

   return (
      <>
         {type === "send" ? (
            <Button type="submit" disabled={isDisabled}>
               Войти
            </Button>
         ) : (
            <Button type="submit" disabled={isDisabled}>
               Отправить код еще раз
            </Button>
         )}
         {isResendDisabled ? (
            <p className={styles.auth__button}>Отправить код повторно через 00:{secondsFormat}</p>
         ) : (
            <p onClick={handleResend} className={styles.auth__button}>Отправить код повторно</p>
         )}
      </>
   );
};

export default SendCodeBtn;
