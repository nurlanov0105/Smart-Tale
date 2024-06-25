import React, { FC } from "react";
import avatar from "@@/logo.svg";
import Image from "next/image";
import { ChatItemProps } from "../model/types";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";
import { useChatsStore } from "@/shared/store/chatStore/chatsStore";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";

const ChatItem: FC<ChatItemProps> = ({ item }) => {
   const theme = useThemeStore((state) => state.theme);
   const setChat = useChatsStore((state) => state.setChatState);
   const selectedChat = useChatsStore((state) => state.selectedChat);
   const data = useSubscribeStore((state) => state.data);

   const handleBtnClick = () => {
      setChat({
         selectedChat: item.id,
         isShowChat: true,
      });
   };

   return data?.profile.slug === item.initiator.slug ? (
      <button
         onClick={handleBtnClick}
         className={clsx(
            styles.item,
            {
               [styles.item_active]: item.initiator.slug === selectedChat,
            },

            styles[theme]
         )}>
         <div className={styles.item__left}>
            <Image
               className={styles.item__avatar}
               src={item?.initiator?.profile_image || avatar}
               alt="avatar"
               width={30}
               height={30}
            />
            <div>
               <h4 className="h4">{item.initiator.first_name + " " + item.initiator.last_name}</h4>
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
   ) : (
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
               <h4 className="h4">
                  {data?.profile.slug === item.initiator.slug
                     ? item.initiator.first_name + " " + item.initiator.last_name
                     : item.receiver.first_name + " " + item.receiver.last_name}
               </h4>
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
