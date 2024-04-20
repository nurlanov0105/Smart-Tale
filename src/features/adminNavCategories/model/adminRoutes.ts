import { ADMIN_ROUTES, ROUTES } from "@/shared/lib";
import {User, UsersRound, History, Building, ListOrdered} from "lucide-react";
import type { TypeAdminCategories } from "../model/types";
export const AdminRoutes: TypeAdminCategories[] = [
   {
      id: 1,
      title: "Организация",
      Icon: Building,
      link: ADMIN_ROUTES.ORGANIZATION,
      routes: [ADMIN_ROUTES.CREATE_ORGANIZATION, ADMIN_ROUTES.ORGANIZATION_DETAIL],
   },
   {
      id: 2,
      title: "Сотрудники",
      Icon: User,
      link: ADMIN_ROUTES.EMPLOYEES,
      routes: [ADMIN_ROUTES.INVITE_EMPLOYEES, ADMIN_ROUTES.EMPLOYEES_DETAIL],
   },
   {
      id: 3,
      title: "Должности",
      Icon: UsersRound,
      link: ADMIN_ROUTES.POSITIONS,
      routes: [ADMIN_ROUTES.POSITIONS, ADMIN_ROUTES.ADD_POSITION],
   },
   {
      id: 4,
      title: "История",
      Icon: History,
      link: ADMIN_ROUTES.HISTORY,
      routes: [ADMIN_ROUTES.HISTORY],
   },
   {
      id: 5,
      title: "Заказы",
      Icon: ListOrdered,
      link: ADMIN_ROUTES.EMPLOYEES_SETTINGS,
      routes: [ADMIN_ROUTES.EMPLOYEES_SETTINGS],
   },
   {
      id: 6,
      title: "Личный профиль",
      Icon: User,
      link: ROUTES.DASHBOARD_PROFILE,
      routes: [ROUTES.DASHBOARD_PROFILE],
   },
];
