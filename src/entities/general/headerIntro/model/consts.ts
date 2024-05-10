import { ADMIN_ROUTES, DASHBOARD, MARKETPLACE, ORDERS, ROUTES } from "@/shared/lib";
import { WORK } from "@/shared/lib/routes.config";

export const PathData: any = {
   ["/orders/search"]: {
      path: "SmartTale",
      name: "Поиск",
   },
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
   [DASHBOARD.FAVORITES]: {
      path: "Личный кабинет/Избранные",
      name: "Избранные",
   },

   [MARKETPLACE.EQUIPMENT]: {
      path: "Маркетплейс/Оборудование",
      name: "Оборудование",
   },
   [MARKETPLACE.SERVICE]: {
      path: "Маркетплейс/Услуги",
      name: "Услуги",
   },
   [MARKETPLACE.CREATE_ORDER]: {
      path: "Маркетплейс/Разместить объявление",
      name: "Разместить объявление",
   },
   [WORK.VACANCIES]: {
      path: "Работа/Вакансии",
      name: "Вакансии",
   },
   [WORK.RESUME]: {
      path: "Работа/Резюме",
      name: "Резюме",
   },
   [WORK.CREATE_VACANCY]: {
      path: "Работа/Добавить Вакансию",
      name: "Добавить Вакансию",
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
   [ROUTES.NOTICES]: {
      path: "Личный кабинет/Уведомления",
      name: "Уведомления",
   },
   [ROUTES.USERS]: {
      path: "SmartTale",
      name: "Пользователь",
   },

   [ADMIN_ROUTES.ORGANIZATION]: {
      path: "SmartTale",
      name: "Организация",
   },
   [ADMIN_ROUTES.CREATE_ORGANIZATION]: {
      path: "SmartTale",
      name: "Организация",
   },
   [ADMIN_ROUTES.ORGANIZATION_DETAILS]: {
      path: "SmartTale",
      name: "Организация",
   },
   [ADMIN_ROUTES.EMPLOYEES]: {
      path: "SmartTale",
      name: "Сотрудники",
   },
   [ADMIN_ROUTES.EMPLOYEES_DETAILS]: {
      path: "SmartTale",
      name: "Детали сотрудника",
   },
   [ADMIN_ROUTES.EMPLOYEES_SETTINGS]: {
      path: "SmartTale",
      name: "Личные данные",
   },
   [ADMIN_ROUTES.INVITE_EMPLOYEES]: {
      path: "SmartTale",
      name: "Сотрудники",
   },

   [ADMIN_ROUTES.POSITIONS]: {
      path: "SmartTale",
      name: "Должность",
   },
   [ADMIN_ROUTES.ADD_POSITION]: {
      path: "SmartTale",
      name: "Должность",
   },
   [ADMIN_ROUTES.HISTORY]: {
      path: "SmartTale",
      name: "История",
   },

   [ROUTES.SUBSCRIBE]: {
      path: "Личный кабинет/Подписка",
      name: "Подписка",
   },
   [ROUTES.STRIPE_PAYMENT]: {
      path: "SmartTale/Оплата",
      name: "Оплата",
   },
};
