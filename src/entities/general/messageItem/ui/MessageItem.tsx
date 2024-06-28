import React, { FC } from "react";
import {Check, CheckCheck} from "lucide-react";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";
import {useGetDates} from "@/shared/lib";
import { MessageTypes } from "../model/types";
import styles from "./styles.module.scss";
import {useChatsStore} from "@/shared/store/chatStore/chatsStore";

const MessageItem: FC<MessageTypes> = ({ message, idx, mySlug }) => {
   const theme = useThemeStore((state) => state.theme);
   const messages = useChatsStore(state => state.messages)

   const isMe = mySlug === message.sender;
   const prevMessage = () => {
      if (idx === 0 || !messages) {
         return false;
      }

      return messages[idx - 1].sender === message?.sender
   };

   const isChecked = !!messages?.length && messages[messages?.length - 1].id === message.id

   const { minutes, hours} = useGetDates(message?.timestamp);
   const time = !isNaN(+minutes) ? `${hours}:${minutes}` : message?.timestamp

   return (
      <>
         {isMe && (
            <div className={clsx(styles.myMessage, prevMessage() && styles.none, styles[theme])}>
               <div className={styles.myMessage__message}>
                  <span className={styles.myMessage__text}>{message?.message}</span>
                  <div className={styles.myMessage__block}>
                     <p className={styles.myMessage__time}>
                        {/*{hours}:{minutes}*/}
                        {time}
                     </p>
                     <p className={styles.myMessage__icon}>
                        {
                           isChecked ? <Check /> : <CheckCheck />
                        }
                     </p>
                  </div>
               </div>
            </div>
         )}
         {!isMe && (
            <div className={clsx(styles.message, prevMessage() && styles.none, styles[theme])}>
               <div className={styles.message__message}>
                  <p className={styles.myMessage__text}>{message?.message}</p>
                  <p className={styles.message__time}>
                     {/*{hours}:{minutes}*/}
                     {time}
                  </p>
               </div>
            </div>
         )}
      </>
   );
};

export default MessageItem;
