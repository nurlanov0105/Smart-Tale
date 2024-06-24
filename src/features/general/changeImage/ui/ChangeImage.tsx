"use client";

import React, { FC } from "react";
import { showModal } from "@/views/modal";
import Image from "next/image";
import { ChangeImageProps } from "../model/types";
import Link from "next/link";
import { ORGANIZATION_ROUTES, MODAL_KEYS } from "@/shared/lib";
import styles from "./styles.module.scss";
import userIcon from "@@/imgs/form/user.svg";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";
import {useRouter} from "next/navigation";

const ChangeImage: FC<ChangeImageProps> = ({ image, name, isAdmin, disabled, slug }) => {
   const handleAvatarClick = () => {
      if (!disabled) {
         showModal(MODAL_KEYS.changeAvatar);
      }
   };
   const {push} = useRouter()
   const hasAccess = useSubscribeStore(state => state.position.flag_employee_detail_access)
    const handleRoute = () => {
       if (!hasAccess){
           showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noRights})
           return
       }
        push(ORGANIZATION_ROUTES.EMPLOYEES_SETTINGS + `/${slug}`)
    }

   return (
      <fieldset className={styles.form__user}>
         <div
            className={styles.form__avatar}
            style={{
               backgroundImage:
                  image && image?.type
                     ? `url(${URL.createObjectURL(image)})`
                     : !image?.type
                     ? `url(${image})`
                     : "",
            }}
            onClick={handleAvatarClick}>
            {!image ? <Image src={userIcon} alt="user icon" /> : ""}
         </div>
         <div className={styles.form__userBox}>
            <h3 className={styles.form__name}>{name}</h3>
            {isAdmin ? (
               <button
                  onClick={handleRoute}
                  className={styles.form__photoSpan}>
                  Личные данные
               </button>
            ) : (
               <button type="button" onClick={handleAvatarClick} className={styles.form__photoSpan}>
                  Изменить фото профиля
               </button>
            )}
         </div>
      </fieldset>
   );
};

export default ChangeImage;
