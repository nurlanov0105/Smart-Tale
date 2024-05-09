import { TimerProps } from "@/shared/lib/types";
import { useEffect, useState } from "react";

export const useTimer = ({ resendDisable, setResendDisable, isError }: TimerProps) => {
   const [seconds, setSeconds] = useState(6);

   useEffect(() => {
      setSeconds(6);
   }, [isError, resendDisable]);

   useEffect(() => {
      const timer = setTimeout(() => {
         resendDisable && setSeconds((prevSeconds) => prevSeconds - 1);
         if (seconds <= 1) {
            setResendDisable(false);
         }
      }, 1000);

      return () => clearTimeout(timer);
      // eslint-disable-next-line
   }, [seconds, resendDisable]);

   return { seconds };
};
