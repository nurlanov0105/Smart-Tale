import { CountryCode } from "libphonenumber-js";

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
   hideAnnouncement: "HideAnnouncementModal",
   inviteEmployee: "InviteEmployeeModal",
   buyAnnouncement: "BuyAnnouncementModal",
   acceptAnnouncement: "AcceptAnnouncementModal",
   rejectAnnouncement: "RejectAnnouncementModal",
   requireAnnouncement: "RequireAnnouncementModal",
   logout: "LogoutModal",
   card: "CardModal",
   deleteAccount: "DeleteModal",
   deleteEmployee: "DeleteEmployeeModal",
   responsesUsers: "ResponsesModal",
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
