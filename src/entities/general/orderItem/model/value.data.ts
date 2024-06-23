import { AnnouncementValues, ROUTES } from "@/shared/lib";

export const orderValues: { [key: string]: string } = {
   Order: "Заказ",
   Equipment: "Оборудование",
};

export const defineAnnouncementRoute = {
   [AnnouncementValues.EQUIPMENT]: ROUTES.ANNOUNCEMENT_DETAILS_EQUIPMENT,
   [AnnouncementValues.ORDER]: ROUTES.ANNOUNCEMENT_DETAILS_ORDER,
   [AnnouncementValues.SERVICE]: ROUTES.ANNOUNCEMENT_DETAILS_SERVICE,
};
export const defineDetailsRoute = {
   [AnnouncementValues.EQUIPMENT]: ROUTES.CARD_DETAILS_EQUIPMENT,
   [AnnouncementValues.ORDER]: ROUTES.CARD_DETAILS_ORDER,
   [AnnouncementValues.SERVICE]: ROUTES.CARD_DETAILS_SERVICE,
};
