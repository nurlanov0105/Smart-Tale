import { ConfirmationForm } from "@/features/auth";
import React from "react";

const Confirmation = () => {
   // const fetchData = async () => {
   //    try {
   //       const response: AxiosResponse = await axios.get("your-api-endpoint", {
   //          onDownloadProgress: (progressEvent) => {
   //             // Проверяем, определено ли значение progressEvent.total
   //             if (progressEvent.total !== null && progressEvent.total !== undefined) {
   //                // Вычисляем процент загрузки
   //                const percentCompleted = Math.round(
   //                   (progressEvent.loaded * 100) / progressEvent.total
   //                );
   //                setProgress(percentCompleted); // Обновляем состояние прогресса
   //             }
   //          },
   //       });
   //       console.log(response.data);
   //    } catch (error) {
   //       console.error("Error fetching data:", error);
   //    }
   // };

   return <ConfirmationForm />;
};

export default Confirmation;
