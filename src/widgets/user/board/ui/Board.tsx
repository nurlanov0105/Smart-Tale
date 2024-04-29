"use client";

import { useEffect, useState } from "react";
import { BoardData } from "@/features/user/boardColumn/model/consts";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import type { Columns, KanbanOrderProps } from "../model/types";
import { BoardColumn } from "@/features/user/boardColumn";
import styles from "./styles.module.scss";

const initialColumns = () => {
   const columns: Record<Columns, KanbanOrderProps[]> = {
      new: [],
      process: [],
      checking: [],
      sending: [],
      arrived: [],
   }
   return columns
}
const Board = () => {
   const [columns, setColumns] = useState(initialColumns());


   useEffect(() => {

      const fetchData = async () => {
         try {
            const sortedColumns = BoardData.reduce((acc, order) => {
               acc[order.status as Columns].push(order);
               return acc;
            }, initialColumns());

            setColumns(sortedColumns);

         } catch (error) {
            console.error("Ошибка загрузки данных:", error);
         }
      };

      fetchData();
   }, []);



   const onDragEnd = (result: DropResult) => {
      const { destination, source } = result;

      if (!destination) {
         return;
      }

      if (destination.droppableId === source.droppableId) {
         const column = [...columns[source.droppableId as Columns]];
         const movedOrder = column.splice(source.index, 1)[0]; // Удаляем перемещаемый заказ из исходной колонки
         column.splice(destination.index, 0, movedOrder); // Вставляем его на новую позицию
         setColumns((prevColumns) => ({
            ...prevColumns,
            [source.droppableId]: column,
         }));
         return;
      }
      if (destination.droppableId === "arrived" && source.droppableId !== "sending"){
         alert("Сначало нужно сделать отправку!")
         return;
      }

      // Получаем информацию о перемещаемом заказе
      const movedOrder = columns[source.droppableId as Columns][source.index];

      // Удаляем перемещаемый заказ из исходной колонки
      const updatedSourceColumn = [...columns[source.droppableId as Columns]];
      updatedSourceColumn.splice(source.index, 1);

      // Изменяем статус перемещаемого заказа
      const updatedMovedOrder = {
         ...movedOrder,
         status: destination.droppableId, // Устанавливаем новый статус
      };

      // Добавляем перемещаемый заказ с обновленным статусом в целевую колонку
      const updatedDestinationColumn = [...columns[destination.droppableId as Columns]];
      updatedDestinationColumn.splice(destination.index, 0, updatedMovedOrder);


      if (destination.droppableId === source.droppableId && destination.index === source.index) {
         return;
      }


      // Обновляем состояние колонок
      setColumns((prevColumns) => ({
         ...prevColumns,
         [source.droppableId]: updatedSourceColumn,
         [destination.droppableId]: updatedDestinationColumn,
      }));
   };



   return (
       <DragDropContext onDragEnd={onDragEnd}>
          <div className={styles.board}>
             <div className={styles.board__inner}>
                <BoardColumn orders={columns.new} title="new" />
                <BoardColumn orders={columns.process} title="process" />
                <BoardColumn orders={columns.checking} title="checking" />
                <BoardColumn orders={columns.sending} title="sending" />
                <BoardColumn orders={columns.arrived} title="arrived" />
             </div>
          </div>
       </DragDropContext>
   )
};

export default Board;



//
// "use client"
// import {useState} from "react";
// import {DragDropContext, DropResult} from "@hello-pangea/dnd";
// import {newOrdersList, checkOrdersList, completedOrdersList, postOrdersList, processOrdersList} from "@/features/user/boardColumn/model/consts";

// import { useEffect, useState } from "react";
// import { BoardData } from "@/features/user/boardColumn/model/consts";
// import { DragDropContext, DropResult } from "@hello-pangea/dnd";
// import type { Columns, KanbanOrderProps } from "../model/types";

// import { BoardColumn } from "@/features/user/boardColumn";
// import {KanbanOrderProps} from "../model/types";
// import styles from "./styles.module.scss";
//
//
//
// const Board = () => {
//
//    const [newOrders, setNewOrders] = useState<KanbanOrderProps[]>(newOrdersList);
//    const [processOrders, setProcessOrders] = useState<KanbanOrderProps[]>(processOrdersList);
//    const [checkOrders, setCheckOrders] = useState<KanbanOrderProps[]>(checkOrdersList);
//    const [postOrders, setPostOrders] = useState<KanbanOrderProps[]>(postOrdersList);
//    const [completedOrders, setCompletedOrders] = useState<KanbanOrderProps[]>(completedOrdersList);
//
//    const onDragEnd = (result: DropResult) => {
//       const { destination, source } = result;
//
//       // console.log(result);
//
//       if (!destination) {
//          return;
//       }
//
//       if (
//           destination.droppableId === source.droppableId &&
//           destination.index === source.index
//       ) {
//          return;
//       }
//
//       let add;
//       let ordersNew = newOrders
//       let ordersProcess = processOrders;
//       let ordersCheck = checkOrders;
//       let ordersPost = postOrders;
//       let ordersCompleted = completedOrders;
//
//
//       // Source Logic
//       switch (source.droppableId) {
//          case "new":
//             add = ordersNew[source.index];
//             ordersNew.splice(source.index, 1)
//             break;
//          case "process":
//             add = ordersProcess[source.index];
//             ordersProcess.splice(source.index, 1)
//             break;
//          case "checking":
//             add = ordersCheck[source.index];
//             ordersCheck.splice(source.index, 1)
//             break;
//          case "sending":
//             add = ordersPost[source.index];
//             ordersPost.splice(source.index, 1)
//             break;
//
//          default: {
//             add = ordersCompleted[source.index];
//             ordersCompleted.splice(source.index, 1)
//          }
//       }
//
//       // Destination Logic
//       switch (destination.droppableId) {
//          case "new":
//             ordersNew.splice(destination.index, 0, add);
//             break;
//          case "process":
//             ordersProcess.splice(destination.index, 0, add);
//             break;
//          case "checking":
//             ordersCheck.splice(destination.index, 0, add);
//             break;
//          case "sending":
//             ordersPost.splice(destination.index, 0, add);
//             break;
//          case "completed":
//             ordersCompleted.splice(destination.index, 0, add);
//             break;
//       }
//
//       setNewOrders(ordersNew);
//       setProcessOrders(ordersProcess);
//       setCheckOrders(ordersCheck);
//       setPostOrders(ordersPost);
//       setCompletedOrders(ordersCompleted);
//    }
//
//
//    return (
//        <DragDropContext onDragEnd={onDragEnd}>
//           <div className={styles.board}>
//              <div className={styles.board__inner}>
//                 <BoardColumn orders={newOrders} setOrders={setNewOrders} id="new"/>
//                 <BoardColumn orders={processOrders} setOrders={setProcessOrders} id="process"/>
//                 <BoardColumn orders={checkOrders} setOrders={setCheckOrders} id="checking"/>
//                 <BoardColumn orders={postOrders} setOrders={setPostOrders} id="sending"/>
//                 <BoardColumn orders={completedOrders} setOrders={setCompletedOrders} id="arrived"/>
//              </div>
//           </div>
//        </DragDropContext>
//    );
// };
//
// export default Board;

