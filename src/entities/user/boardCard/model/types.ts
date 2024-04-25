export type Status = "New" | "Process" | "Checking" | "Sending" | "Arrived";
export type Name = "Новые" | "В работе" | "Проверка" | "Отправка" | "Прибыл";

export type CardProps = {
   order: Order;
   board?: any;
};

export type Order = {
   id: number;
   title: string;
   description?: string;
   date: string;
   status: Status;
   orderIndex: number;
};

export type OrdersState = {
   orders: Order[];
   draggedOrder: number | null;
};

export type OrdersActions = {
   setOrders: (orders: Order[]) => void;
   dragOrder: (id: number | null) => void;
   updateOrder: (id: number, status: Status, index: number) => void;
};

export type BoardType = {
   id: number;
   name: string;
   status: Status;
   color: string;
   items: Order[];
};

export type BoardHeadingType = {
   id: number;
   name: Name;
   status: Status;
   color: string;
};
