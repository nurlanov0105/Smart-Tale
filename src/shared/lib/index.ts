import { MARKETPLACE, DASHBOARD, ROUTES, ORGANIZATION_ROUTES } from "./routes.config";
import { errorCatch } from "../api/error";

import { useDebounce } from "./hooks/useDebounce";
import { useAuth } from "./hooks/useAuth";
import { useOutside } from "./hooks/useOutside";
import { useWindowSize } from "./hooks/useWindowSize";
import { useNavbar } from "./hooks/useNavbar";
import { useRememberMe } from "./hooks/useRememberMe";
import useThemeEffect from "./hooks/useThemeEffect";
import { useAnnouncementType } from "./hooks/useAnnouncementType";
import { useSubscribed } from "./hooks/useSubscribed";

import { CookiesServices } from "./services/cookies.services";
import { EquipmentService } from "./services/equipmentsService";
import { ServicesService } from "./services/servicesService";
import { OrdersService } from "./services/ordersService";
import { UserService } from "./services/userService";
import { VacancyService } from "./services/vacancyService";
import { ResumeService } from "./services/resumeService";
import { OrganizationService } from "./services/organizationService";

import { refreshToken } from "./utils/refreshToken";
import { categoryData } from "./utils/categoryData";

import { EnumTokens, InputFieldProps } from "./types/types";
import type { CardType, AuthorType } from "./types/types";

import {
   TYPE_ANNOUNCEMENT_DETAIL,
   AnnouncementTypes,
   DefineAnnouncementType,
   EnglishType,
   COUNTRIES,
   MODAL_KEYS,
   images,
   SkeletonTypes,
   announcementTabs,
} from "./consts";

export {
   EnumTokens,
   MARKETPLACE,
   DASHBOARD,
   ROUTES,
   ORGANIZATION_ROUTES,
   TYPE_ANNOUNCEMENT_DETAIL,
   useDebounce,
   useAuth,
   useOutside,
   useWindowSize,
   useNavbar,
   useRememberMe,
   refreshToken,
   errorCatch,
   useThemeEffect,
   useAnnouncementType,
   useSubscribed,
   categoryData,
   CookiesServices,
   EquipmentService,
   OrdersService,
   ServicesService,
   OrganizationService,
   VacancyService,
   ResumeService,
   UserService,
   MODAL_KEYS,
   images,
   SkeletonTypes,
   COUNTRIES,
   AnnouncementTypes,
   DefineAnnouncementType,
   EnglishType,
   announcementTabs,
};

export type { InputFieldProps, CardType, AuthorType };