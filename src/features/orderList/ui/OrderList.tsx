import React from 'react';
import styles from "./styles.module.scss"
import {OrderItem} from "@/entities/orderItem";


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