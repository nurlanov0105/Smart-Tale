import React, { FC } from "react";
import { OrderItem } from "@/entities/general/orderItem";
import { Props } from "../model/types";
import styles from "./styles.module.scss";

const OrderList: FC<Props> = ({ data, isAdmin }) => {
   return (
      <div className={styles.list}>
         {data?.map((item) => (
            <OrderItem key={item.id} item={item} isAdmin={isAdmin} />
         ))}
      </div>
   );
};

export default OrderList;
