import React, {FC} from 'react';
import {AuthButtonProps} from "@/entities/typeAuthButton";
import {ROUTES} from "@/shared/lib";
import Link from "next/link";
import styles from "./styles.module.scss"

const TypeAuthButton: FC<AuthButtonProps> = ({type}) => {

    return (
        <div className={styles.button}>
            {
                type === "login" && <>
                    <p className={styles.button__text}>Еще не зарегистрированы?</p>
                    <Link href={ROUTES.SIGN_UP} className={styles.button__button}>Зарегистрироваться</Link>
                </>
            }
            {
                type === "register" && <>
                    <p className={styles.button__text}>Уже зарегистрированы?</p>
                    <Link href={ROUTES.SIGN_IN} className={styles.button__button}>Войти</Link>
                </>
            }
        </div>
    );
};

export default TypeAuthButton;