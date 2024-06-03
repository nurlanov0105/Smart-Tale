import { FC } from "react";
import { NoticeItemProps } from "../model/types";
import Image from "next/image";
import userIcon from "@@/imgs/form/user.svg";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";

const NoticeItem: FC<NoticeItemProps> = ({ item }) => {
   const theme = useThemeStore((state) => state.theme);
   const { imageUrl, author, title, date } = item;
   return (
      <li className={clsx(styles.item, styles[theme])}>
         <div className={styles.item__row}>
            <div className={styles.item__avatar}>
               <Image src={imageUrl ? imageUrl : userIcon} alt="user icon" />
            </div>
            <h4 className={clsx("h4", styles.item__author)}>{author}</h4>
         </div>
         <h5 className={clsx("h4", styles.item__title)}>
            {title} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad animi commodi
            consequatur cumque delectus laudantium libero, minima modi molestias repudiandae saepe
            tenetur veniam? A aut eaque facere repellendus veniam.
         </h5>
         <b className={styles.item__date}>{date}</b>
      </li>
   );
};

export default NoticeItem;
