"use client";
import React, { useState } from "react";
import { Chats } from "@/widgets/general/chats";
import { NoticesContent } from "@/widgets/general/noticesContent";
import { Tabs } from "@/features/general/tabs";
import { noticesTabs } from "../model/values.data";
import styles from "./styles.module.scss";
import {useThemeStore} from "@/shared/themeStore";
import clsx from "clsx";

const Notices = () => {
   const [type, setType] = useState("chats");

    const theme = useThemeStore((state) => state.theme);

   return (
      <div className={clsx(styles.notice, styles[theme])}>
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
