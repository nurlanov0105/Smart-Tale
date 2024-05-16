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
   GET_MY_ORDERS: "/my-orders/",
   GET_MY_ORDER: "/order-detail/"
}

export const EquipmentsEndpoints = {
   EQUIPMENTS: "/equipments",
   EQUIPMENT_SLUG: "/equipment",
   CREATE_EQUIPMENT: "/equipment/create/",
   GET_MY_EQUIPMENTS: "/my-equipments/",
   GET_MY_EQUIPMENT: "/equipment/"
}
