"use client";

import { FC } from "react";
import { BoardCard, Order, useOrdersStore } from "@/entities/user/boardCard";
import { BoardColumnProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";

const BoardColumn: FC<BoardColumnProps> = ({ heading }) => {
   const orders = useOrdersStore((state) => state.orders);

   const filteredOrders = orders.filter((order: Order) => order.status === heading.status);

   const updateOrder = useOrdersStore((state) => state.updateOrder);
   const draggedOrder = useOrdersStore((state) => state.draggedOrder);
   const dragOrder = useOrdersStore((state) => state.dragOrder);

   const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
      if (!draggedOrder) return;
      updateOrder(draggedOrder, heading.status, index);
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
            onDrop={(e) => handleDrop(e, orders.length)}
            onDragOver={(e) => e.preventDefault()}>
            {filteredOrders.map((order: Order) => (
               <BoardCard key={order.id} order={order} />
            ))}
         </div>
      </div>
   );
};

export default BoardColumn;
