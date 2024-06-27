"use client";

import React, { FC, FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageItem,  } from "@/entities/general/messageItem";
import {GlobalLoading, InputField, TextArea} from "@/shared/ui";
import { useChatsStore } from "@/shared/store/chatStore/chatsStore";
import { ROUTES } from "@/shared/lib";

import {
   SendHorizontal,
   Ellipsis,
   Phone,
   ChevronLeft,
} from "lucide-react";
import avatar from "@@/logo.svg";
import styles from "./styles.module.scss";
import {useWs} from "@/shared/lib/hooks/useWebsockets";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";
import {ErrorMessage} from "@/entities/general/errorMessage";

const ChatForm: FC = () => {
   const [inputMessage, setInputMessgae] = useState("");

   const id = useSubscribeStore(state => state.data?.profile.id);
   const slug = useSubscribeStore(state => state.data?.profile.slug);
   const setChats = useChatsStore((state) => state.setChatState);

   const {
      isReady,
      messages,
      sendMessage,
       isLoading,
       isError,
       user
   } = useWs();

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
         sendMessage(mess)
      }
      setInputMessgae("")
   };

   if (isLoading) {
      return (
          <div className={styles.chat}>
             <GlobalLoading />
          </div>
      );
   }
   if (isError){
      return <ErrorMessage/>
   }

   return (
      <div className={styles.chat}>
         <div className={styles.chat__user}>
            <Link href={ROUTES.USERS + `/${user?.slug}`} className={styles.chat__block}>
               <Image
                  className={styles.chat__avatar}
                  src={avatar}
                  alt="avatar"
                  width={30}
                  height={30}
               />

               <h4 className="h4">
                  {user?.last_name} {user?.first_name}
               </h4>
            </Link>
            <div className={styles.chat__block}>
               <a href={`tel:${user?.phone_number}`}>
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
            {/*<div className={styles.chat__info__block}>*/}
            {/*   <Image*/}
            {/*      className={styles.chat__image}*/}
            {/*      src={user?.profile_image || avatar}*/}
            {/*      alt="avatar"*/}
            {/*      width={30}*/}
            {/*      height={30}*/}
            {/*   />*/}
            {/*</div>*/}
            {/*<h4 className="h4">1 300 СОМ</h4>*/}
         </div>

         <div className={styles.chat__row}>
            <div className={styles.chat__chat}>
               { messages?.map((message, idx) => (
                     <MessageItem
                        message={message}
                        messages={messages}
                        mySlug={slug || ""}
                        key={idx}
                        idx={idx}
                     />
                  ))}
            </div>

            <form className={styles.chat__form} onSubmit={handleSubmit}>
               <InputField
                   isBordered={true}
                   value={inputMessage}
                   onChange={handleTextarea}
                   classname={styles.chat__input}
               />
               {/*<TextArea*/}
               {/*    type="chat"*/}
               {/*    value={inputMessage}*/}
               {/*    onChange={handleTextarea}*/}
               {/*/>*/}
               <button type="submit" className={styles.chat__icon} disabled={!inputMessage || !isReady}>
                  <SendHorizontal />
               </button>
            </form>
         </div>
      </div>
   );
};

export default ChatForm;
