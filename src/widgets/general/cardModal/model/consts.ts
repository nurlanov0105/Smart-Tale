import { AnnouncementTypes, ROUTES } from "@/shared/lib";

export const AnnouncementRoutes = {
   [AnnouncementTypes.equipment]: ROUTES.ANNOUNCEMENT_DETAILS_EQUIPMENT,
   [AnnouncementTypes.order]: ROUTES.ANNOUNCEMENT_DETAILS_ORDER,
   [AnnouncementTypes.service]: ROUTES.ANNOUNCEMENT_DETAILS_SERVICE,
};
export const CardDetailsRoutes = {
   [AnnouncementTypes.equipment]: ROUTES.CARD_DETAILS_EQUIPMENT,
   [AnnouncementTypes.order]: ROUTES.CARD_DETAILS_ORDER,
   [AnnouncementTypes.service]: ROUTES.CARD_DETAILS_SERVICE,
};
