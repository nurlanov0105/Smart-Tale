import { ADMIN_ROUTES, DASHBOARD, MARKETPLACE, ORDERS, ROUTES } from "@/shared/lib";

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
   [MARKETPLACE.SERVICES]: {
      path: "Маркетплейс/Услуги",
      name: "Услуги",
   },
   [MARKETPLACE.CREATE_ORDER]: {
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

   [ROUTES.ORDER_DETAILS]: {
      path: "Маркетплейс/Детали объявления",
      name: "Детали объявления",
   },

   [ROUTES.CARD_DETAILS]: {
      path: "Маркетплейс/Детали объявления",
      name: "Детали объявления",
   },

   [ADMIN_ROUTES.ORGANIZATION]: {
      path: "SmartTale",
      name: "Организация",
   },
   [ADMIN_ROUTES.CREATE_ORGANIZATION]: {
      path: "SmartTale",
      name: "Организация",
   },
   [ADMIN_ROUTES.EMPLOYEES]: {
      path: "SmartTale",
      name: "Сотрудники",
   },
   [ADMIN_ROUTES.INVITE_EMPLOYEES]: {
      path: "SmartTale",
      name: "Сотрудники",
   },
   [ADMIN_ROUTES.POSITIONS]: {
      path: "SmartTale",
      name: "Должности",
   },
   [ADMIN_ROUTES.ADD_POSITION]: {
      path: "SmartTale",
      name: "Должности",
   },
   [ADMIN_ROUTES.HISTORY]: {
      path: "SmartTale",
      name: "История",
   },
};
