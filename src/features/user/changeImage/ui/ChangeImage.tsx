import React, { FC } from "react";
import { showModal } from "@/views/modal";
import userIcon from "@@/imgs/form/user.svg";
import Image from "next/image";
import { ChangeImageProps } from "../model/types";
import styles from "./styles.module.scss";

const ChangeImage: FC<ChangeImageProps> = ({ image, name }) => {
   const handleAvatarClick = () => {
      showModal("ChangeAvatarModal");
   };

   return (
      <fieldset className={styles.form__user}>
         <div className={styles.form__avatar}>
            <Image src={userIcon} alt="user icon" />
         </div>
         <div className={styles.form__userBox}>
            <h3 className={styles.form__name}>Кирилл Олейников</h3>
            <button onClick={handleAvatarClick} className={styles.form__photoSpan}>
               Изменить фото профиля
            </button>
         </div>
      </fieldset>
   );
};

export default ChangeImage;
