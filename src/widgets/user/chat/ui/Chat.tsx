import { AuthorInfo } from "@/entities/general/authorInfo";
import styles from "./styles.module.scss";
import { Button } from "@/shared/ui";
import { ChatMessage } from "@/entities/general/chatMessage";
import { useState } from "react";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";

const Chat = () => {
   const theme = useThemeStore((state) => state.theme);
   const [message, setMessage] = useState("");

   const [sendMessage, setSendMessage] = useState("");

   const handleSubmit = (e: any) => {
      e.preventDefault();

      setSendMessage(message);
   };

   const handleMessageChange = (e: any) => {
      setMessage(e.target.value);
   };

   return (
      <div className={clsx(styles.chat, styles[theme])}>
         <div className={styles.chat__top}>
            <AuthorInfo avatarImg="" fullName="Sandy Wilder Cheng" isChat={true} />
         </div>
         <div className={styles.chat__body}>
            <div className={styles.chat__content}>
               {sendMessage ? <ChatMessage message={sendMessage} /> : ""}
            </div>
            <form className={styles.chat__form} onSubmit={handleSubmit}>
               <textarea
                  className={styles.chat__textarea}
                  placeholder="Сообщения..."
                  value={message}
                  onChange={handleMessageChange}
               />
               <Button>Отправить</Button>
            </form>
         </div>
      </div>
   );
};

export default Chat;
