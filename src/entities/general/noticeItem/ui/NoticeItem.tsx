import { FC } from "react";
import { NoticeItemProps } from "../model/types";
import Image from "next/image";
import userIcon from "@@/imgs/form/user.svg";
import styles from "./styles.module.scss";
import clsx from "clsx";

const NoticeItem: FC<NoticeItemProps> = ({ item }) => {
   const { imageUrl, author, title, date } = item;
   return (
      <li className={styles.item}>
         <div className={styles.item__row}>
            <div className={styles.item__avatar}>
               <Image src={imageUrl ? imageUrl : userIcon} alt="user icon" />
            </div>
            <h4 className={clsx("h4", styles.item__author)}>{author}</h4>
         </div>
         <h5 className={clsx("h4", styles.item__title)}>{title}</h5>
         <b className={styles.item__date}>{date}</b>
      </li>
   );
};

export default NoticeItem;
