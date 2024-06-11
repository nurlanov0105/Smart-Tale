import { ORGANIZATION_ROUTES, DASHBOARD, MARKETPLACE, ROUTES } from "@/shared/lib";
import { WORK } from "@/shared/lib/routes.config";

export const PathData: any = {
   [ROUTES.SEARCH]: {
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
   [MARKETPLACE.CREATE_SERVICE]: {
      path: "Маркетплейс/Разместить услугу",
      name: "Разместить услугу",
   },
   [WORK.VACANCIES]: {
      path: "Работа/Вакансии",
      name: "Вакансии",
   },
   [WORK.RESUME]: {
      path: "Работа/Резюме",
      name: "Резюме",
   },
   [WORK.RESUME_DETAILS]: {
      path: "Работа/Детали Резюме",
      name: "Детали Резюме",
   },
   [WORK.RESUME_INFO]: {
      path: "Работа/Детали Резюме",
      name: "Детали Резюме",
   },
   [WORK.RESUMES]: {
      path: "Работа/Резюме",
      name: "Резюме",
   },
   [WORK.MY_RESUMES]: {
      path: "Работа/Мои Резюме",
      name: "Мои Резюме",
   },
   [WORK.CREATE_VACANCY]: {
      path: "Работа/Добавить Вакансию",
      name: "Добавить Вакансию",
   },
   [WORK.VACANCY_DETAIL]: {
      path: "Работа/Детали вакансии",
      name: "Детали вакансии",
   },

   [ROUTES.ANNOUNCEMENT_DETAILS_ORDER]: {
      path: "Маркетплейс/Детали заказа",
      name: "Детали заказа",
   },
   [ROUTES.ANNOUNCEMENT_DETAILS_EQUIPMENT]: {
      path: "Маркетплейс/Детали оборудования",
      name: "Детали оборудования",
   },
   [ROUTES.ANNOUNCEMENT_DETAILS_SERVICE]: {
      path: "Маркетплейс/Детали услуги",
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
   [ROUTES.NOTICES]: {
      path: "Личный кабинет/Уведомления",
      name: "Уведомления",
   },
   [ROUTES.USERS]: {
      path: "SmartTale",
      name: "Пользователь",
   },
   [ROUTES.ORGANIZATIONS_OTHER_DETAIL]: {
      path: "SmartTale",
      name: "Организация",
   },

   [ORGANIZATION_ROUTES.CURRENT_ORDERS]: {
      path: "Организация/Текущие заказы",
      name: "Текущие заказы",
   },

   [ORGANIZATION_ROUTES.ORGANIZATION_LIST]: {
      path: "Организация/Детали организации",
      name: "Детали организации",
   },
   [ORGANIZATION_ROUTES.CREATE_ORGANIZATION]: {
      path: "Организация/Создание организации",
      name: "Создание организации",
   },
   [ORGANIZATION_ROUTES.ORGANIZATION_DETAILS]: {
      path: "Организация/Детали организации",
      name: "Детали организации",
   },
   [ORGANIZATION_ROUTES.ORGANIZATION_SETTINGS]: {
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
   [ORGANIZATION_ROUTES.POSITION_DETAILS]: {
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
   [ORGANIZATION_ROUTES.ANNOUNCEMENT_DETAILS]: {
      path: "Организация/Детали заказа",
      name: "Детали заказа",
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
