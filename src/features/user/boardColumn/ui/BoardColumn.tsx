"use client";

import { FC } from "react";
import { BoardCard } from "@/entities/user/boardCard";
import { Droppable } from "@hello-pangea/dnd";
import { boardHeadings } from "@/entities/user/boardCard/model/consts";
import { KanbanOrderProps } from "@/widgets/user/board/model/types";
import styles from "@/features/user/boardColumn/ui/styles.module.scss";
import clsx from "clsx";

interface IProps {
   title: string;
   orders: KanbanOrderProps[];
}
const BoardColumn: FC<IProps> = ({ orders, title }) => {
   const heading = boardHeadings[title];

   return (
      <div className={styles.column}>
         <h4
            className={clsx("h4", styles.column__title)}
            style={{ backgroundColor: heading.color }}>
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
// import clsx from "clsx";
// import styles from "./styles.module.scss";
// import {Droppable} from "@hello-pangea/dnd";
// import {boardHeadings} from "@/entities/user/boardCard/model/consts";
//
// const BoardColumn: FC<ColumnsProps> = ({ orders, id }) => {
//     const heading = boardHeadings[id]
//
//     return (
//       <div className={styles.column}>
//          <h4
//             className={clsx("h4", styles.column__title)}
//             style={{ backgroundColor: heading.color }}>
//             {heading.name}
//          </h4>
//           <Droppable droppableId={id}>
//               {(provided, snapshot) => (
//                   <div
//                       className={clsx(styles.column__content, snapshot.isDraggingOver && styles.column__dragcomplete)}
//                       ref={provided.innerRef}
//                       {...provided.droppableProps}
//                   >
//                       {orders?.map((order, index) => (
//                           <BoardCard
//                               index={index}
//                               order={order}
//                               key={order.id}
//                           />
//                       ))}
//                       {provided.placeholder}
//                   </div>
//               )}
//           </Droppable>
//       </div>
//    );
// };
//
// export default BoardColumn;
