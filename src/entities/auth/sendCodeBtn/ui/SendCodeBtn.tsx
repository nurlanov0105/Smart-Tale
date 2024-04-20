import React, { FC, useState } from "react";
import { Button } from "@/shared/ui";
import { useTimer, SendBtnProps } from "../index";
import styles from "./styles.module.scss";

const SendCodeBtn: FC<SendBtnProps> = ({ isError, setIsError }) => {
   const [seconds, setSeconds] = useState(59);
   const [isDisabled, setIsDisabled] = useState(false);

   useTimer({ seconds, setSeconds, isDisabled, setIsDisabled, isError });
   const handleSendAgain = () => {
      setIsError(true);
      setIsDisabled(true);
   };

   const handleSend = () => {
      setIsError(true);
      setIsDisabled(true);
   };
   const secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

   return (
      <>
         {isError ? (
            <Button type="submit" disabled={isDisabled} onClick={handleSendAgain}>
               Отправить код еще раз
            </Button>
         ) : (
            <Button type="submit" onClick={handleSend}>
               Войти
            </Button>
         )}
         {isDisabled ? (
            <p className={styles.auth__button}>Отправить код повторно через 00:{secondsFormat}</p>
         ) : (
            <p className={styles.auth__button}>Отправить код повторно</p>
         )}
      </>
   );
};

export default SendCodeBtn;
