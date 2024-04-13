import {DASHBOARD, ROUTES} from "@/shared/lib";
import {User, Clipboard, ShoppingCart} from "lucide-react";
import {TypeCategories} from "../index";

export const CategoryRoutes: TypeCategories[] = [
   {
      id: 1,
      title: "Личный кабинет",
      Icon: User,
      routes: [
         {
            parentId: 1,
            subtitle: "Профиль",
            link: ROUTES.HOME,
            isSubscribe: false,
         },
         {
            parentId: 1,
            subtitle: "Мои объявления",
            link: DASHBOARD.SEARCH,
            isSubscribe: false,
         },
         {
            parentId: 1,
            subtitle: "Мои покупки",
            link: DASHBOARD.HOME,
            isSubscribe: true,
         },
         {
            parentId: 1,
            subtitle: "История заказов",
            link: DASHBOARD.HOME,
            isSubscribe: true,
         },
         {
            parentId: 1,
            subtitle: "Организация",
            link: DASHBOARD.HOME,
            isSubscribe: true,
         },
      ],
   },
   {
      title: "Заказы",
      id: 2,
      Icon: Clipboard,
      routes: [
         {
            parentId: 2,
            subtitle: "Текущие заказы",
            link: DASHBOARD.PROFILE,
            isSubscribe: false
         },
         {
            parentId: 2,
            subtitle: "История",
            link: DASHBOARD.SEARCH,
            isSubscribe: false
         }
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
            link: DASHBOARD.PROFILE,
            isSubscribe: false
         },
         {
            parentId: 3,
            subtitle: "Услуги",
            link: DASHBOARD.SEARCH,
            isSubscribe: false
         },
         {
            parentId: 3,
            subtitle: "Разместить заказ",
            link: DASHBOARD.SEARCH,
            isSubscribe: false
         }
      ],
   }
];
