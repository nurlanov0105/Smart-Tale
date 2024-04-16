import React, { FC } from "react";
import { OrderItem } from "@/entities/orderItem";
import styles from "./styles.module.scss";
import { Props } from "../model/types";

const OrderList: FC<Props> = ({ data, itemType, isDetail, type }) => {
   const filteredData = data.filter((item) => item.type === type);

   return (
      <div className={styles.list}>
         {type
            ? type === "all"
               ? data?.map((item) => (
                    <OrderItem key={item.id} {...item} itemType={itemType} isDetail={isDetail} />
                 ))
               : filteredData?.map((item) => (
                    <OrderItem key={item.id} {...item} itemType={itemType} isDetail={isDetail} />
                 ))
            : data?.map((item) => (
                 <OrderItem key={item.id} {...item} itemType={itemType} isDetail={isDetail} />
              ))}
      </div>
   );
};

export default OrderList;
