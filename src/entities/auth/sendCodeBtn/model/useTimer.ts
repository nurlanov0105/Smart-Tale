import { TimerProps } from "@/shared/lib/types";
import { useEffect } from "react";

export const useTimer = ({
   setSeconds,
   seconds,
   isDisabled,
   setIsDisabled,
   isError,
}: TimerProps) => {
   useEffect(() => {
      setSeconds(59);
      // eslint-disable-next-line
   }, [isError, isDisabled]);

   useEffect(() => {
      const timer = setTimeout(() => {
         isDisabled && setSeconds((prevSeconds) => prevSeconds - 1);
         if (seconds <= 1) {
            setIsDisabled(false);
         }
      }, 1000);

      return () => clearTimeout(timer);
      // eslint-disable-next-line
   }, [seconds, isDisabled]);

   return {};
};
