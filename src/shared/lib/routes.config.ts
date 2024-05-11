export enum WORK {
   VACANCIES = "/work/vacancies",
   CREATE_VACANCY = `/work/create-vacancy`,
   RESUME = `/work/resume`,
   VACANCY_DETAIL = `/work/vacancy-detail`
}

export enum MARKETPLACE {
   EQUIPMENT = "/marketplace/equipment",
   SERVICE = `/marketplace/service`,
   CREATE_ORDER = `/marketplace/create-order`,
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
export enum ORDERS {
   CURRENT_ORDERS = `/orders/current-orders`,
   HISTORY = `/orders/history`,
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
   MARKETPLACE_SERVICE = `/marketplace/service`,
   MARKETPLACE_ORDER = `/marketplace/order`,

   DASHBOARD_PROFILE = `/dashboard/profile`,
   DASHBOARD_LISTINGS = `/dashboard/listings`,
   DASHBOARD_PURCHASES = `/dashboard/purchases`,
   DASHBOARD_ORDER_HISTORY = `/dashboard/order-history`,
   DASHBOARD_ORGANIZATION = `/dashboard/organization`,

   ORDER_DETAILS = "/order-details",
   CARD_DETAILS = "/card-details",

   ORDERS_CURRENT_ORDERS = `/orders/current-orders`,
   ORDERS_HISTORY = `/orders/history`,
   MODE = `/mode`,
   NOTICES = `/notices`,
   USERS = `/users`,
   SUBSCRIBE = `/subscribe`,
   SEARCH = `/search`,

   STRIPE_PAYMENT = `/payment/stripe`,
}

export enum ADMIN_ROUTES {
   ORGANIZATION = "/admin/organization",
   ORGANIZATION_DETAILS = "/admin/organization-details",
   CREATE_ORGANIZATION = "/admin/create-organization",
   EMPLOYEES = "/admin/employees",
   EMPLOYEES_DETAILS = "/admin/employees-details",
   INVITE_EMPLOYEES = "/admin/invite-employees",
   POSITIONS = "/admin/positions",
   ADD_POSITION = "/admin/add-position",
   EMPLOYEES_SETTINGS = "/admin/employees-settings",
   VACANCIES = "/admin/vacancies",
   VACANCY_DETAIL = "/admin/vacancy-detail",
   HISTORY = "/admin/history",
}
