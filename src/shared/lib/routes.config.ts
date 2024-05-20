import { TYPE_ANNOUNCEMENT_DETAIL } from "@/shared/lib/consts";

export enum WORK {
   VACANCIES = "/work/vacancies",
   CREATE_VACANCY = `/work/create-vacancy`,
   RESUME = `/work/resume`,
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
   MARKETPLACE_ORDER = `/marketplace/order`,
   MARKETPLACE_CREATE_SERVICE = `/marketplace/create-service`,

   DASHBOARD_PROFILE = `/dashboard/profile`,
   DASHBOARD_LISTINGS = `/dashboard/listings`,
   DASHBOARD_PURCHASES = `/dashboard/purchases`,
   DASHBOARD_ORDER_HISTORY = `/dashboard/order-history`,
   DASHBOARD_ORGANIZATION = `/dashboard/organization`,

   ORDER_DETAILS = "/order-details",
   CARD_DETAILS = "/card-details",
   ANNOUNCEMENT_DETAILS_ORDER = `/announcement-details/${TYPE_ANNOUNCEMENT_DETAIL.order}`,
   ANNOUNCEMENT_DETAILS_EQUIPMENT = `/announcement-details/${TYPE_ANNOUNCEMENT_DETAIL.equipment}`,

   ORGANIZATION_CURRENT_ORDERS = `/organization/current-orders`,
   ORGANIZATION_HISTORY = `/organization/history-user`,
   MODE = `/mode`,
   NOTICES = `/notices`,
   USERS = `/users`,
   SUBSCRIBE = `/subscribe`,
   SEARCH = `/search`,

   STRIPE_PAYMENT = `/payment/stripe`,
}

export enum ORGANIZATION_ROUTES {
   ORGANIZATION_LIST = "/organization/organization-list",
   ORGANIZATION_DETAILS = "/organization/organization-details",
   CREATE_ORGANIZATION = "/organization/create-organization",
   EMPLOYEES = "/organization/employees",
   EMPLOYEES_DETAILS = "/organization/employees-details",
   INVITE_EMPLOYEES = "/organization/invite-employees",
   POSITIONS = "/organization/positions",
   ADD_POSITION = "/organization/add-position",
   EMPLOYEES_SETTINGS = "/organization/employees-settings",
   VACANCIES = "/organization/vacancies",
   VACANCY_DETAIL = "/organization/vacancy-detail",
   HISTORY = "/organization/history",

   CURRENT_ORDERS = `/organization/current-orders`,
   HISTORY_USER = `/organization/history-user`,
}
