import { DASHBOARD, MARKETPLACE, ROUTES } from "@/shared/lib";
import { BriefcaseBusiness, Clipboard, ShoppingCart, User } from "lucide-react";
import { TypeCategories } from "@/entities/user/navbarItem";
import { ORGANIZATION_ROUTES, WORK } from "@/shared/lib/routes.config";

interface CategoryArgs {
   authorized: boolean;
   subscribed: boolean;
}

export const getCategoryRoutes = ({ authorized, subscribed }: CategoryArgs): TypeCategories[] =>
   [
      {
         id: 1,
         title: "Личный кабинет",
         Icon: User,
         isShow: authorized,
         routes: [
            { parentId: 1, subtitle: "Профиль", link: DASHBOARD.PROFILE },
            { parentId: 1, subtitle: "Мои объявления", link: DASHBOARD.LISTINGS },
            { parentId: 1, subtitle: "Мои покупки", link: DASHBOARD.PURCHASES },
            { parentId: 1, subtitle: "История заказов", link: DASHBOARD.ORDER_HISTORY },
            { parentId: 1, subtitle: "Избранные", link: DASHBOARD.FAVORITES },
         ],
         activeRoutes: [
            ROUTES.NOTICES,
            ROUTES.ORDER_DETAILS,
            ROUTES.SUBSCRIBE,
            ROUTES.ANNOUNCEMENT_DETAILS_ORDER,
            ROUTES.ANNOUNCEMENT_DETAILS_EQUIPMENT,
         ],
      },
      {
         title: "Организация",
         id: 2,
         Icon: Clipboard,
         isShow: subscribed,
         routes: [
            {
               parentId: 2,
               subtitle: "Моя организация",
               link: ORGANIZATION_ROUTES.ORGANIZATION_LIST,
               detailLink: ORGANIZATION_ROUTES.ORGANIZATION_DETAILS,
            },
            { parentId: 2, subtitle: "Сотрудники", link: ORGANIZATION_ROUTES.EMPLOYEES },
            { parentId: 2, subtitle: "Должности", link: ORGANIZATION_ROUTES.POSITIONS },
            { parentId: 2, subtitle: "Текущие заказы", link: ORGANIZATION_ROUTES.CURRENT_ORDERS },
            { parentId: 2, subtitle: "История вакансий", link: ORGANIZATION_ROUTES.VACANCIES },
            { parentId: 2, subtitle: "История заказов", link: ORGANIZATION_ROUTES.HISTORY },
         ],
         activeRoutes: [
            ORGANIZATION_ROUTES.CREATE_ORGANIZATION,
            ORGANIZATION_ROUTES.ORGANIZATION_DETAILS,
            ORGANIZATION_ROUTES.INVITE_EMPLOYEES,
            ORGANIZATION_ROUTES.EMPLOYEES_DETAILS,
            ORGANIZATION_ROUTES.EMPLOYEES_SETTINGS,
            ORGANIZATION_ROUTES.POSITIONS,
            ORGANIZATION_ROUTES.ADD_POSITION,
            ORGANIZATION_ROUTES.VACANCY_DETAIL,
            ORGANIZATION_ROUTES.HISTORY,
         ],
      },
      {
         title: "Маркетплейс",
         id: 3,
         Icon: ShoppingCart,
         isShow: true,
         routes: [
            {
               parentId: 3,
               subtitle: "Оборудования",
               link: MARKETPLACE.EQUIPMENT,
               authorized: false,
            },
            { parentId: 3, subtitle: "Заказы", link: MARKETPLACE.ORDERS, authorized: false },
            { parentId: 3, subtitle: "Услуги", link: MARKETPLACE.SERVICES, authorized: false },
            {
               parentId: 3,
               subtitle: "Разместить объявление",
               link: MARKETPLACE.CREATE_ANNOUNCEMENT,
               authorized: true,
            },
         ],
         activeRoutes: [ROUTES.CARD_DETAILS],
      },
      {
         title: "Работа",
         id: 4,
         Icon: BriefcaseBusiness,
         isShow: true,
         routes: [
            { parentId: 4, subtitle: "Вакансии", link: WORK.VACANCIES },
            { parentId: 4, subtitle: "Моё резюме", link: WORK.RESUME, authorized: true },
            {
               parentId: 4,
               subtitle: "Добавить вакансию",
               link: WORK.CREATE_VACANCY,
               authorized: true,
            },
         ],
         activeRoutes: [WORK.VACANCY_DETAIL],
      },
   ].filter((category) => category.isShow);
