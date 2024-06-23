import { FC } from "react";
import { AuthorInfoProps } from "../model/types";
import styles from "./styles.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { ROUTES } from "@/shared/lib";
import { closeModal } from "@/views/modal";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";
import { useRouter } from "next/navigation";

const AuthorInfo: FC<AuthorInfoProps> = ({ avatarImg, fullName, isLarge, isChat, slug }) => {
   const currentUser = useSubscribeStore((state) => state.data);
   const router = useRouter();

   const handleClick = () => {
      closeModal();
      router.push(ROUTES.USERS + `/${slug}`);
      // if (currentUser?.profile.slug === slug) {
      //    return router.push(ROUTES.DASHBOARD_PROFILE);
      // } else {
      //    router.push(ROUTES.USERS + `/${slug}`);
      // }
   };

   return (
      <button
         className={clsx(styles.author, isLarge ? styles.author_large : "")}
         onClick={handleClick}>
         <div
            className={styles.author__avatar}
            style={{ backgroundImage: `url(${avatarImg ? avatarImg : ""})` }}
         />
         <div className={styles.author__col}>
            <h4 className={styles.author__name}>{fullName}</h4>
            <h5 className={styles.author__subtitle}>
               <span>Автор объявления</span>
            </h5>
         </div>
      </button>
   );
};

export default AuthorInfo;
