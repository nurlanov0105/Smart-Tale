"use client";

import { useEffect, useState } from "react";
import { BoardData } from "@/features/user/boardColumn/model/consts";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import type { Columns, KanbanOrderProps } from "../model/types";
import { BoardColumn } from "@/features/user/boardColumn";
import { testDestinationMap, COLUMN_VALUES } from "../model/helper";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";

const initialColumns = () => {
   const columns: Record<Columns, KanbanOrderProps[]> = {
      pending: [],
      process: [],
      checking: [],
      sending: [],
      arrived: [],
   };
   return columns;
};
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

      const sourceId = testDestinationMap[source.droppableId];

      if (!sourceId[destination.droppableId]) {
         toast.warning(sourceId.alert);
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
               <BoardColumn orders={columns.pending} title={COLUMN_VALUES.PENDING} />
               <BoardColumn orders={columns.process} title={COLUMN_VALUES.PROCESS} />
               <BoardColumn orders={columns.checking} title={COLUMN_VALUES.CHECKING} />
               <BoardColumn orders={columns.sending} title={COLUMN_VALUES.SENDING} />
               <BoardColumn orders={columns.arrived} title={COLUMN_VALUES.ARRIVED} />
            </div>
         </div>
      </DragDropContext>
   );
};

export default Board;
