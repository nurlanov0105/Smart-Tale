import {useMutation, useQuery} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {
    AddPositionRequestTypes,
    AddPositionTypes,
    ChangePositionQueryTypes, GetPositionTypes
} from "@/shared/lib/types/organizations-service.types";
import {OrganizationQueryKeys} from "@/shared/api";
import {OrganizationService} from "@/shared/lib";
import {AddPositionProps} from "../types";

export const useAddPositionQuery = ({reset}: AddPositionProps) => {
    return useMutation<any, Error, AddPositionRequestTypes>({
        mutationKey: [OrganizationQueryKeys.ADD_EMPLOYEE],
        mutationFn: (data) => OrganizationService.addPosition(data),
        onSuccess: () => {
            reset()
            toast.success("Поздравляем! Вы успешно добавили должность!")
        }
    })
}


export const useChangePositionQuery = () => {
    return useMutation<any, Error, ChangePositionQueryTypes>({
        mutationKey: [OrganizationQueryKeys.CHANGE_POSITION],
        mutationFn: ({slug, params}) => OrganizationService.changePosition({slug, params}),
        onSuccess: () => {
            toast.success("Поздравляем! Вы успешно изменили должность!")
        }
    })
}

export const useGetPositionDetails = (slug: string) => {
    return useQuery<GetPositionTypes>({
        queryKey: [OrganizationQueryKeys.DETAILS_POSITION],
        queryFn: () => OrganizationService.getPositionDetails(slug),
    })
}