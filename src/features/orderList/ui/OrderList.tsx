import React from 'react';
import {OrderItem} from "@/entities/orderItem";
import styles from "./styles.module.scss"


const OrderList = () => {
    const list = [1, 2, 3, 4, 5]

    return (
        <div className={styles.list}>
            {
                list.map(item =>
                    <OrderItem
                        key={item}
                        item={item}
                    />
                )
            }
        </div>
    );
};

export default OrderList;