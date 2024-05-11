"use client";
import React, { useState } from "react";
import { ChatSkeleton, Select } from "@/shared/ui";
import { ChatItem } from "@/entities/general/chatItem";
import { chatsFilterType, chatsFilterDate } from "@/entities/general/chatItem";
import { ChatProps } from "../model/types";
import ChatForm from "./ChatForm";
import styles from "./styles.module.scss";
import {useThemeStore} from "@/shared/themeStore";
import clsx from "clsx";

const Chats = () => {
   const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const [selectedType, setSelectedType] = useState<ChatProps>(chatsFilterType[0]);
   const [selectedDate, setSelectedDate] = useState<ChatProps>(chatsFilterDate[0]);

   const [selectedChat, setSelectedChat] = useState(0);
   const theme = useThemeStore((state) => state.theme);

   return (
      <>
         <div className={clsx(styles.chats, styles[theme])}>
            <div className={styles.chats__left}>
               <div className={styles.chats__tabs}>
                  <Select
                     selected={selectedType}
                     setSelected={setSelectedType}
                     data={chatsFilterType}
                     classname={styles.chats__select}
                  />
                  <Select
                     selected={selectedDate}
                     setSelected={setSelectedDate}
                     data={chatsFilterDate}
                     classname={styles.chats__select}
                  />
               </div>
               <div className={styles.chats__list}>
                  {data.map((item) => (
                     <ChatItem
                        item={item}
                        selected={selectedChat}
                        setSelected={setSelectedChat}
                        key={item}
                     />
                  ))}
               </div>
            </div>
            <div className={styles.chats__right}>
               <ChatForm selected={selectedChat} />
            </div>
         </div>
      </>
   );
};

export default Chats;
