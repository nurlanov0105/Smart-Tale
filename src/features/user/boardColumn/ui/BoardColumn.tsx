"use client";

import { FC } from "react";
import { Droppable } from "@hello-pangea/dnd";
import { BoardCard } from "@/entities/user/boardCard";

import { KanbanOrderProps } from "@/widgets/user/board";
import { boardHeadings } from "../model/consts";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";

interface IProps {
   title: string;
   orders: KanbanOrderProps[] | undefined
}
const BoardColumn: FC<IProps> = ({ orders, title }) => {
   const theme = useThemeStore((state) => state.theme);
   const heading = boardHeadings[title];

   return (
      <div className={clsx(styles.column, styles[theme])}>
         <h4
            className={clsx("h4", styles.column__title)}
             style={{ backgroundColor: heading[theme]}}
             >
            {heading.name}
         </h4>
         <Droppable droppableId={title}>
            {(provided) => (
               <div
                  className={styles.column__content}
                  ref={provided.innerRef}
                  {...provided.droppableProps}>
                  {orders?.map((order: any, index: number) => (
                     <BoardCard key={order.id} order={order} index={index} />
                  ))}
                  {provided.placeholder}
               </div>
            )}
         </Droppable>
      </div>
   );
};

export default BoardColumn;

