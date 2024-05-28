import {useQuery} from "@tanstack/react-query";
import {EquipmentService, UserQueryKeys} from "@/shared/api";
import {OrdersService} from "@/shared/lib";

export const useListings = (type: string) => {

    const typeAnnouncements = () => {
        if (type !== "all") return `?ads=${type}`
        return ""
    }

    const announcements = useQuery({
        queryKey: [UserQueryKeys.ANNOUNCEMENTS_LISTINGS, type],
        queryFn: () => EquipmentService.getMyAnnouncements(typeAnnouncements()),
        retry: 2
    })

    return {
        data: announcements.data && announcements.data?.data,
        isLoading: announcements.isPending,
        isError: announcements.isError,
    }
}