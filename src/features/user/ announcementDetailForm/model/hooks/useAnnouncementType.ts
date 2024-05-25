import { usePathname } from "next/navigation";
import { DefineAnnouncementType } from "@/shared/lib";

export const useAnnouncementType = () => {
   const pathname = usePathname();

   const type = pathname.split("/")[2] as keyof typeof DefineAnnouncementType;
   const slug = pathname.split("/")[3];

   return {
      type: DefineAnnouncementType[type],
      slug: slug,
   };
};

// const isEquipment = +type === TYPE_ANNOUNCEMENT_DETAIL.equipment

// return {
//     type: +type === TYPE_ANNOUNCEMENT_DETAIL.equipment
//         ? "equipment" : +type === TYPE_ANNOUNCEMENT_DETAIL.order
//             ? "order" : "service",

//     slug: +type === TYPE_ANNOUNCEMENT_DETAIL.equipment
//         ? "eqweqwewq" : +type === TYPE_ANNOUNCEMENT_DETAIL.order
//             ? "cshit-futbolki" : "hozhu-v-magazin"
// }
// }
