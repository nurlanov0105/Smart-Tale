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
import usePagination from "./hooks/usePagination";

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
import { SELECT_TYPES } from "./constants/ui.consts";
import { ValidationsSchemasService } from "./services/schemasService";
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
   EMPTY_CONTENT_TYPES,
   RIGHT_ACTIONS,
   SKELETON_TYPES,
} from "./constants/consts";
import {
   AnnouncementValues,
   ANNOUNCEMENT_FORM_NAMES,
   sizesTypes,
   sizesDataNumbers,
   sizesDataLetters,
} from "./constants/announcement.consts";

export {rightsActionsData} from "./utils/rightsActionsData"
export {rightsActionsMap} from "./constants/consts"
export type {
   RightsTypes,
   AddEmployeeTypes,
   AddEmployeeRequestTypes,
   AddPositionRequestTypes,
   AddPositionTypes,
   ChangePositionQueryTypes,
   EmployeeDetailsResponseTypes,
   IRight,
   EmployeeDetailsTypes,
   GetPositionTypes
} from "./types/organizations-service.types"
export type {IRights} from "./types/types"
export {usePositions} from "./hooks/useQueries"
export type {PositionResponseTypes} from "./types/queries.types"
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
   usePagination,
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
   SELECT_TYPES,
   AnnouncementTypes,
   DefineAnnouncementType,
   EnglishType,
   ValidationsSchemasService,
   announcementTabs,
   AnnouncementValues,
   ANNOUNCEMENT_FORM_NAMES,
   sizesDataLetters,
   sizesDataNumbers,
   sizesTypes,
};

export type { InputFieldProps, CardType, AuthorType };
