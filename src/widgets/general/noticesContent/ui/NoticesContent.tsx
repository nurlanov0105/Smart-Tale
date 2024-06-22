"use client"
import React, {useEffect} from "react";
import { NoticeEmpty } from "@/entities/general/noticeEmpty";
import { noticesData } from "@/entities/general/noticeItem";
import { NoticesLists } from "@/features/general/noticesLists";
import styles from "./styles.module.scss";
import {requestFCMToken} from "@/widgets/general/noticesContent/model/firebase.config";

const NoticesContent = () => {
   // useEffect(() => {
   //    const sendTokenToServer = async () => {
   //       const token = await requestFCMToken();
   //       if (token) {
   //          await fetch('/api/save-fcm-token/', {
   //             method: 'POST',
   //             headers: {
   //                'Content-Type': 'application/json',
   //             },
   //             body: JSON.stringify({ token }),
   //          });
   //       }
   //    };
   //
   //    sendTokenToServer();
   // }, []);

   return (
      <div className={styles.notices}>
         {noticesData.length ? <NoticeEmpty /> : <NoticesLists />}
      </div>
   );
};

export default NoticesContent;
