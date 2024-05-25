import { BASE_URL, authApiInstance } from "./instance";

import {
   AuthEndpoints,
   EquipmentsEndpoints,
   OrdersEndpoints,
   ServicesEndpoints,
   UserEndpoints,
   VacancyEndpoints,
   ResumeEndpoints,
} from "./endpoints";
import {
   UserQueryKeys,
   OrganizationQueryKeys,
   EquipmentQueryKeys,
   ServiceQueryKeys,
   ResumeQueryKeys,
} from "./queryKeys";
import { EquipmentService } from "../lib/services/equipmentsService";

export {
   BASE_URL,
   authApiInstance,
   AuthEndpoints,
   UserQueryKeys,
   OrganizationQueryKeys,
   EquipmentsEndpoints,
   OrdersEndpoints,
   EquipmentQueryKeys,
   EquipmentService,
   ServicesEndpoints,
   ServiceQueryKeys,
   UserEndpoints,
   VacancyEndpoints,
   ResumeEndpoints,
   ResumeQueryKeys,
};
