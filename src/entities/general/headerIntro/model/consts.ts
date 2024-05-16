import { ORGANIZATION_ROUTES, DASHBOARD, MARKETPLACE, ROUTES } from "@/shared/lib";
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
   [MARKETPLACE.SERVICES]: {
      path: "Маркетплейс/Услуги",
      name: "Услуги",
   },
   [MARKETPLACE.ORDERS]: {
      path: "Маркетплейс/Заказы",
      name: "Заказы",
   },

   [MARKETPLACE.CREATE_ANNOUNCEMENT]: {
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
   [WORK.VACANCY_DETAIL]: {
      path: "Работа/Детали вакансии",
      name: "Детали вакансии",
   },

   [ROUTES.ORDER_DETAILS]: {
      path: "Маркетплейс/Детали объявления",
      name: "Детали объявления",
   },
   [ROUTES.ANNOUNCEMENT_DETAILS_ORDER]: {
      path: "Мои объявления/Детали объявления",
      name: "Детали объявления",
   },
   [ROUTES.ANNOUNCEMENT_DETAILS_EQUIPMENT]: {
      path: "Мои объявления/Детали объявления",
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

   [ORGANIZATION_ROUTES.CURRENT_ORDERS]: {
      path: "Организация/Текущие заказы",
      name: "Текущие заказы",
   },
   [ORGANIZATION_ROUTES.HISTORY_USER]: {
      path: "Организация/История",
      name: "История",
   },

   [ORGANIZATION_ROUTES.ORGANIZATION_LIST]: {
      path: "Организация/Список организаций",
      name: "Список организаций",
   },
   [ORGANIZATION_ROUTES.CREATE_ORGANIZATION]: {
      path: "Организация/Создание организации",
      name: "Создание организации",
   },
   [ORGANIZATION_ROUTES.ORGANIZATION_DETAILS]: {
      path: "Организация/Детали организации",
      name: "Детали организации",
   },
   [ORGANIZATION_ROUTES.EMPLOYEES]: {
      path: "Организация/Сотрудники",
      name: "Сотрудники",
   },
   [ORGANIZATION_ROUTES.EMPLOYEES_DETAILS]: {
      path: "Организация/Детали сотрудника",
      name: "Детали сотрудника",
   },
   [ORGANIZATION_ROUTES.EMPLOYEES_SETTINGS]: {
      path: "Организация/Личная информация сотрудника",
      name: "Личная информация сотрудника",
   },
   [ORGANIZATION_ROUTES.INVITE_EMPLOYEES]: {
      path: "Организация/Сотрудник",
      name: "Сотрудник",
   },

   [ORGANIZATION_ROUTES.POSITIONS]: {
      path: "Организация/Должности",
      name: "Должности",
   },
   [ORGANIZATION_ROUTES.ADD_POSITION]: {
      path: "Организация/Должность",
      name: "Должность",
   },
   [ORGANIZATION_ROUTES.HISTORY]: {
      path: "Организация/История",
      name: "История",
   },
   [ORGANIZATION_ROUTES.VACANCIES]: {
      path: "Организация/Вакансии",
      name: "Вакансии",
   },
   [ORGANIZATION_ROUTES.VACANCY_DETAIL]: {
      path: "Организация/Детали Вакансии",
      name: "Детали Вакансии",
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
