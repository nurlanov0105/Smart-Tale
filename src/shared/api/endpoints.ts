export const AuthEndpoints = {
   LOGIN: "/authorization/login",
   REGISTER: "/authorization/registration",
   LOGOUT: "/authorization/logout",
   EMAIL_CONFIRMATION: "/authorization/verify-email",
   RESEND_CODE: "/authorization/resend-code",
   REFRESH_TOKEN: "/authorization/refresh-token",
   FORGOT_PASSWORD: "/authorization/forgot-password",
   EMAIL_AVAILABLE: "/authorization/email-available",
   RESET_PASSWORD: "/authorization/reset-password",
   DELETE_ACCOUNT: "/authorization/delete-user",
};

export const OrdersEndpoints = {
   CREATE_ORDER: "/add-order/",
   GET_ORDERS: "/marketplace-orders",
   GET_MY_ORDER: "/order-detail/",
   GET_MY_ORDERS: "/my-order-ads/",
   GET_APPLIED_ORGANIZATIONS: "/applied-orgs/",
   APPLY_ORDER: "/order-apply",
   LIKE_ORDER: "/like-order/",
   BOOKING_ORDER: "/order-book/",
   DELETE_ORDER: "/order-delete/",
   HIDE_ORDER: "/order-hide/",
   UPDATE_ORDER: "/update-order/",
   UPDATE_ORDER_STATUS: "/update-status/",
};

export const EquipmentsEndpoints = {
   EQUIPMENTS: "/equipments",
   EQUIPMENT_SLUG: "/equipment/",
   CREATE_EQUIPMENT: "/equipment/create/",
   UPDATE_EQUIPMENT: "/equipment/change/",
   LIKED_EQUIPMENTS: "/liked-equipments",
   SEARCH_EQUIPMENTS: "/equipment/search",
   // GET_MY_EQUIPMENTS: "/my-equipments/",
   GET_MY_EQUIPMENT: "/equipment/",
   HIDE_EQUIPMENT: "/hide-equipment/",
   DELETE_EQUIPMENT: "/equipment/delete/",
   GET_MY_EQUIPMENTS: "/my-ads/",
   GET_MY_ANNOUNCEMENTS: "/my-ads/"
};

export const ServicesEndpoints = {
   SERVICES: "/services",
   SERVICE_SLUG: "/service/",
   CREATE_SERVICE: "/service-create/",
   DELETE_SERVICE: "/service-delete/",
   HIDE_SERVICE: "/service-hide/",
   LIKE_SERVICE: "/service-like/",
   UPDATE_SERVICE: "/service-update/",
   LIKED_SERVICES: "/liked-services",
   MY_SERVICES: "/my-services",
};


export const OrganizationEndpoints = {
   ORGANIZATION_DETAILS: "/organization/",
   ORGANIZATION_CREATE: "/organization/create",
   // ORGANIZATION_UPDATE: "/organization/list",
   GET_USER_ORGANIZATIONS: "/organization/list",
   ADD_EMPLOYEE: "/employee/add",
   GET_EMPLOYEES: "/employees/list",
   EMPLOYEE_DETAILS: "/employees/",
   DELETE_EMPLOYEE: "/employee/delete",
   GET_POSITIONS: "/org-jobs/list",
   ADD_POSITION: "/org-jobs/add",
   DELETE_POSITION: "/org-jobs/delete",
};