import { TYPE_ANNOUNCEMENT_DETAIL } from "@/shared/lib/constants/consts";

export enum WORK {
   VACANCIES = "/work/vacancies",
   CREATE_VACANCY = `/work/create-vacancy`,
   RESUME = `/work/create-resume`,
   RESUMES = `/work/resumes`,
   MY_RESUMES = `/work/my-resume-list`,
   RESUME_INFO = `/work/resume-info`,
   RESUME_DETAILS = `/work/resume-details`,
   VACANCY_DETAIL = `/work/vacancy-detail`,
}

export enum MARKETPLACE {
   EQUIPMENT = "/marketplace/equipment",
   SERVICES = `/marketplace/services`,
   ORDERS = `/marketplace/orders`,
   CREATE_ORDER = `/marketplace/create-order`,
   CREATE_SERVICE = `/marketplace/create-service`,
   CREATE_ANNOUNCEMENT = "/marketplace/create-announcement",
}

export enum DASHBOARD {
   PROFILE = `/dashboard/profile`,
   LISTINGS = `/dashboard/listings`,
   PURCHASES = `/dashboard/purchases`,
   ORDER_HISTORY = `/dashboard/order-history`,
   ORGANIZATION = `/dashboard/organization`,
   FAVORITES = `/dashboard/favorites`,
   // MY_ORDER_DETAIL = "/dashboard/my-order-details",
}

export enum ROUTES {
   HOME = "/",
   SIGN_UP = "/register",
   SIGN_IN = "/login",
   DETAILS = "/detail",
   AUTHOR = "/author",
   CONFIRMATION_REGISTER = "/confirmation",
   CONFIRMED = "/confirmed",

   MARKETPLACE_EQUIPMENT = "/marketplace/equipment",
   MARKETPLACE_SERVICES = `/marketplace/services`,
   MARKETPLACE_ORDER = `/marketplace/orders`,
   MARKETPLACE_CREATE_SERVICE = `/marketplace/create-service`,

   DASHBOARD_PROFILE = `/dashboard/profile`,
   DASHBOARD_LISTINGS = `/dashboard/listings`,
   DASHBOARD_PURCHASES = `/dashboard/purchases`,
   DASHBOARD_ORDER_HISTORY = `/dashboard/order-history`,
   DASHBOARD_ORGANIZATION = `/dashboard/organization`,
   DASHBOARD_FAVORITES = `/dashboard/favorites`,

   ORDER_DETAILS = "/order-details",
   CARD_DETAILS = "/card-details",

   CARD_DETAILS_ORDER = `/card-details/${TYPE_ANNOUNCEMENT_DETAIL.order}`,
   CARD_DETAILS_EQUIPMENT = `/card-details/${TYPE_ANNOUNCEMENT_DETAIL.equipment}`,
   CARD_DETAILS_SERVICE = `/card-details/${TYPE_ANNOUNCEMENT_DETAIL.service}`,

   ANNOUNCEMENT_DETAILS = `/announcement-details/`,
   ANNOUNCEMENT_DETAILS_ORDER = `/announcement-details/${TYPE_ANNOUNCEMENT_DETAIL.order}`,
   ANNOUNCEMENT_DETAILS_EQUIPMENT = `/announcement-details/${TYPE_ANNOUNCEMENT_DETAIL.equipment}`,
   ANNOUNCEMENT_DETAILS_SERVICE = `/announcement-details/${TYPE_ANNOUNCEMENT_DETAIL.service}`,

   ORGANIZATION = `/organization`,
   ORGANIZATION_CURRENT_ORDERS = `/organization/current-orders`,
   ORGANIZATIONS_OTHER_DETAIL = `/organizations-list`,
   ORGANIZATION_ANNOUNCEMENT_DETAILS = `/organization/announcement-details`,

   MODE = `/mode`,
   NO_RIGHTS = `/no-rights`,
   NOTICES = `/notices`,
   USERS = `/users`,
   SUBSCRIBE = `/subscribe`,
   SEARCH = `/search`,
   STRIPE_PAYMENT = `/payment/stripe`,

   WORK_VACANCIES = "/work/vacancies",
   WORK_CREATE_VACANCY = `/work/create-vacancy`,
   WORK_RESUME = `/work/create-resume`,
   WORK_RESUMES = `/work/resumes`,
   WORK_MY_RESUMES = `/work/my-resume-list`,
   WORK_RESUME_INFO = `/work/resume-info`,
   WORK_RESUME_DETAILS = `/work/resume-details`,
   WORK_VACANCY_DETAIL = `/work/vacancy-detail`,
}

export enum ORGANIZATION_ROUTES {
   ORGANIZATION_LIST = "/organization/organization-list",
   ORGANIZATION_DETAILS = "/organization/organization-details",
   ORGANIZATION_SETTINGS = "/organization/organization-settings",
   CREATE_ORGANIZATION = "/organization/create-organization",
   EMPLOYEES = "/organization/employees",
   EMPLOYEES_DETAILS = "/organization/employees-details",
   INVITE_EMPLOYEES = "/organization/invite-employees",
   POSITIONS = "/organization/positions",
   ADD_POSITION = "/organization/add-position",
   POSITION_DETAILS = "/organization/position-details",
   EMPLOYEES_SETTINGS = "/organization/employees-settings",
   VACANCIES = "/organization/vacancies",
   VACANCY_DETAIL = "/organization/vacancy-detail",
   HISTORY = "/organization/history",
   ANNOUNCEMENT_DETAILS = "/organization/announcement-details",
   CREATE_VACANCY = `/organization/create-vacancy`,

   CURRENT_ORDERS = `/organization/current-orders`,
   NO_RIGHTS = `/organization/no-rights`,
}

export const authRoutes = [
   ROUTES.SIGN_IN,
   ROUTES.SIGN_UP,
   ROUTES.CONFIRMED,
   ROUTES.CONFIRMATION_REGISTER,
];

export const accessRoutes = [
   ROUTES.MARKETPLACE_EQUIPMENT,
   ROUTES.MARKETPLACE_SERVICES,
   ROUTES.WORK_VACANCIES,
   ROUTES.WORK_RESUMES,

   ROUTES.CARD_DETAILS_ORDER,
   ROUTES.CARD_DETAILS_EQUIPMENT,
   ROUTES.CARD_DETAILS_SERVICE,
   ROUTES.USERS,
   ROUTES.WORK_VACANCY_DETAIL,
   ROUTES.WORK_RESUME_INFO,
];
