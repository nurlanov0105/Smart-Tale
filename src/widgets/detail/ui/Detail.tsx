import React from 'react';
import image from "@@/imgs/order/equipment.png"
import Image from "next/image";
import styles from "./styles.module.scss"

const Detail = () => {
    return (
        <div className={styles.detail}>
            <div className={styles.detail__left}>
                <Image priority={true} className={styles.detail__image} src={image} width={310} height={302} alt="detailImage"/>
            </div>
            <div className={styles.detail__right}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium aut autem commodi consequuntur corporis deserunt doloribus eaque est eveniet excepturi harum ipsum itaque laudantium minus nisi officia possimus quas recusandae rem repellendus temporibus ullam voluptatibus. Aliquid laudantium officiis voluptatum?
            </div>

        </div>
    );
};

export default Detail;