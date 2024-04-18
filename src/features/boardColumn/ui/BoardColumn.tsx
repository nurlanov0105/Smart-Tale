import { FC } from "react";
// import { Draggable, Droppable } from "react-beautiful-dnd";
import { BoardCard } from "@/entities/boardCard";
import clsx from "clsx";
import styles from "./styles.module.scss";

const BoardColumn: FC<any> = ({ columnId, column }) => {
   return (
      // <Droppable droppableId={columnId}>
      // {(provided: any) => (
      // ref={provided.innerRef} {...provided.droppableProps}
      <div className={styles.column}>
         <h4 className={clsx("h4", styles.column__title)} style={{ backgroundColor: column.color }}>
            {column.name}
         </h4>
         <div className={styles.column__content}>
            {column.items.map((order: any, index: number) => (
               // <Draggable key={order.id} draggableId={order.id.toString()} index={index}>
               //    {(provided: any) => <BoardCard order={order} provided={provided} />}
               // </Draggable>
               <BoardCard key={order.id} order={order} />
            ))}
            {/* {provided.placeholder} */}
         </div>
      </div>
      // )}
      // </Droppable>
   );
};

export default BoardColumn;
