import React, { FC } from "react";
import { showModal } from "@/views/modal";
import Image from "next/image";
import { ChangeImageProps } from "../model/types";
import Link from "next/link";
import { ORGANIZATION_ROUTES, MODAL_KEYS } from "@/shared/lib";
import styles from "./styles.module.scss";
import userIcon from "@@/imgs/form/user.svg";

const ChangeImage: FC<ChangeImageProps> = ({ image, name, isAdmin, disabled, slug }) => {
   const handleAvatarClick = () => {
      if (!disabled) {
         showModal(MODAL_KEYS.changeAvatar);
      }
   };

   return (
      <fieldset className={styles.form__user}>
         <div
            className={styles.form__avatar}
            style={{ backgroundImage: image ? `url(${image})` : "" }}
            onClick={handleAvatarClick}>
            {!image ? <Image src={userIcon} alt="user icon" /> : ""}
         </div>
         <div className={styles.form__userBox}>
            <h3 className={styles.form__name}>{name}</h3>
            {isAdmin ? (
               <Link
                  href={ORGANIZATION_ROUTES.EMPLOYEES_SETTINGS + `/${slug}`}
                  className={styles.form__photoSpan}>
                  Личные данные
               </Link>
            ) : (
               <button onClick={handleAvatarClick} className={styles.form__photoSpan}>
                  Изменить фото профиля
               </button>
            )}
         </div>
      </fieldset>
   );
};

export default ChangeImage;
