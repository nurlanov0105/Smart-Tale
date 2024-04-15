import { DASHBOARD, MARKETPLACE, ORDERS } from "@/shared/lib";

export const PathData: any = {
   [DASHBOARD.PROFILE]: {
      path: "Личный кабинет/Профиль",
      name: "Ваш профиль",
   },
   [DASHBOARD.LISTINGS]: {
      path: "Личный кабинет/Мои объявления",
      name: "Мои объявления",
   },
   [DASHBOARD.PURCHASES]: {
      path: "Личный кабинет/Мои покупки",
      name: "Мои покупки",
   },
   [DASHBOARD.ORDER_HISTORY]: {
      path: "Личный кабинет/История заказов",
      name: "История заказов",
   },
   [DASHBOARD.ORGANIZATION]: {
      path: "Личный кабинет/Организация",
      name: "Организация",
   },

   [MARKETPLACE.EQUIPMENT]: {
      path: "Маркетплейс/Оборудование",
      name: "Оборудование",
   },
   [MARKETPLACE.SERVICE]: {
      path: "Маркетплейс/Услуги",
      name: "Услуги",
   },
   [MARKETPLACE.ORDER]: {
      path: "Маркетплейс/Разместить заказ",
      name: "Разместить заказ",
   },

   [ORDERS.CURRENT_ORDERS]: {
      path: "Заказы/Текущие заказы",
      name: "Текущие заказы",
   },
   [ORDERS.HISTORY]: {
      path: "Заказы/История",
      name: "История",
   },
};
