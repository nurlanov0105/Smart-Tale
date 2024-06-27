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
   const slug = useSubscribeStore(state => state.data?.profile.slug)

   const handleBtnClick = () => {
      setChat({
         selectedChat: item.id,
         isShowChat: true,
      });
   };

    const user = slug === item.initiator.slug ? item.receiver : item.initiator;

   return user && (
       <button
           onClick={handleBtnClick}
           className={clsx(
               styles.item,
               {
                   [styles.item_active]: user?.slug === selectedChat,

               },

               styles[theme]
           )}>
           <div className={styles.item__left}>
               <Image
                   className={styles.item__avatar}
                   src={user?.profile_image || avatar}

                   alt="avatar"
                   width={30}
                   height={30}
               />
               <div>
                   <h4 className="h4">{user?.first_name + " " + user.last_name}</h4>

                   <p className={styles.item__text}>
                       {item?.last_message}

                   </p>
               </div>
           </div>
           {/*<div className={styles.item__right}>*/}
           {/*   <Image*/}
           {/*      className={styles.item__image}*/}
           {/*      src={avatar}*/}
           {/*      alt="avatar"*/}
           {/*      width={50}*/}
           {/*      height={50}*/}
           {/*   />*/}
           {/*</div>*/}
       </button>
   )
};

export default ChatItem;

//(
//       <button
//          onClick={handleBtnClick}
//          className={clsx(
//             styles.item,
//             {
//                [styles.item_active]: user.slug === selectedChat,
//             },
//
//             styles[theme]
//          )}>
//          <div className={styles.item__left}>
//             <Image
//                className={styles.item__avatar}
//                src={user.profile_image || avatar}
//                alt="avatar"
//                width={30}
//                height={30}
//             />
//             <div>
//                <h4 className="h4">
//                   {data?.profile.slug === user.slug
//                      ? user.first_name + " " + user.last_name
//                      : user.first_name + " " + user.last_name}
//                </h4>
//                <p className={styles.item__text}>
//                    {item?.last_message}
//                    {
//                        item.last_message === null && "Тут пусто"
//                    }
//                </p>
//             </div>
//          </div>
//          <div className={styles.item__right}>
//             <Image
//                className={styles.item__image}
//                src={avatar}
//                alt="avatar"
//                width={50}
//                height={50}
//             />
//          </div>
//       </button>
//    );
