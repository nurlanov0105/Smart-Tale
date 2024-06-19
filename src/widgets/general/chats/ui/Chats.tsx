"use client";
import React, { useState } from "react";
import { chatsFilterType, chatsFilterDate } from "@/entities/general/chatItem";
import { ChatProps } from "../model/types";
import ChatForm from "./ChatForm";
import { useThemeStore } from "@/shared/lib";
import clsx from "clsx";
import Select2 from "@/shared/ui/select/Select2";
import {SELECT_TYPES} from "@/shared/lib";
import {ChatsList} from "@/features/general/chatsList";
import {useChatsStore} from "@/shared/store/chatStore/chatsStore";
import styles from "./styles.module.scss";

const Chats = () => {
   const [selectedType, setSelectedType] = useState<ChatProps>(chatsFilterType[0]);
   const [selectedDate, setSelectedDate] = useState<ChatProps>(chatsFilterDate[0]);

   const theme = useThemeStore((state) => state.theme);
   const isShowChat = useChatsStore((state) => state.isShowChat);

   return (
      <>
         <div className={clsx(styles.chats, styles[theme])}>
            <div className={clsx(styles.chats__left, isShowChat && styles.chats_hidden)}>
               <div className={styles.chats__tabs}>
                  <Select2
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
                  />
               </div>
               <ChatsList/>
            </div>
            <div className={clsx(styles.chats__right, !isShowChat && styles.chats_hidden)}>
               <ChatForm />
            </div>
         </div>
      </>
   );
};

export default Chats;
