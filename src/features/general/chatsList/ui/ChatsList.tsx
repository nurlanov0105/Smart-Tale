import React, {useEffect} from "react";
import { ChatItem } from "@/entities/general/chatItem";
import { useGetChats } from "@/widgets/general/chats/model/useQueries";
import { GlobalLoading } from "@/shared/ui";
import styles from "./styles.module.scss";
import {usePathname} from "next/navigation";
import {useChatsStore} from "@/shared/store/chatStore/chatsStore";

const ChatsList = () => {
   const { data: chats, isLoading } = useGetChats();
   const setChat = useChatsStore(state => state.setChatState)

   const pathname = usePathname()

   useEffect(() => {

      return () => {
         setChat({
            selectedChat: null,
            isShowChat: false,
            messages: null
         })
      }
   }, [pathname]);

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
