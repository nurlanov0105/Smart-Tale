"use client";
import React, { useEffect, useState } from "react";
import { NoticeEmpty } from "@/entities/general/noticeEmpty";
import {
   noticesData,
   useDeleteAllNotifications,
   useGetMyNotifications,
   useReadAllNotifications,
   useWSNotifications,
} from "@/entities/general/noticeItem";
import { NoticesLists } from "@/features/general/noticesLists";
import styles from "./styles.module.scss";
import { Button, GlobalLoading } from "@/shared/ui";
import { ErrorMessage } from "@/entities/general/errorMessage";
import { CookiesServices, EnumTokens } from "@/shared/lib";
import { Eye, TrashIcon } from "lucide-react";

const NoticesContent = () => {
   const { setwsNotifications } = useWSNotifications();

   const {
      mutate: deleteAllNotices,
      isPending: deleteLoading,
      isSuccess: deleteSuccess,
   } = useDeleteAllNotifications(setwsNotifications);
   const {
      mutate: readAllNotices,
      isPending: readLoading,
      isSuccess: readSuccess,
   } = useReadAllNotifications(setwsNotifications);

   const { notifications, isError, isLoading } = useWSNotifications({
      deleteSuccess,
      readSuccess,
   });

   const handleReadAll = () => {
      readAllNotices();
   };

   const handleDeleteAll = () => {
      deleteAllNotices();
   };

   if (isLoading) {
      return <GlobalLoading />;
   }

   if (isError) {
      return <ErrorMessage />;
   }

   return (
      <div className={styles.notices}>
         {notifications?.length ? (
            <div className={styles.notices__btns}>
               <Button classType="btnBorder" onClick={handleReadAll} disabled={readLoading}>
                  <span className={styles.notices__span}>
                     <Eye /> {readLoading ? "Загрузка..." : "Отметить все прочитанными"}
                  </span>
               </Button>
               <Button classType="btnBorder" onClick={handleDeleteAll} disabled={deleteLoading}>
                  <span className={styles.notices__span}>
                     <TrashIcon /> {deleteLoading ? "Загрузка..." : "Удалить все уведомления"}
                  </span>
               </Button>
            </div>
         ) : null}

         {!notifications?.length ? <NoticeEmpty /> : <NoticesLists data={notifications} />}
      </div>
   );
};

export default NoticesContent;
