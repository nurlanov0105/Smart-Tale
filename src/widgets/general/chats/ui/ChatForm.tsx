"use client";

import React, { FC, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGetMessages } from "@/widgets/general/chats/model/useQueries";
import { MessageItem, messagesData } from "@/entities/general/messageItem";
import { GlobalLoading, TextArea } from "@/shared/ui";
import { createWebSocket } from "@/shared/lib/hooks/useCreateWebsocket";
import { useChatsStore } from "@/shared/store/chatStore/chatsStore";
import { ROUTES, socket } from "@/shared/lib";

import { ChatFormProps } from "../model/types";
import {
   SendHorizontal,
   Image as ImageIcon,
   Ellipsis,
   MessagesSquare,
   Phone,
   ArrowLeft,
   ChevronLeft,
} from "lucide-react";
import avatar from "@@/logo.svg";
import clsx from "clsx";
import styles from "./styles.module.scss";
import {useWs} from "@/shared/lib/hooks/useWebsockets";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";

const ChatForm: FC = () => {
   const selectedChat = useChatsStore((state) => state.selectedChat);
   const id = useSubscribeStore(state => state.data?.profile.id)
   const setChats = useChatsStore((state) => state.setChatState);
   const [isSended, setIsSended] = useState(false)

   const [isReady, sendWsMessage] = useWs();

   const [inputMessage, setInputMessgae] = useState("");

   const { data, isLoading } = useGetMessages(selectedChat ? selectedChat : "", isSended);
   const handleBack = () => setChats({ isShowChat: false });

   const handleTextarea = (e: any) => {
      setInputMessgae(e.target.value);
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!!inputMessage.length){
         const mess = {
            sender: String(id),
            message: inputMessage
         };
         sendWsMessage(mess)
      }
      setIsSended(!isSended)
      setInputMessgae("")
   };

   if (isLoading)
      return (
         <div className={styles.chat}>
            <GlobalLoading />
         </div>
      );

   return (
      <div className={styles.chat}>
         <div className={styles.chat__user}>
            <Link href={ROUTES.USERS + `/${data?.receiver?.slug}`} className={styles.chat__block}>
               <Image
                  className={styles.chat__avatar}
                  src={avatar}
                  alt="avatar"
                  width={30}
                  height={30}
               />

               <h4 className="h4">
                  {data?.receiver?.last_name} {data?.receiver?.first_name}
               </h4>
            </Link>
            <div className={styles.chat__block}>
               <a href="tel:+996755260506">
                  <Phone className={styles.chat__iconPhone} />
               </a>
               <button type="button" className={styles.chat__menu}>
                  <Ellipsis />
               </button>
            </div>
         </div>
         <div className={styles.chat__info}>
            <button className={styles.chat__back} type="button" onClick={handleBack}>
               <ChevronLeft /> <span>Назад</span>
            </button>
            <div className={styles.chat__info__block}>
               <Image
                  className={styles.chat__image}
                  src={data?.receiver?.profile_image || avatar}
                  alt="avatar"
                  width={30}
                  height={30}
               />
            </div>
            <h4 className="h4">1 300 СОМ</h4>
         </div>

         <div className={styles.chat__row}>
            <div className={styles.chat__chat}>
               {data &&
                  data?.message_set.map((message, idx) => (
                     <MessageItem
                        message={message}
                        messages={data}
                        mySlug={data?.initiator?.slug}
                        key={idx}
                        idx={idx}
                     />
                  ))}
            </div>

            <form className={styles.chat__form} onSubmit={handleSubmit}>
               <TextArea type="chat" value={inputMessage} onChange={handleTextarea} />
               <button type="submit" className={styles.chat__icon} disabled={!inputMessage}>
                  <SendHorizontal />
               </button>
            </form>
         </div>
      </div>
   );
};

export default ChatForm;
