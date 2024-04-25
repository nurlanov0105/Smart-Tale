import { BoardData } from "./consts";
import { create } from "zustand";
import { Order, OrdersActions, OrdersState } from "./types";

export const useOrdersStore = create<OrdersState & OrdersActions>()((set) => ({
   orders: BoardData,
   draggedOrder: null,

   setOrders: (orders: Order[]) =>
      set((state: any) => ({
         orders: [...state.orders, ...orders],
      })),
   dragOrder: (id: number | null) =>
      set({
         draggedOrder: id,
      }),
   updateOrder: (id, status, index) =>
      set((state) => {
         // Находим индекс заказа, который нужно обновить
         const orderIndex = state.orders.findIndex((order) => order.id === id);
         if (orderIndex === -1) return state;

         // Создаем новый массив с обновленным заказом
         const newOrders = state.orders.map((order, index) =>
            index === orderIndex ? { ...order, status, orderIndex } : order
         );

         // Сортируем заказы в соответствии с новым индексом
         newOrders.sort((a, b) => a.orderIndex! - b.orderIndex!);

         // Возвращаем новое состояние
         return { ...state, orders: newOrders };
      }),
}));
