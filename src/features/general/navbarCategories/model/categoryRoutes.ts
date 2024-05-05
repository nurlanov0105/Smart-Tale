import { DASHBOARD, MARKETPLACE, ORDERS, ROUTES } from "@/shared/lib";
import { User, Clipboard, ShoppingCart } from "lucide-react";
import { TypeCategories } from "@/entities/user/navbarItem";

export const CategoryRoutes: TypeCategories[] = [
   {
      id: 1,
      title: "Личный кабинет",
      Icon: User,
      routes: [
         {
            parentId: 1,
            subtitle: "Профиль",
            link: DASHBOARD.PROFILE,
            isSubscribe: false,
         },
         {
            parentId: 1,
            subtitle: "Мои объявления",
            link: DASHBOARD.LISTINGS,
            isSubscribe: false,
         },
         {
            parentId: 1,
            subtitle: "Мои покупки",
            link: DASHBOARD.PURCHASES,
            isSubscribe: true,
         },
         {
            parentId: 1,
            subtitle: "История заказов",
            link: DASHBOARD.ORDER_HISTORY,
            isSubscribe: true,
         },
         {
            parentId: 1,
            subtitle: "Организация",
            link: DASHBOARD.ORGANIZATION,
            isSubscribe: true,
         },
         {
            parentId: 1,
            subtitle: "Избранные",
            link: DASHBOARD.FAVORITES,
            isSubscribe: true,
         },
      ],
      activeRoutes: [ROUTES.NOTICES, ROUTES.ORDER_DETAILS, ROUTES.SUBSCRIBE],
   },
   {
      title: "Заказы",
      id: 2,
      Icon: Clipboard,
      routes: [
         {
            parentId: 2,
            subtitle: "Текущие заказы",
            link: ORDERS.CURRENT_ORDERS,
            isSubscribe: false,
         },
         {
            parentId: 2,
            subtitle: "История",
            link: ORDERS.HISTORY,
            isSubscribe: false,
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
            isSubscribe: false,
         },
         {
            parentId: 3,
            subtitle: "Услуги",
            link: MARKETPLACE.SERVICE,
            isSubscribe: false,
         },
         {
            parentId: 3,
            subtitle: "Разместить заказ",
            link: MARKETPLACE.CREATE_ORDER,
            isSubscribe: false,
         },
      ],
      activeRoutes: [ROUTES.CARD_DETAILS],
   },
];
