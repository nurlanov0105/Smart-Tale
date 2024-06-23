import {useMutation, useQueryClient} from "@tanstack/react-query";
import {OrganizationQueryKeys, UserQueryKeys} from "@/shared/api";
import { ORGANIZATION_ROUTES, OrganizationService, useConfettiStore} from "@/shared/lib";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";

export const useCreateOrganizationQuery = () => {
    const queryClient = useQueryClient()
    const startConfetti = useConfettiStore(state => state.startConfetti)
    const {replace} = useRouter()

    return useMutation<any, Error, FormData>({
        mutationKey: [OrganizationQueryKeys.CREATE_ORGANIZATION],
        mutationFn: (data) => OrganizationService.createOrganization(data),
        onSuccess: async () => {
            // queryClient.removeQueries({queryKey: [UserQueryKeys.PROFILE]})
            await queryClient.invalidateQueries({queryKey: [UserQueryKeys.PROFILE, OrganizationQueryKeys.ORGANIZATION]})
            await queryClient.invalidateQueries({queryKey: [UserQueryKeys.PROFILE]})
            startConfetti()
            toast.success("Поздравляем! Вы успешно создали организацию!")

            replace(ORGANIZATION_ROUTES.ORGANIZATION_LIST)

        }
    })
}