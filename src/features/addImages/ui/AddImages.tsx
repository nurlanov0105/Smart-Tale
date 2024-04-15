import React from 'react';
import image from "@@/imgs/order/equipment.png"
import styles from "./styles.module.scss"
import Image from "next/image";
import { CircleX, LoaderCircle } from 'lucide-react';
import clsx from "clsx";

const AddImages = () => {
    return (
        <div className={styles.list}>
            <div className={styles.item}>
                <Image
                    className={styles.item__image}
                    src={image}
                    alt="equipment"
                />
                <button className={styles.item__icon}>
                    <CircleX/>
                </button>
            </div>
            <div className={styles.item}>
                <Image
                    className={styles.item__image}
                    src={image}
                    alt="equipment"
                />
                <button className={styles.item__icon}>
                    <CircleX/>
                </button>
            </div>
            <div className={styles.item}>
                <Image
                    className={styles.item__image}
                    src={image}
                    alt="equipment"
                />
                <button className={styles.item__icon}>
                    <CircleX/>
                </button>
            </div>

            <div className={styles.empty}>
                <span className="loader"><LoaderCircle/></span>
            </div>
            <div className={styles.empty}>
                <div className={styles.empty__text}>+ Добавить
                    файл</div>
            </div>


        </div>
    );
};

export default AddImages;