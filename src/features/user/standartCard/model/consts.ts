import { AnnouncementTypes, ROUTES } from "@/shared/lib";
import { useEquipmentSlug } from "./useQueries";
import { EquipmentsEndpoints, OrdersEndpoints, ServicesEndpoints } from "@/shared/api";

export const ModalSlugEndpoints = {
   [AnnouncementTypes.equipment]: EquipmentsEndpoints.EQUIPMENT_SLUG,
   [AnnouncementTypes.service]: ServicesEndpoints.SERVICE_SLUG,
   [AnnouncementTypes.order]: OrdersEndpoints.GET_MY_ORDER,
};
