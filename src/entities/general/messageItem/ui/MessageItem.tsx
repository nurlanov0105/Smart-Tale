import React, { FC } from "react";
import { CheckCheck } from "lucide-react";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";
import {useGetDates} from "@/shared/lib";
import { MessageTypes } from "../model/types";
import styles from "./styles.module.scss";

const MessageItem: FC<MessageTypes> = ({ message, idx, mySlug, messages }) => {
   const theme = useThemeStore((state) => state.theme);

   const isMe = mySlug === message?.sender?.slug;
   const prevMessage = () => {
      if (idx === 0) {
         return false;
      }
      return messages?.message_set[idx - 1].sender.slug === message?.sender?.slug;
   };

   const { minutes, hours} = useGetDates(message?.timestamp);

   return (
      <>
         {isMe && (
            <div className={clsx(styles.myMessage, prevMessage() && styles.none, styles[theme])}>
               <div className={styles.myMessage__message}>
                  <span className={styles.myMessage__text}>{message?.text}</span>
                  <div className={styles.myMessage__block}>
                     <p className={styles.myMessage__time}>{hours}:{minutes}</p>
                     <p className={styles.myMessage__icon}>
                        <CheckCheck />
                     </p>
                  </div>
               </div>
            </div>
         )}
         {!isMe && (
            <div className={clsx(styles.message, prevMessage() && styles.none, styles[theme])}>
               <div className={styles.message__message}>
                  <p className={styles.myMessage__text}>{message?.text}</p>
                  <p className={styles.message__time}>{hours}:{minutes}</p>
               </div>
            </div>
         )}
      </>
   );
};

export default MessageItem;
