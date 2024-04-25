"use client";
import React, { useState } from "react";
import { Chats } from "@/widgets/general/chats";
import { NoticesContent } from "@/widgets/general/noticesContent";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { Tabs } from "@/features/general/tabs";
import { noticesTabs } from "../model/values.data";

const Notices = () => {
   const [type, setType] = useState("chats");
   const handleType = (newType: string) => setType(newType);
   const isType = (t: string) => (t === type ? styles.notice__button_active : "");

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
