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
   GET_MY_ORDER: "/order-detail/",
};

export const EquipmentsEndpoints = {
   EQUIPMENTS: "/equipments",
   EQUIPMENT_SLUG: "/equipment/",
   CREATE_EQUIPMENT: "/equipment/creates",
   LIKED_EQUIPMENTS: "/liked-equipments",
   SEARCH_EQUIPMENTS: "/equipment/search",
};
export const ServicesEndpoints = {
   SERVICES: "/services",
   SERVICE_SLUG: "/service/",
   CREATE_SERVICE: "/service-create",
   DELETE_SERVICE: "/service-delete/",
   HIDE_SERVICE: "/service-hide/",
   LIKE_SERVICE: "/service-like/",
   UPDATE_SERVICE: "/service-update/",
   LIKED_SERVICES: "/liked-services",
   MY_SERVICES: "/my-services",
};
