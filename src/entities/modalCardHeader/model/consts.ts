import { DASHBOARD, MARKETPLACE, ORDERS } from "@/shared/lib";

export const PathData: any = {
   [DASHBOARD.PROFILE]: {
      path: "Личный кабинет/Профиль",
   },
   [DASHBOARD.LISTINGS]: {
      path: "Личный кабинет/Мои объявления",
   },
   [DASHBOARD.PURCHASES]: {
      path: "Личный кабинет/Мои покупки",
   },
   [DASHBOARD.ORDER_HISTORY]: {
      path: "Личный кабинет/История заказов",
   },
   [DASHBOARD.ORGANIZATION]: {
      path: "Личный кабинет/Организация",
   },
   [DASHBOARD.ORDER_DETAIL]: {
      path: "Личный кабинет/Детали объявления",
   },

   [MARKETPLACE.EQUIPMENT]: {
      path: "Маркетплейс/Оборудование",
   },
   [MARKETPLACE.SERVICE]: {
      path: "Маркетплейс/Услуги",
   },
   [MARKETPLACE.CREATE_ORDER]: {
      path: "Маркетплейс/Разместить заказ",
   },

   [ORDERS.CURRENT_ORDERS]: {
      path: "Заказы/Текущие заказы",
   },
   [ORDERS.HISTORY]: {
      path: "Заказы/История",
   },
};
