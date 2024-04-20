import { FC } from "react";
import { AuthorInfoProps } from "../model/types";
import styles from "./styles.module.scss";
import clsx from "clsx";

const AuthorInfo: FC<AuthorInfoProps> = ({ avatarImg, fullName, isLarge, isChat }) => {
   return (
      <div className={clsx(styles.author, isLarge ? styles.author_large : "")}>
         <div className={styles.author__avatar} style={{ backgroundImage: `url(${avatarImg})` }} />
         <div className={styles.author__col}>
            <h4 className={styles.author__name}>{fullName}</h4>
            <h5 className={styles.author__subtitle}>
               {isChat ? <span>Был в сети 10 минут назад</span> : <span>Автор объявления</span>}
            </h5>
         </div>
      </div>
   );
};

export default AuthorInfo;
