import {usePathname} from "next/navigation";
import {TYPE_ANNOUNCEMENT_DETAIL} from "@/shared/lib";

export const useAnnouncementType = () => {
    const pathname= usePathname()

    const type = pathname.split("/")[2]
    const slug = pathname.split("/")[3]

    const isEquipment = +type === TYPE_ANNOUNCEMENT_DETAIL.equipment


    return {
        type: +type === TYPE_ANNOUNCEMENT_DETAIL.equipment
            ? "equipment" : +type === TYPE_ANNOUNCEMENT_DETAIL.order
                ? "order" : "service",

        slug: +type === TYPE_ANNOUNCEMENT_DETAIL.equipment
            ? "eqweqwewq" : +type === TYPE_ANNOUNCEMENT_DETAIL.order
                ? "cshit-futbolki" : "hozhu-v-magazin"
    }
}