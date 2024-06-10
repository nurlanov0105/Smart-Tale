import StandartCard from "./ui/StandartCard";
import {
   useEquipmentsQuery,
   useEquipmentSlug,
   useLikeEquipment,
   useLikeOrder,
   useLikeService,
} from "./model/useQueries";
import { usePathStore } from "./model/usePathStore";
import useFetchResource from "./model/useFetchResource";
import type { ISize } from "./model/types";

export {
   StandartCard,
   usePathStore,
   useEquipmentsQuery,
   useEquipmentSlug,
   useFetchResource,
   useLikeEquipment,
   useLikeOrder,
   useLikeService,
   ISize,
};
