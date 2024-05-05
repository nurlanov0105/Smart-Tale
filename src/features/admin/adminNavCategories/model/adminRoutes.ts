import { ADMIN_ROUTES, ROUTES } from "@/shared/lib";
import { User, UsersRound, History, Building, ListOrdered } from "lucide-react";
import type { TypeAdminCategories } from "@/entities/admin/adminNavItem";
export const AdminRoutes: TypeAdminCategories[] = [
   {
      id: 1,
      title: "Организация",
      Icon: Building,
      link: ADMIN_ROUTES.ORGANIZATION,
      routes: [ADMIN_ROUTES.CREATE_ORGANIZATION, ADMIN_ROUTES.ORGANIZATION_DETAILS],
   },
   {
      id: 2,
      title: "Сотрудники",
      Icon: User,
      link: ADMIN_ROUTES.EMPLOYEES,
      routes: [
         ADMIN_ROUTES.INVITE_EMPLOYEES,
         ADMIN_ROUTES.EMPLOYEES_DETAILS,
         ADMIN_ROUTES.EMPLOYEES_SETTINGS,
      ],
   },
   {
      id: 3,
      title: "Должности",
      Icon: UsersRound,
      link: ADMIN_ROUTES.ADD_POSITION,
      routes: [ADMIN_ROUTES.ADD_POSITION],
   },
   {
      id: 4,
      title: "История",
      Icon: History,
      link: ADMIN_ROUTES.HISTORY,
      routes: [ADMIN_ROUTES.HISTORY],
   },

   {
      id: 6,
      title: "Личный профиль",
      Icon: User,
      link: ROUTES.DASHBOARD_PROFILE,
      routes: [ROUTES.DASHBOARD_PROFILE],
   },
];
