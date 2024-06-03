"use client";
import React, { useState } from "react";
import { Select } from "@/shared/ui";
import { ChatItem } from "@/entities/general/chatItem";
import { chatsFilterType, chatsFilterDate } from "@/entities/general/chatItem";
import { ChatProps } from "../model/types";
import ChatForm from "./ChatForm";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";

const Chats = () => {
   const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const [selectedType, setSelectedType] = useState<ChatProps>(chatsFilterType[0]);
   const [selectedDate, setSelectedDate] = useState<ChatProps>(chatsFilterDate[0]);

   const [selectedChat, setSelectedChat] = useState(0);
   const theme = useThemeStore((state) => state.theme);
   const [isShowChat, setIsShowChat] = useState(false);

   console.log(isShowChat);

   return (
      <>
         <div className={clsx(styles.chats, styles[theme])}>
            <div className={clsx(styles.chats__left, isShowChat && styles.chats_hidden)}>
               <div className={styles.chats__tabs}>
                  <Select
                     //@ts-ignore
                     selected={selectedType}
                     setSelected={setSelectedType}
                     data={chatsFilterType}
                     type="chat"
                  />
                  <Select
                     //@ts-ignore
                     selected={selectedDate}
                     setSelected={setSelectedDate}
                     data={chatsFilterDate}
                     type="chat"
                  />
               </div>
               <div className={styles.chats__list}>
                  {data.map((item) => (
                     <ChatItem
                        item={item}
                        selected={selectedChat}
                        setSelected={setSelectedChat}
                        key={item}
                        setIsShowChat={setIsShowChat}
                     />
                  ))}
               </div>
            </div>
            <div className={clsx(styles.chats__right, !isShowChat && styles.chats_hidden)}>
               <ChatForm selected={selectedChat} setIsShowChat={setIsShowChat} />
            </div>
         </div>
      </>
   );
};

export default Chats;
