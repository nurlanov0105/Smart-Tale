import { CountryCode } from "libphonenumber-js";
import { RightsTypes } from "@/shared/lib";

const slide01 = "/imgs/slider/01.jpg";
const slide02 = "/imgs/slider/02.jpg";
const slide03 = "/imgs/slider/03.jpg";
const slide04 = "/imgs/slider/04.jpg";
const slide05 = "/imgs/slider/05.jpg";

export const SkeletonTypes = {
   standart: "standart",
   listItem: "listItem",
};

export const images = [slide01, slide02, slide03, slide04, slide05];
export const MODAL_KEYS = {
   subscribe: "SubscribeModal",
   changeAvatar: "ChangeAvatarModal",
   deleteAnnouncement: "DeleteAnnouncementModal",
   authNotice: "AuthNotice",
   hideAnnouncement: "HideAnnouncementModal",
   unHideAnnouncement: "unHideAnnouncementModal",
   inviteEmployee: "InviteEmployeeModal",
   buyAnnouncement: "BuyAnnouncementModal",
   acceptAnnouncement: "AcceptAnnouncementModal",
   rejectAnnouncement: "RejectAnnouncementModal",
   requireAnnouncement: "RequireAnnouncementModal",
   logout: "LogoutModal",
   card: "CardModal",
   deleteAccount: "DeleteModal",
   deletePosition: "DeletePositionModal",
   deleteEmployee: "DeleteEmployeeModal",
   leaveOrganization: "leaveOrganization",
   deleteResume: "DeleteResumeModal",
   responsesUsers: "ResponsesModal",
   activateOrganization: "ActivateOrganizationModal",
   deleteModal: "DeleteModal",
   confirmationModal: "ConfirmationModal",
   infoModal: "InfoModal",
   hideResume: "HideResume",
   hideVacancy: "hideVacancy",
   unHideVacancy: "unHideVacancy",
   deleteVacancy: "deleteVacancy",
   deleteOrganization: "deleteOrganization",
   noRights: "noRights",
   noChangeOwner: "noChangeOwner",
   noInviteOwner: "noInviteOwner",
   noChangeDeleteOwner: "noChangeDeleteOwner",
   noOrganizationOrders: "noOrganizationOrders",
   noChangeChoice: "noChangeChoice",
   noChangePosYourself: "noChangePosYourself",
   noChangePosOwner: "noChangePosOwner",
   addedPosition: "addedPosition",
   error: "error",
   infoListModal: "InfoListModal",
   orderListModal: "OrderListModal",
   usersListModal: "UsersListModal",
};

export const SKELETON_TYPES = {
   orderItem: "orderItem",
   table: "table",
   standard: "standard",
   listItem: "listItem",
};

export const COUNTRIES: CountryCode[] = ["KG", "KZ", "RU", "UZ"];

export enum TYPE_ANNOUNCEMENT_DETAIL {
   order = "1",
   equipment = "2",
   service = "3",
}

export const AnnouncementTypes = {
   order: "order",
   equipment: "equipment",
   service: "service",
};
export const EnglishType = {
   Order: "order",
   Equipment: "equipment",
   Service: "service",
};

export const DefineAnnouncementType = {
   "1": AnnouncementTypes.order,
   "2": AnnouncementTypes.equipment,
   "3": AnnouncementTypes.service,
};

export const announcementTabs = [
   {
      value: "Все объявления",
      postValue: "all",
      isSubscribed: true,
   },
   {
      value: "Заказы",
      postValue: AnnouncementTypes.order,
      isSubscribed: false,
   },
   {
      value: "Услуги",
      postValue: AnnouncementTypes.service,
      isSubscribed: false,
   },
   {
      postValue: AnnouncementTypes.equipment,
      value: "Оборудования",
      isSubscribed: false,
   },
];
export const announcementFavoritesTabs = [
   {
      value: "Все объявления",
      postValue: "all",
      isSubscribed: true,
   },
   {
      value: "Заказы",
      postValue: AnnouncementTypes.order + "s",
      isSubscribed: false,
   },
   {
      value: "Услуги",
      postValue: AnnouncementTypes.service + "s",
      isSubscribed: false,
   },
   {
      postValue: AnnouncementTypes.equipment,
      value: "Оборудования",
      isSubscribed: false,
   },
];

export const RIGHT_ACTIONS = {
   CREATE_POSITION: "flag_create_jobtitle",
   REMOVE_POSITION: "flag_remove_jobtitle",
   UPDATE_ACCESS: "flag_update_access",
   ADD_EMPLOYEE: "flag_add_employee",
   REMOVE_EMPLOYEE: "flag_remove_employee",
   UPDATE_ORDER: "flag_update_order",
   DELETE_ORDER: "flag_delete_order",
   CREATE_VACANCY: "flag_create_vacancy",
   WATCH_EMPLOYEE_SETTINGS: "flag_employee_detail_access",
   CHANGE_EMPLOYEE_POSITION: "flag_change_employee_job",
} as const;

export const EMPTY_CONTENT_TYPES = {
   organization: "organization",
   employees: "employees",
   positions: "positions",
   resume: "resume",
   vacancy: "vacancy",
} as const;

export const rightsActionsMap: RightsTypes = {
   [RIGHT_ACTIONS.UPDATE_ACCESS]: "Изменение прав доступа у ролей",
   [RIGHT_ACTIONS.ADD_EMPLOYEE]: "Добавление работника",
   [RIGHT_ACTIONS.UPDATE_ORDER]: "Изменение статуса заказа",
   [RIGHT_ACTIONS.CREATE_POSITION]: "Создание и выдача Роли",
   [RIGHT_ACTIONS.DELETE_ORDER]: "Отмена заказа",
   [RIGHT_ACTIONS.REMOVE_POSITION]: "Удаление роли",
   [RIGHT_ACTIONS.REMOVE_EMPLOYEE]: "Удаление сотрудника",
   [RIGHT_ACTIONS.CREATE_VACANCY]: "Создание вакансии",
   [RIGHT_ACTIONS.WATCH_EMPLOYEE_SETTINGS]: "Просмотр личной информации сотрудников",
   [RIGHT_ACTIONS.CHANGE_EMPLOYEE_POSITION]: "Изменение должностей у сотрудников",
};

export const ruCurrency = {
   Som: "Сом",
   Ruble: "Руб",
   USD: "USD",
   Euro: "Euro",
};

export const OWNER = "Основатель";
