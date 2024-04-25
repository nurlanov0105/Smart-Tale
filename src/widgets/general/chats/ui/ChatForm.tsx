"use client";
import React, { FC } from "react";
import avatar from "@@/logo.svg";
import Image from "next/image";
import { TextArea } from "@/shared/ui";
import { SendHorizontal, Image as ImageIcon, Ellipsis, MessagesSquare, Phone } from "lucide-react";
import { MessageItem, messagesData } from "@/entities/general/messageItem";
import { ChatFormProps } from "../model/types";
import styles from "./styles.module.scss";

const ChatForm: FC<ChatFormProps> = ({ selected }) => {
   return (
      <div className={styles.chat}>
         {!!selected && (
            <>
               <div className={styles.chat__user}>
                  <div className={styles.chat__block}>
                     <Image
                        className={styles.chat__avatar}
                        src={avatar}
                        alt="avatar"
                        width={30}
                        height={30}
                     />
                     <h4 className="h4">Tarantino</h4>
                  </div>
                  <div className={styles.chat__block}>
                     <button>
                        <Phone className={styles.chat__iconPhone} />
                     </button>
                     <button className={styles.chat__menu}>
                        <Ellipsis />
                     </button>
                  </div>
               </div>
               <div className={styles.chat__info}>
                  <div className={styles.chat__info__block}>
                     <Image
                        className={styles.chat__image}
                        src={avatar}
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
                     {messagesData
                        .map((message, idx) => (
                           <MessageItem idx={idx} key={idx} message={message} />
                        ))
                        .reverse()}
                  </div>

                  <form className={styles.chat__form}>
                     <button type="button">
                        <label htmlFor="file">
                           <ImageIcon className={styles.chat__iconImage} />
                        </label>
                     </button>
                     <TextArea isBordered={true} />
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
         {!selected && (
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
