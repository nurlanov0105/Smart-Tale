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
   GET_MY_ORDERS: "/my-order-ads/",
   GET_LIKED_ORDERS: "/liked-orders/",
   GET_ORDERS_HISTORY: "/orders-history/",
   GET_MY_ORDERS_HISTORY: "/my-history-orders/",
   GET_MY_ORDER: "/order-detail/",
   GET_APPLIED_ORGANIZATIONS: "/applied-orgs/",
   APPLY_ORDER: "/order-apply/",
   LIKE_ORDER: "/like-order/",
   BOOKING_ORDER: "/order-book/",
   DELETE_ORDER: "/order-confirmationModal/",
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
   GET_MY_ADS: "/my-ads",
   GET_MY_EQUIPMENT: "/equipment/",

   HIDE_EQUIPMENT: "/hide-equipment/",
   DELETE_EQUIPMENT: "/equipment/delete/",
   GET_MY_ANNOUNCEMENTS: "/my-ads/",
   BUY_EQUIPMENT: "/sold-equipment/",
   LIKE_EQUIPMENT: "/equipments/like/",
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

export const UserEndpoints = {
   MY_PROFILE: "/my-profile",
   MY_PROFILE_CHANGE: "/my-profile",
   SUBSCRIBE: "/subscribe",
   COMMON_USER: "/u/",
   COMMON_USER_ADS: "/u-ads/",
   SEARCH: "/ads-search",
};

export const VacancyEndpoints = {
   VACANCY: "/vacancy/?",
   ORGANIZATION_VACANCIES: "/org-vacancy",
   VACANCY_RESPONSES: "/vacancy-response-list/",
   RESPONSE_VACANCY: "/vacancy-response/",
   VACANCY_FILTER: "/vacancy/filter",
   VACANCY_SEARCH: "/vacancy/search",
   VACANCY_SLUG: "/vacancy",
   VACANCY_DETAILS: "/vacancy/",
   ADD_VACANCY: "/add-vacancy/",
   CHANGE_VACANCY: "/change-vacancy/",
   DELETE_VACANCY: "/delete-vacancy/",
   HIDE_VACANCY: "/vacancy-hide/",
};
export const ResumeEndpoints = {
   ADD_RESUME: "/add-resume/",
   UPDATE_RESUME: "/change-resume/",
   DELETE_RESUME: "/delete-resume/",
   HIDE_RESUME: "/resume/hide/",
   GET_RESUMES: "/resume/",
   GET_RESUME_DETAILS: "/resume/",
   GET_MY_RESUMES: "/my-resume/",
};

export const OrganizationEndpoints = {
   ORGANIZATION_DETAILS: "/organization/detail/",
   ORGANIZATION_CREATE: "/organization/create",
   ORGANIZATION_UPDATE: "/organization/detail/",
   ORGANIZATION_DELETE: "/organization/detail/",
   ORGANIZATION_ACTIVATE: "/organization/activate/",
   GET_ORGANIZATION_ORDERS: "/received-orders-status/",
   GET_HISTORY_ORDERS: "/my-org-orders",
   GET_EMPLOYEE_ORDERS: "/employee-order/",
   GET_USER_ORGANIZATIONS: "/organization/list",
   GET_MY_ORGANIZATIONS: "/my-orgs/",
   ADD_EMPLOYEE: "/employee/add",
   GET_EMPLOYEES: "/employee/list",
   EMPLOYEE_DETAILS: "/employee/detail/",
   DELETE_EMPLOYEE: "/employee/detail/",
   GET_POSITIONS: "/org-jobs/list",
   DETAILS_POSITION: "/org-jobs/detail/",
   ADD_POSITION: "/org-jobs/add",
   CHANGE_POSITION: "/org-jobs/detail/",
   UPDATE_EMPLOYEE: "/employee/detail/",
   DELETE_POSITION: "/org-jobs/detail/",
   UPDATE_ORDER_STATUS: "/update-status/",
};

export const ChatsEndpoints = {
   CONVERSATION_START: "/conversation/start/",
   CONVERSATIONS: "/conversations/",
   MESSAGES: "/messages/",
};
