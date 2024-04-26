"use client";
import React, { useState } from "react";
import { Chats } from "@/widgets/general/chats";
import { NoticesContent } from "@/widgets/general/noticesContent";
import { Tabs } from "@/features/general/tabs";
import { noticesTabs } from "../model/values.data";
import styles from "./styles.module.scss";

const Notices = () => {
   const [type, setType] = useState("chats");

   return (
      <div className={styles.notice}>
         <div className={styles.notice__container}>
            <div className={styles.notice__top}>
               <Tabs type={type} setType={setType} values={noticesTabs} variant="secondary" />
            </div>

            {type === "chats" ? <Chats /> : <NoticesContent />}
         </div>
      </div>
   );
};

export default Notices;
