// import { BoardData } from "./consts";
// import { create } from "zustand";
// import { Order, OrdersActions, OrdersState } from "./types";
//
// export const useOrdersStore = create<OrdersState & OrdersActions>()((set) => ({
//    orders: BoardData,
//    draggedOrder: null,
//
//    addOrders: (orders: Order[]) =>
//       set((state: any) => ({
//          orders: [...state.orders, ...orders],
//       })),
//    dragOrder: (id: number | null) =>
//       set({
//          draggedOrder: id,
//       }),
//    updateOrder: (id: number, status: string) =>
//       set((state: any) => ({
//          orders: state.orders.map((order: any) => (order.id === id ? { ...order, status } : order)),
//       })),
// }));
