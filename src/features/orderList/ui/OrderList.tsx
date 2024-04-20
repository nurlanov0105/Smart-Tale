import React, { FC } from "react";
import { OrderItem } from "@/entities/orderItem";
import { Props } from "../model/types";
import styles from "./styles.module.scss";

const OrderList: FC<Props> = ({ data, itemType, isAdmin }) => {

   return (
      <div className={styles.list}>
         {data?.map((item) => (
             <OrderItem
                 key={item.id}
                 item={item}
                 itemType={itemType}
                 isAdmin={isAdmin}
             />
         ))}
      </div>
   );
};

export default OrderList;
