import React, {FC} from 'react';
import {showModal} from "@/widgets/modal";
import userIcon from "@@/imgs/form/user.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import {ChangeImageProps} from "@/features/changeImage/model/types";

const ChangeImage:FC<ChangeImageProps> = ({image, name}) => {
    const handleAvatarClick = () => {
        showModal("ChangeAvatarModal");
    }

    return (
        <fieldset className={styles.form__user}>
            <div className={styles.form__avatar}>
                <Image src={userIcon} alt="user icon"/>
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