import { AnnouncementTypes, EquipmentService, OrdersService, ServicesService } from "@/shared/lib";

export const FavoritesDefineService = {
   [AnnouncementTypes.service]: ServicesService.getLikedServices,
   [AnnouncementTypes.order]: OrdersService.getLikedOrders,
   [AnnouncementTypes.equipment]: EquipmentService.getLikedEquipments,
   all: EquipmentService.getLikedEquipments,
};
