import { FC } from "react";
import { AuthorInfoProps } from "../model/types";
import styles from "./styles.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { ROUTES } from "@/shared/lib";
import { closeModal } from "@/views/modal";

const AuthorInfo: FC<AuthorInfoProps> = ({ avatarImg, fullName, isLarge, isChat }) => {
   return (
      <Link
         href={ROUTES.USERS + `/${fullName}`}
         className={clsx(styles.author, isLarge ? styles.author_large : "")}
         onClick={closeModal}>
         <div
            className={styles.author__avatar}
            style={{ backgroundImage: `url(${avatarImg ? avatarImg : ""})` }}
         />
         <div className={styles.author__col}>
            <h4 className={styles.author__name}>{fullName}</h4>
            <h5 className={styles.author__subtitle}>
               {isChat ? <span>Был в сети 10 минут назад</span> : <span>Автор объявления</span>}
            </h5>
         </div>
      </Link>
   );
};

export default AuthorInfo;
