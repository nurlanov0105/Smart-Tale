import type { Status } from "@/entities/user/boardCard";
import {Dispatch, SetStateAction} from "react";
import {KanbanOrderProps} from "@/widgets/user/board/model/types";

export type Heading = {
   id: number;
   name: string;
   status: Status;
   color: string;
};

interface ITodos{
   id: number
   title: string
   color: string
}

export type ColumnsProps = {
   id: string
   orders: KanbanOrderProps[]
   setOrders: Dispatch<SetStateAction<KanbanOrderProps[]>>
};
