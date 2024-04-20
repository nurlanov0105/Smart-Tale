"use client";
import React, { useState } from "react";
import { HeadingAuth } from "@/entities/headingAuth";
import { OtpInput } from "@/features/otpInput";
import { SendCodeBtn } from "@/entities/sendCodeBtn";
import axios, { AxiosResponse } from "axios";
import styles from "./styles.module.scss";

const Confirmation = () => {
   const [progress, setProgress] = useState<number | null>(null);
   const [isError, setIsError] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const fetchData = async () => {
      try {
         const response: AxiosResponse = await axios.get("your-api-endpoint", {
            onDownloadProgress: (progressEvent) => {
               // Проверяем, определено ли значение progressEvent.total
               if (progressEvent.total !== null && progressEvent.total !== undefined) {
                  // Вычисляем процент загрузки
                  const percentCompleted = Math.round(
                     (progressEvent.loaded * 100) / progressEvent.total
                  );
                  setProgress(percentCompleted); // Обновляем состояние прогресса
               }
            },
         });
         console.log(response.data);
      } catch (error) {
         console.error("Error fetching data:", error);
      }
   };

   return (
      <div className={styles.auth}>
         <HeadingAuth isLoading={false} isError={isError} />
         {!isLoading && (
            <form className={styles.auth__row}>
               <OtpInput isError={isError} />
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

export default Confirmation;
