"use client";

import { FC, useMemo } from "react";
import { useOrdersStore } from "@/entities/user/boardCard";

import { BoardCard, Order } from "@/entities/user/boardCard";
import { HeadingProps } from "../model/types";

import clsx from "clsx";
import styles from "./styles.module.scss";

const BoardColumn: FC<HeadingProps> = ({ heading }) => {
   const orders = useOrdersStore((state) => state.orders);

   const filteredOrders = useMemo(
      () => orders.filter((order: Order) => order.status === heading.status),
      [orders, heading.status]
   );

   const updateOrder = useOrdersStore((state) => state.updateOrder);
   const draggedOrder = useOrdersStore((state) => state.draggedOrder);
   const dragOrder = useOrdersStore((state) => state.dragOrder);

   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      if (!draggedOrder) return;
      updateOrder(draggedOrder, heading.status);
      dragOrder(null);
   };

   return (
      <div className={styles.column}>
         <h4
            className={clsx("h4", styles.column__title)}
            style={{ backgroundColor: heading.color }}>
            {heading.name}
         </h4>
         <div
            className={styles.column__content}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}>
            {filteredOrders.map((order: Order) => (
               <BoardCard key={order.id} order={order} />
            ))}
         </div>
      </div>
   );
};

export default BoardColumn;
