"use client";

import {useCallback, useEffect, useState} from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { toast } from "react-toastify";
import type { Columns } from "../model/types";
import { BoardColumn } from "@/features/user/boardColumn";
import { testDestinationMap, COLUMN_VALUES } from "../model/helper";
import { useGetOrganizationOrders, useUpdateStatusOrder } from "../model/useQueries";
import styles from "./styles.module.scss";
import {GlobalLoading} from "@/shared/ui";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";
import {MODAL_KEYS, RIGHT_ACTIONS} from "@/shared/lib/constants/consts";
import {showModal} from "@/views/modal";
import { getMessaging, onMessage } from "firebase/messaging";
import { CookiesServices, EnumTokens } from "@/shared/lib";


const Board = () => {
   const { data, isSuccess, isError, isLoading } = useGetOrganizationOrders();

   const updateStatus = useUpdateStatusOrder()
    const position = useSubscribeStore(state => state.position)

   const [columns, setColumns] = useState(data);

   const areArrayEmpty = useCallback(() => {
      if (data && isSuccess){
          for (const key in data){
              if ((data as any)[key]?.length){
                  return true
              }
          }
          return false
      }// eslint-disable-next-line
   },[data])

   useEffect(() => {
      if (isSuccess && data) {
          setColumns(data)
          if (!areArrayEmpty()) {
              showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noOrganizationOrders})
          }

      }
      // eslint-disable-next-line
   }, [isSuccess, updateStatus.isError]);

   const onDragEnd = (result: DropResult) => {
      const { destination, source } = result;

      if (!destination) {
         return;
      }
     if (!columns) return;

     if (!position[RIGHT_ACTIONS.UPDATE_ORDER]){
         showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noRights})
         return;
     }

      // Получаем информацию о перемещаемом заказе
      const movedOrder = columns[source.droppableId as Columns][source.index];

      if (destination.droppableId === source.droppableId) {
         const column = [...columns[source.droppableId as Columns]];
         const movedOrder = column.splice(source.index, 1)[0]; // Удаляем перемещаемый заказ из исходной колонки
         column.splice(destination.index, 0, movedOrder); // Вставляем его на новую позицию
         setColumns((prevColumns) => {
            if (!prevColumns) return;

            return {
               ...prevColumns,
               [source.droppableId]: column,
            };
         });

         return;
      }

      if (updateStatus.isPending) {
         toast.warning("Пожалуйста, подождите пока сервер обработает предыдущий запрос");
         return;
      }

      const sourceId = testDestinationMap[source.droppableId];

      if (!sourceId[destination.droppableId]) {
         toast.warning(sourceId.alert);
         return;
      }

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

      updateStatus.mutate({ orderSlug: movedOrder.slug, status: destination.droppableId });

      const fcm_token = localStorage.getItem("fcm_token");
      console.log("fcm_token", fcm_token);

      fetch("https://fcm.googleapis.com/v1/projects/smarttale-eb313/messages:send", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer dcbed192dc7d8ea6481203e4d6ff10a0495c143e`,
         },
         body: JSON.stringify({
            body: JSON.stringify({
               to: fcm_token,
               priority: "high",
               notification: {
                  title: "Надеюсь работает",
                  body: "Даааа работаеттт!!",
               },
            }),
         }),
      });

      // Обновляем состояние колонок
      setColumns((prevColumns) => {
         if (!prevColumns) return;

         return {
            ...prevColumns,
            [source.droppableId]: updatedSourceColumn,
            [destination.droppableId]: updatedDestinationColumn,
         };
      });
   };

   if (isLoading) return <GlobalLoading type="full" />;
   if (isError) return <h3 className="h3">Упс, произошла ошибка при получении данных</h3>;

   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <div className={styles.board}>
            <div className={styles.board__inner}>
               <BoardColumn orders={columns?.Waiting} title={COLUMN_VALUES.PENDING} />
               <BoardColumn orders={columns?.Process} title={COLUMN_VALUES.PROCESS} />
               <BoardColumn orders={columns?.Checking} title={COLUMN_VALUES.CHECKING} />
               <BoardColumn orders={columns?.Sending} title={COLUMN_VALUES.SENDING} />
               <BoardColumn orders={columns?.Arrived} title={COLUMN_VALUES.ARRIVED} />
            </div>
         </div>
      </DragDropContext>
   );
};

export default Board;
