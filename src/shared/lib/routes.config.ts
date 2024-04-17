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
   ORDER_DETAIL = `/dashboard/order-details/:id`,
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
   CONFIRMATION_LOGIN = "/confirmation/login",
   CONFIRMATION_REGISTER = "/confirmation/register",
   CONFIRMED = "/confirmed",

   MARKETPLACE_EQUIPMENT = "/marketplace/equipment",
   MARKETPLACE_SERVICE = `/marketplace/service`,
   MARKETPLACE_ORDER = `/marketplace/order`,

   DASHBOARD_PROFILE = `/dashboard/profile`,
   DASHBOARD_LISTINGS = `/dashboard/listings`,
   DASHBOARD_PURCHASES = `/dashboard/purchases`,
   DASHBOARD_ORDER_HISTORY = `/dashboard/order-history`,
   DASHBOARD_ORGANIZATION = `/dashboard/organization`,
   DASHBOARD_ORDER_DETAIL = `/dashboard/order-detail`,

   ORDERS_CURRENT_ORDERS = `/orders/current-orders`,
   ORDERS_HISTORY = `/orders/history`,
}
