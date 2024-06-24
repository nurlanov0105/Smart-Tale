"use client";
import React, { useEffect } from "react";
import { NoticeEmpty } from "@/entities/general/noticeEmpty";
import { noticesData, useGetMyNotifications } from "@/entities/general/noticeItem";
import { NoticesLists } from "@/features/general/noticesLists";
import styles from "./styles.module.scss";
import { GlobalLoading } from "@/shared/ui";
import { ErrorMessage } from "@/entities/general/errorMessage";

const NoticesContent = () => {
   const { data, isError, isLoading } = useGetMyNotifications();

   if (isLoading) {
      return <GlobalLoading />;
   }

   if (isError) {
      return <ErrorMessage />;
   }

   if (!isLoading) {
      console.log(data);
   }

   return (
      <div className={styles.notices}>{!data?.length ? <NoticeEmpty /> : <NoticesLists />}</div>
   );
};

export default NoticesContent;
