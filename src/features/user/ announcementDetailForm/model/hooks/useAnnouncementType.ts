import {usePathname} from "next/navigation";
import {TYPE_ANNOUNCEMENT_DETAIL} from "@/shared/lib";

export const useAnnouncementType = () => {
    const pathname= usePathname()

    const type = pathname.split("/")[2]
    const slug = pathname.split("/")[3]

    const isEquipment = +type === TYPE_ANNOUNCEMENT_DETAIL.equipment

    return {
        type: isEquipment ? "equipment": "order",
        slug: "nitki-s-igolkami"
    }
}