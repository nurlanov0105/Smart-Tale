import React, { FC } from "react";
import avatar from "@@/logo.svg";
import Image from "next/image";
import { ChatItemProps } from "../model/types";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";
import {useChatsStore} from "@/shared/store/chatStore/chatsStore";



const ChatItem: FC<ChatItemProps> = ({ item }) => {
   const theme = useThemeStore((state) => state.theme);
   const setChat = useChatsStore(state => state.setChatState)
   const selectedChat = useChatsStore(state => state.selectedChat)

   const handleBtnClick = () => {
       setChat({
           selectedChat: item.receiver.slug,
           isShowChat: true
       })
   };

   return (
      <button
         onClick={handleBtnClick}
         className={clsx(
            styles.item,
            {
               [styles.item_active]: item.receiver.slug === selectedChat,
            },

            styles[theme]
         )}>
         <div className={styles.item__left}>
            <Image
               className={styles.item__avatar}
               src={item?.receiver?.profile_image || avatar}
               alt="avatar"
               width={30}
               height={30}
            />
            <div>
               <h4 className="h4">Швейная машинка</h4>
               <p className={styles.item__text}>{item?.last_message}</p>
            </div>
         </div>
         <div className={styles.item__right}>
            <Image
               className={styles.item__image}
               src={avatar}
               alt="avatar"
               width={50}
               height={50}
            />
         </div>
      </button>
   );
};

export default ChatItem;
