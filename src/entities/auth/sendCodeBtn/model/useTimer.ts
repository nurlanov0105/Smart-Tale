import { TimerProps } from "@/shared/lib/types/types";
import { useEffect, useState } from "react";

export const useTimer = () => {
   const [seconds, setSeconds] = useState(59);
   const [isResendDisabled, setIsResendDisabled] = useState(false)

   useEffect(() => {
      setSeconds(59);
   }, [isResendDisabled]);

   useEffect(() => {
      const timer = setTimeout(() => {
         isResendDisabled && setSeconds((prevSeconds) => prevSeconds - 1);
         if (seconds <= 1) {
            setIsResendDisabled(false);
         }
      }, 1000);

      return () => clearTimeout(timer);
      // eslint-disable-next-line
   }, [seconds, isResendDisabled]);

   return { seconds, isResendDisabled, setIsResendDisabled };
};
