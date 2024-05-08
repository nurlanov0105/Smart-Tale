import { DASHBOARD, MARKETPLACE, ORDERS, ROUTES } from "@/shared/lib";
import {User, Clipboard, ShoppingCart, BriefcaseBusiness} from "lucide-react";
import { TypeCategories } from "@/entities/user/navbarItem";
import {WORK} from "@/shared/lib/routes.config";

export const CategoryRoutes: TypeCategories[] = [
   {
      id: 1,
      title: "Личный кабинет",
      Icon: User,
      isShow: true,
      routes: [
         {
            parentId: 1,
            subtitle: "Профиль",
            link: DASHBOARD.PROFILE,
            isShow: true,
         },
         {
            parentId: 1,
            subtitle: "Мои объявления",
            link: DASHBOARD.LISTINGS,
            isShow: true,
         },
         {
            parentId: 1,
            subtitle: "Мои покупки",
            link: DASHBOARD.PURCHASES,
            isShow: true,
         },
         {
            parentId: 1,
            subtitle: "История заказов",
            link: DASHBOARD.ORDER_HISTORY,
            isShow: true,
         },
         {
            parentId: 1,
            subtitle: "Организация",
            link: DASHBOARD.ORGANIZATION,
            isShow: true,
         },
         {
            parentId: 1,
            subtitle: "Избранные",
            link: DASHBOARD.FAVORITES,
            isShow: true,
         },
      ],
      activeRoutes: [ROUTES.NOTICES, ROUTES.ORDER_DETAILS, ROUTES.SUBSCRIBE],
   },
   {
      title: "Заказы",
      id: 2,
      Icon: Clipboard,
      isShow: true,
      routes: [
         {
            parentId: 2,
            subtitle: "Текущие заказы",
            link: ORDERS.CURRENT_ORDERS,
            isShow: true,
         },
         {
            parentId: 2,
            subtitle: "История",
            link: ORDERS.HISTORY,
            isShow: true,
         },
      ],
   },
   {
      title: "Маркетплейс",
      id: 3,
      Icon: ShoppingCart,
      routes: [
         {
            parentId: 3,
            subtitle: "Оборудование",
            link: MARKETPLACE.EQUIPMENT,
            isShow: true,
         },
         {
            parentId: 3,
            subtitle: "Услуги",
            link: MARKETPLACE.SERVICE,
            isShow: true,
         },
         {
            parentId: 3,
            subtitle: "Разместить заказ",
            link: MARKETPLACE.CREATE_ORDER,
            isShow: true,
         },
      ],
      isShow: true,
      activeRoutes: [ROUTES.CARD_DETAILS],
   },
   {
      title: "Работа",
      id: 4,
      Icon: BriefcaseBusiness,
      isShow: true,
      routes: [
         {
            parentId: 4,
            subtitle: "Вакансии",
            link: WORK.VACANCIES,
            isShow: true,
         },
         {
            parentId: 4,
            subtitle: "Моё резюме",
            link: WORK.RESUME,
            isShow: true,
         },
         {
            parentId: 4,
            subtitle: "Добавить вакансию",
            link: WORK.CREATE_VACANCY,
            isShow: true,
         }
      ],
      activeRoutes: [ROUTES.CARD_DETAILS],
   },
];
