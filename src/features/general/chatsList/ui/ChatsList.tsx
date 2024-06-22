import React from "react";
import { ChatItem } from "@/entities/general/chatItem";
import { useGetChats } from "@/widgets/general/chats/model/useQueries";
import { GlobalLoading } from "@/shared/ui";
import styles from "./styles.module.scss";

const ChatsList = () => {
   const { data: chats, isLoading } = useGetChats();

   if (isLoading)
      return (
         <div className={styles.chats}>
            <GlobalLoading type="default" />
         </div>
      );

   return (
      <div className={styles.chats}>
         {chats?.map((item, idx: number) => (
            <ChatItem item={item} key={idx} />
         ))}
         {!chats?.length && <h3 className={styles.chats__title}>Ваш список чатов пуст...</h3>}
      </div>
   );
};

export default ChatsList;
