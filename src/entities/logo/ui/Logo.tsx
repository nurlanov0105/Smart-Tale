import React from 'react';
import logo from "@@/logo.svg"
import Image from "next/image";
import styles from "./styles.module.scss"

const Logo = () => {
    return (
        <div className={styles.logo}>
            <button>
                <Image
                    className={styles.logo__image}
                    src={logo}
                    alt="logo"
                    width={60}
                    height={60}
                    priority
                />
            </button>
            <h1 className={styles.logo__title}>SmartTale</h1>
            <p className={styles.logo__text}>Мониторинг и управление <br/> швейным производством</p>
        </div>
    );
};

export default Logo;