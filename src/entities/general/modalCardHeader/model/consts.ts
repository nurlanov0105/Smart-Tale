import { ORGANIZATION_ROUTES, DASHBOARD, MARKETPLACE, ROUTES } from "@/shared/lib";

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
   [MARKETPLACE.ORDERS]: {
      path: "Маркетплейс/Заказы",
      name: "Заказы",
   },
   [MARKETPLACE.SERVICES]: {
      path: "Маркетплейс/Услуги",
      name: "Услуги",
   },
   [MARKETPLACE.CREATE_ORDER]: {
      path: "Маркетплейс/Разместить заказ",
      name: "Разместить заказ",
   },

   [ROUTES.ANNOUNCEMENT_DETAILS_ORDER]: {
      path: "Мои объявления/Детали заказа",
      name: "Детали заказа",
   },
   [ROUTES.ANNOUNCEMENT_DETAILS_EQUIPMENT]: {
      path: "Мои объявления/Детали оборудования",
      name: "Детали оборудования",
   },
   [ROUTES.ANNOUNCEMENT_DETAILS_SERVICE]: {
      path: "Мои объявления/Детали услуги",
      name: "Детали услуги",
   },

   [ROUTES.CARD_DETAILS_ORDER]: {
      path: "Маркетплейс/Детали заказа",
      name: "Детали заказа",
   },
   [ROUTES.CARD_DETAILS_EQUIPMENT]: {
      path: "Маркетплейс/Детали оборудования",
      name: "Детали оборудования",
   },
   [ROUTES.CARD_DETAILS_SERVICE]: {
      path: "Маркетплейс/Детали услуги",
      name: "Детали услуги",
   },

   [ORGANIZATION_ROUTES.CURRENT_ORDERS]: {
      path: "Организация/Текущие заказы",
      name: "Текущие заказы",
   },

   [ORGANIZATION_ROUTES.ORGANIZATION_LIST]: {
      path: "Организация/Список организаций",
      name: "Список организаций",
   },
   [ORGANIZATION_ROUTES.CREATE_ORGANIZATION]: {
      path: "Организация/Создание организации",
      name: "Организация",
   },
   [ORGANIZATION_ROUTES.EMPLOYEES]: {
      path: "SmartTale",
      name: "Сотрудники",
   },
   [ORGANIZATION_ROUTES.INVITE_EMPLOYEES]: {
      path: "SmartTale",
      name: "Сотрудники",
   },
   [ORGANIZATION_ROUTES.POSITIONS]: {
      path: "SmartTale",
      name: "Должности",
   },
   [ORGANIZATION_ROUTES.ADD_POSITION]: {
      path: "SmartTale",
      name: "Должности",
   },
   [ORGANIZATION_ROUTES.HISTORY]: {
      path: "SmartTale",
      name: "История",
   },
};
