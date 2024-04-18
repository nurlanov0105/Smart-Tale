import { FC } from "react";
import { Props } from "../model/types";
import styles from "./styles.module.scss";

const AuthorInfo: FC<Props> = ({ avatarImg, fullName }) => {
   return (
      <div className={styles.author}>
         <div className={styles.author__avatar} style={{ backgroundImage: `url(${avatarImg})` }} />
         <div className={styles.author__col}>
            <h4 className={styles.author__name}>{fullName}</h4>
            <h5 className={styles.author__subtitle}>Автор объявления</h5>
         </div>
      </div>
   );
};

export default AuthorInfo;
