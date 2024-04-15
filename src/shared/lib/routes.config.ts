export enum MARKETPLACE {
   EQUIPMENT = "/marketplace/equipment",
   SERVICE = `/marketplace/service`,
   CREATE_ORDER = `/marketplace/create-order`
}

export enum DASHBOARD {
   PROFILE = `/dashboard/profile`,
   LISTINGS = `/dashboard/listings`,
   PURCHASES = `/dashboard/purchases`,
   ORDER_HISTORY = `/dashboard/order-history`,
   ORGANIZATION = `/dashboard/organization`,
}
export enum ORDERS {
   CURRENT_ORDERS = `/orders/current-orders`,
   HISTORY = `/orders/history`,
}

export enum ROUTES {
   HOME = "/",
   SIGN_UP = "/auth/register",
   SIGN_IN = "/auth/login",
   DETAILS = "/detail",
   AUTHOR = "/author",
   CONFIRMATION = "/auth/confirmation",
   CONFIRMED = "/auth/confirmed",

   MARKETPLACE_EQUIPMENT = "/marketplace/equipment",
   MARKETPLACE_SERVICE = `/marketplace/service`,
   MARKETPLACE_ORDER = `/marketplace/order`,

   DASHBOARD_PROFILE = `/dashboard/profile`,
   DASHBOARD_LISTINGS = `/dashboard/listings`,
   DASHBOARD_PURCHASES = `/dashboard/purchases`,
   DASHBOARD_ORDER_HISTORY = `/dashboard/order-history`,
   DASHBOARD_ORGANIZATION = `/dashboard/organization`,

   ORDERS_CURRENT_ORDERS = `/orders/current-orders`,
   ORDERS_HISTORY = `/orders/history`,
}
