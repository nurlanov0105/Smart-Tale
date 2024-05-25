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
