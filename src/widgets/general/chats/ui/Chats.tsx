"use client";
import React, { useEffect, useState } from "react";
import { chatsFilterType, chatsFilterDate } from "@/entities/general/chatItem";
import { ChatProps } from "../model/types";
import ChatForm from "./ChatForm";
import { useThemeStore } from "@/shared/lib";
import Select2 from "@/shared/ui/select/Select2";
import { SELECT_TYPES } from "@/shared/lib";
import { ChatsList } from "@/features/general/chatsList";
import { useChatsStore } from "@/shared/store/chatStore/chatsStore";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { MessagesSquare } from "lucide-react";

const Chats = () => {
   const [selectedType, setSelectedType] = useState<ChatProps>(chatsFilterType[0]);
   const [selectedDate, setSelectedDate] = useState<ChatProps>(chatsFilterDate[0]);
   const selectedChat = useChatsStore((state) => state.selectedChat);

   const theme = useThemeStore((state) => state.theme);
   const isShowChat = useChatsStore((state) => state.isShowChat);

   useEffect(() => {}, [selectedChat]);

   return (
      <>
         <div className={clsx(styles.chats, styles[theme])}>
            <div className={clsx(styles.chats__left, isShowChat && styles.chats_hidden)}>
               <div className={styles.chats__tabs}>
                  {/* <Select2
                     selected={selectedType}
                     setSelected={setSelectedType}
                     data={chatsFilterType}
                     type={SELECT_TYPES.chat}
                  />
                  <Select2
                     selected={selectedDate}
                     setSelected={setSelectedDate}
                     data={chatsFilterDate}
                     type={SELECT_TYPES.chat}
                  /> */}
               </div>
               <ChatsList />
            </div>
            <div className={clsx(styles.chats__right, !isShowChat && styles.chats_hidden)}>
               {isShowChat ? (
                  <ChatForm />
               ) : (
                  <div className={styles.chat__empty}>
                     <MessagesSquare className={styles.chat__iconEmpty} />
                     <h3 className="h3">
                        Выберите чат, чтобы начать <br /> разговор
                     </h3>
                  </div>
               )}
            </div>
         </div>
      </>
   );
};

export default Chats;
