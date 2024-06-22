import { ChangeEvent, FC, FormEvent, useState } from "react";
import { AuthorInfo } from "@/entities/general/authorInfo";
import { Button } from "@/shared/ui";
import { ChatMessage } from "@/entities/general/chatMessage";
import { useThemeStore } from "@/shared/store/themeStore";
import { ChatType } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useStartChat } from "@/widgets/general/chats/model/useQueries";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";

const Chat: FC<ChatType> = ({ author, isModal }) => {
   const theme = useThemeStore((state) => state.theme);
   const [message, setMessage] = useState("");
   const currentUser = useSubscribeStore((state) => state.data);

   const [sendMessage, setSendMessage] = useState("");
   const { mutate, isPending } = useStartChat();

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      mutate(author?.slug || "");

      setMessage("")
      setSendMessage(message);
   };

   const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value);
   };

   return (
      <div className={clsx(styles.chat, styles[theme], isModal && styles.chat_modal)}>
         {!isModal && (
            <div className={styles.chat__top}>
               <AuthorInfo
                  fullName={author?.first_name + " " + author?.last_name}
                  avatarImg={author?.profile_image}
                  slug={author?.slug}
                  isChat={true}
               />
            </div>
         )}

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
               <Button disabled={currentUser?.profile.slug === author?.slug}>
                  {
                     isPending ? "Загрузка..." : "Отправить"
                  }
               </Button>
            </form>
         </div>
      </div>
   );
};

export default Chat;
