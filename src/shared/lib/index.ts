import {
   MARKETPLACE,
   DASHBOARD,
   ROUTES,
   ORGANIZATION_ROUTES,
   authRoutes,
   accessRoutes,
} from "./routes.config";
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
import { formattingDate } from "./utils/formattingDate";
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
   announcementFavoritesTabs,
   ruCurrency,
} from "./constants/consts";
import {
   AnnouncementValues,
   ANNOUNCEMENT_FORM_NAMES,
   sizesTypes,
   sizesDataNumbers,
   sizesDataLetters,
} from "./constants/announcement.consts";

export type { ItemType } from "./types/usePaginationTypes";
export type { UsePaginationResult } from "./types/usePaginationTypes";
export type { UsePaginationOptions } from "./types/usePaginationTypes";

export { rightsActionsData } from "./utils/rightsActionsData";
export { rightsActionsMap, OWNER } from "./constants/consts";
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
   GetPositionTypes,
   UpdateEmployeeTypes,
} from "./types/organizations-service.types";

export type {
   ProfileDataTypes,
    ProfileRequestTypes,
    UserPositionTypes,
    ProfileRequestType
} from "./types/user-service.types"

export type { IRights } from "./types/types";
export type { DefaultFilterTypes } from "../store/filtersStore/types";
export type { LikedEquipsParams } from "./types/equiments-service.types";
export type { CurrencyType } from "./types/types";

export type {
   PositionResponseTypes,
   EmployeesResponseTypes,
   OrganizationDetailsTypes,
} from "./types/queries.types";
export type { VacanciesRequestTypes } from "./types/vacancy-service.types";

export { ChatsService } from "./services/chatsService";

export { ChatsQueryKeys } from "../api/queryKeys";
export { ChatsEndpoints } from "../api/endpoints";

export {
   usePositions,
   useEmployeeQuery,
   useEmployeeOrders,
   useEmployees,
   useGetPositionDetails,
   useOrganizationDetails,
   useResponse,
} from "./hooks/useQueries";


export { useInitialRights } from "./hooks/useInitialRights";
export { useGetDates } from "./hooks/useGetDates";
export { useScrollTop } from "./hooks/useScrollTop";

export {
   graphicsFilter,
   cityMap,
   cityFilter,
   currencies,
   currenciesMap,
   experienceFilter,
   graphicMap,
   experienceMap,
   incomeLevelFilter,
   specializationsFilter,
   typeSalary,
} from "./constants/vacancyFilters";


export { VacancyFilterStore } from "@/shared/store/filtersStore/workFiltersStore";
export { useThemeStore } from "../store/themeStore/useThemeStore";
export { useConfettiStore } from "../store/confettiStore/confettiStore";
export { cloudImageToFile } from "./utils/imageToFile";

export {
   EnumTokens,
   MARKETPLACE,
   DASHBOARD,
   ROUTES,
   authRoutes,
   accessRoutes,
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
   announcementFavoritesTabs,
   ruCurrency,
   formattingDate,
};

export type { InputFieldProps, CardType, AuthorType };
