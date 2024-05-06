"use client";

import { FC } from "react";
import { Droppable } from "@hello-pangea/dnd";
import { BoardCard } from "@/entities/user/boardCard";

import { KanbanOrderProps } from "@/widgets/user/board";
import { boardHeadings } from "../model/consts";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/themeStore";

interface IProps {
   title: string;
   orders: KanbanOrderProps[];
}
const BoardColumn: FC<IProps> = ({ orders, title }) => {
   const theme = useThemeStore((state) => state.theme);
   const heading = boardHeadings[title];


   return (
      <div className={clsx(styles.column, styles[theme])}>
         <h4
            className={clsx("h4", styles.column__title)}
            style={{ backgroundColor: heading[theme]}}>
            {heading.name}
         </h4>
         <Droppable droppableId={title.toLowerCase()}>
            {(provided) => (
               <div
                  className={styles.column__content}
                  ref={provided.innerRef}
                  {...provided.droppableProps}>
                  {orders.map((order: any, index: number) => (
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

// "use client";
//
// import { FC } from "react";
//
// import { BoardCard, Order } from "@/entities/user/boardCard";
// import {ColumnsProps} from "../model/types";
//
// import {boardHeadings} from "@/features/user/boardColumn/model/consts";
// import {Droppable} from "@hello-pangea/dnd";
// import clsx from "clsx";
// import styles from "./styles.module.scss";
//
// const BoardColumn: FC<ColumnsProps> = ({ orders, id }) => {
//     const heading = boardHeadings[id]
//
//     return (
//         <div className={styles.column}>
//             <h4
//                 className={clsx("h4", styles.column__title)}
//                 style={{ backgroundColor: heading.color }}>
//                 {heading.name}
//             </h4>
//             <Droppable droppableId={id}>
//                 {(provided, snapshot) => (
//                     <div
//                         className={clsx(styles.column__content, snapshot.isDraggingOver && styles.column__dragcomplete)}
//                         ref={provided.innerRef}
//                         {...provided.droppableProps}
//                     >
//                         {orders?.map((order, index) => (
//                             <BoardCard
//                                 index={index}
//                                 order={order}
//                                 key={order.id}
//                             />
//                         ))}
//                         {provided.placeholder}
//                     </div>
//                 )}
//             </Droppable>
//         </div>
//     );
// };
//
// export default BoardColumn;
