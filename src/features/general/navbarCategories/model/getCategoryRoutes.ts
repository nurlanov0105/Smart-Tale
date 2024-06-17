import { DASHBOARD, MARKETPLACE, ROUTES } from "@/shared/lib";
import { BriefcaseBusiness, Clipboard, ShoppingCart, User } from "lucide-react";
import { TypeCategories } from "@/entities/user/navbarItem";
import { ORGANIZATION_ROUTES, WORK } from "@/shared/lib/routes.config";

interface CategoryArgs {
   authorized: boolean;
   subscribed: boolean;
   isEmployee: boolean | undefined
   hasOrganization: boolean | undefined

}

export const getCategoryRoutes = ({ authorized, subscribed, isEmployee }: CategoryArgs): TypeCategories[] =>
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
            {
               parentId: 1,
               subtitle: "История заказов",
               link: DASHBOARD.ORDER_HISTORY,
               subscribed: true,
            },
            { parentId: 1, subtitle: "Избранные", link: DASHBOARD.FAVORITES },
         ].filter((route) => !("subscribed" in route) || route.subscribed === subscribed),
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
         isShow: authorized && subscribed,
         routes: [
            {
               parentId: 2,
               subtitle: "Моя организация",
               link: ORGANIZATION_ROUTES.ORGANIZATION_LIST,
               detailLink: ORGANIZATION_ROUTES.ORGANIZATION_DETAILS,
               isShow: true
            },
            { parentId: 2, subtitle: "Сотрудники", link: ORGANIZATION_ROUTES.EMPLOYEES, isShow: isEmployee },
            { parentId: 2, subtitle: "Должности", link: ORGANIZATION_ROUTES.POSITIONS, isShow: isEmployee },
            { parentId: 2, subtitle: "Текущие заказы", link: ORGANIZATION_ROUTES.CURRENT_ORDERS, isShow: isEmployee },
            { parentId: 2, subtitle: "История вакансий", link: ORGANIZATION_ROUTES.VACANCIES, isShow: isEmployee },
            { parentId: 2, subtitle: "История заказов", link: ORGANIZATION_ROUTES.HISTORY, isShow: isEmployee },
         ].filter((route) => (!("authorized" in route) || route.authorized === authorized) && route.isShow),
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
            ORGANIZATION_ROUTES.POSITION_DETAILS,
         ],
      },
      {
         title: "Маркетплейс",
         id: 3,
         Icon: ShoppingCart,
         isShow: true,
         routes: [
            { parentId: 3, subtitle: "Оборудования", link: MARKETPLACE.EQUIPMENT },
            { parentId: 3, subtitle: "Заказы", link: MARKETPLACE.ORDERS, authorized: true },
            { parentId: 3, subtitle: "Услуги", link: MARKETPLACE.SERVICES },
            {
               parentId: 3,
               subtitle: "Разместить объявление",
               link: MARKETPLACE.CREATE_ANNOUNCEMENT,
               authorized: true,
            },
         ].filter((route) => !("authorized" in route) || route.authorized === authorized),
         activeRoutes: [ROUTES.CARD_DETAILS],
      },
      {
         title: "Работа",
         id: 4,
         Icon: BriefcaseBusiness,
         isShow: true,
         routes: [
            { parentId: 4, subtitle: "Вакансии", link: WORK.VACANCIES },
            { parentId: 4, subtitle: "Резюме", link: WORK.RESUMES },
            { parentId: 4, subtitle: "Мои резюме", link: WORK.MY_RESUMES, authorized: true },
            // {
            //    parentId: 4,
            //    subtitle: "Добавить вакансию",
            //    link: WORK.CREATE_VACANCY,
            //    authorized: true,
            // },
         ].filter((route) => !("authorized" in route) || route.authorized === authorized),
         activeRoutes: [WORK.VACANCY_DETAIL, WORK.RESUME],
      },
   ].filter((category) => category.isShow);
