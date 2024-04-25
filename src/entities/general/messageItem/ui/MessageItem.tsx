import React, { FC } from "react";
import { MessageTypes } from "../model/types";
import { CheckCheck } from "lucide-react";
import { messagesData } from "../model/values.data";
import clsx from "clsx";
import styles from "./styles.module.scss";

const MessageItem: FC<MessageTypes> = ({ message, idx }) => {
   const myId = 1; // типо мой айди
   const isMe = myId === message.id;
   const prevMessage = () => {
      if (idx === messagesData.length - 1) return false;
      return messagesData[idx + 1].id === message.id; //проверяем если последнее сообщение было написано тем же
      // человеком, тозакорючка не нужна, иначе нужна
   };

   return (
      <>
         {isMe && (
            <div className={clsx(styles.myMessage, prevMessage() && styles.none)}>
               <div className={styles.myMessage__message}>
                  <span className={styles.myMessage__text}>{message.text}</span>
                  <div className={styles.myMessage__block}>
                     <p className={styles.myMessage__time}>{message.time}</p>
                     <p className={styles.myMessage__icon}>
                        <CheckCheck />
                     </p>
                  </div>
               </div>
            </div>
         )}
         {!isMe && (
            <div className={clsx(styles.message, prevMessage() && styles.none)}>
               <div className={styles.message__message}>
                  <p className={styles.myMessage__text}>{message.text}</p>
                  <p className={styles.message__time}>{message.time}</p>
               </div>
            </div>
         )}
      </>
   );
};

export default MessageItem;
