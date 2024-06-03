import React, { FC } from "react";
import avatar from "@@/logo.svg";
import Image from "next/image";
import { ChatItemProps } from "../model/types";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";

const ChatItem: FC<ChatItemProps> = ({ item, setSelected, selected }) => {
   const handleSelect = () => setSelected(item);
   const theme = useThemeStore((state) => state.theme);

   return (
      <button
         onClick={handleSelect}
         className={clsx(
            styles.item,
            {
               [styles.item_active]: item === selected,
            },
            styles[theme]
         )}>
         <div className={styles.item__left}>
            <Image
               className={styles.item__avatar}
               src={avatar}
               alt="avatar"
               width={30}
               height={30}
            />
            <div>
               <h4 className="h4">Швейная машинка</h4>
               <p className={styles.item__text}>Ага, тебе тоже</p>
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
