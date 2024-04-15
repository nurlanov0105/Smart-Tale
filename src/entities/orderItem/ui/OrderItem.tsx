import React from 'react';
import cardImage from "@@/imgs/order/equipment.png"
import Image from "next/image";
import styles from "./styles.module.scss"

const OrderItem = ({item}: {item: number}) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__left}>
                <Image
                    className={styles.item__image}
                    src={cardImage}
                    alt="card"
                    width={75}
                    height={75}
                />
                <div className={styles.item__info}>
                    <p className={styles.item__subtitle}>Заказ №234</p>
                    <h6 className={styles.item__title}>Сшить костюм</h6>
                    <p className={styles.item__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                </div>
            </div>
            <p className={styles.item__price}>1000 сом</p>
        </div>
    );
};

export default OrderItem;