"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGetMessages } from "@/widgets/general/chats/model/useQueries";
import { MessageItem, messagesData } from "@/entities/general/messageItem";
import { GlobalLoading, TextArea } from "@/shared/ui";
import { createWebSocket } from "@/shared/lib/hooks/useCreateWebsocket";
import { useChatsStore } from "@/shared/store/chatStore/chatsStore";
import { ROUTES } from "@/shared/lib";

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

const ChatForm: FC = () => {
   const selectedChat = useChatsStore((state) => state.selectedChat);
   const setChats = useChatsStore((state) => state.setChatState);

   const { data, isLoading } = useGetMessages(!!selectedChat);
   const handleBack = () => setChats({ isShowChat: false });

   if (isLoading)
      return (
         <div className={styles.chat}>
            <GlobalLoading />
         </div>
      );

   return (
      <div className={styles.chat}>
         {!!selectedChat && (
            <>
               <div className={styles.chat__user}>
                  <Link
                     href={ROUTES.USERS + `/${data?.receiver?.slug}`}
                     className={styles.chat__block}>
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
                     <h4 className={styles.chat__title}>Samsung Galaxy A3, Б/у, 16 ГБ</h4>
                  </div>
                  <h4 className="h4">1 300 СОМ</h4>
               </div>

               <div className={styles.chat__row}>
                  <div className={styles.chat__chat}>
                     {data &&
                        data?.message_set?.map((message, idx) => (
                           <MessageItem
                              message={message}
                              messages={data}
                              mySlug={data?.initiator?.slug}
                              key={idx}
                              idx={idx}
                           />
                        ))}
                  </div>

                  <form className={styles.chat__form}>
                     <button type="button">
                        <label htmlFor="file">
                           <ImageIcon className={styles.chat__iconImage} />
                        </label>
                     </button>
                     <TextArea type="chat" />
                     <button className={styles.chat__icon}>
                        <SendHorizontal />
                     </button>
                  </form>
                  <input
                     id="file"
                     accept="image/*,.png,.jpg"
                     className="visually-hidden"
                     type="file"
                  />
               </div>
            </>
         )}
         {!selectedChat && (
            <div className={styles.chat__empty}>
               <MessagesSquare className={styles.chat__iconEmpty} />
               <h3 className="h3">
                  Выберите чат, чтобы начать <br /> разговор
               </h3>
            </div>
         )}
      </div>
   );
};

export default ChatForm;
