"use client";

import { useState } from "react";
// import { DragDropContext } from "react-beautiful-dnd";
import { BoardColumn } from "@/features/boardColumn";
import { BoardData } from "../model/data";
// import { onDragEnd } from "@/shared/lib";
import styles from "./styles.module.scss";

const Board = () => {
   const [columns, setColumns] = useState<any>(BoardData);

   return (
      // <DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}>
      <div className={styles.board}>
         {Object.entries(columns).map(([columnId, column]: any) => (
            <BoardColumn key={columnId} column={column} columnId={columnId} />
         ))}
      </div>
      // </DragDropContext>
   );
};

export default Board;
