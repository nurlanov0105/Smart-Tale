import { DASHBOARD, MARKETPLACE, ORDERS, ROUTES } from "@/shared/lib";
import { User, Clipboard, ShoppingCart, BriefcaseBusiness } from "lucide-react";
import { TypeCategories } from "@/entities/user/navbarItem";
import { WORK } from "@/shared/lib/routes.config";

export const CategoryRoutes: TypeCategories[] = [
   {
      id: 1,
      title: "Личный кабинет",
      Icon: User,
      authorized: true,

      routes: [
         {
            parentId: 1,
            subtitle: "Профиль",
            link: DASHBOARD.PROFILE,
         },
         {
            parentId: 1,
            subtitle: "Мои объявления",
            link: DASHBOARD.LISTINGS,
         },
         {
            parentId: 1,
            subtitle: "Мои покупки",
            link: DASHBOARD.PURCHASES,
         },
         {
            parentId: 1,
            subtitle: "История заказов",
            link: DASHBOARD.ORDER_HISTORY,
         },
         {
            parentId: 1,
            subtitle: "Организация",
            link: DASHBOARD.ORGANIZATION,
         },
         {
            parentId: 1,
            subtitle: "Избранные",
            link: DASHBOARD.FAVORITES,
         },
      ],
      activeRoutes: [ROUTES.NOTICES, ROUTES.ORDER_DETAILS, ROUTES.SUBSCRIBE],
   },
   {
      title: "Заказы",
      id: 2,
      Icon: Clipboard,
      authorized: true,

      routes: [
         {
            parentId: 2,
            subtitle: "Текущие заказы",
            link: ORDERS.CURRENT_ORDERS,
         },
         {
            parentId: 2,
            subtitle: "История",
            link: ORDERS.HISTORY,
         },
      ],
   },
   {
      title: "Маркетплейс",
      id: 3,
      Icon: ShoppingCart,
      authorized: false,
      routes: [
         {
            parentId: 3,
            subtitle: "Оборудование",
            link: MARKETPLACE.EQUIPMENT,
            authorized: false,
         },
         {
            parentId: 3,
            subtitle: "Услуги",
            link: MARKETPLACE.SERVICE,
            authorized: false,
         },
         {
            parentId: 3,
            subtitle: "Разместить заказ",
            link: MARKETPLACE.CREATE_ORDER,
            authorized: true,
         },
      ],
      activeRoutes: [ROUTES.CARD_DETAILS],
   },
   {
      title: "Работа",
      id: 4,
      Icon: BriefcaseBusiness,
      authorized: false,
      routes: [
         {
            parentId: 4,
            subtitle: "Вакансии",
            link: WORK.VACANCIES,
         },
         {
            parentId: 4,
            subtitle: "Моё резюме",
            link: WORK.RESUME,
            authorized: true,
         },
         {
            parentId: 4,
            subtitle: "Добавить вакансию",
            link: WORK.CREATE_VACANCY,
            authorized: true,
         },
      ],
      activeRoutes: [ROUTES.CARD_DETAILS],
   },
];
