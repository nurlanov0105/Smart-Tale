import {useMutation, useQueryClient} from "@tanstack/react-query";
import {OrganizationQueryKeys} from "@/shared/api";
import {ORGANIZATION_ROUTES, OrganizationService, useConfettiStore} from "@/shared/lib";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

export const useCreateOrganizationQuery = () => {
    const queryClient = useQueryClient()
    const startConfetti = useConfettiStore(state => state.startConfetti)
    const {replace} = useRouter()

    return useMutation<any, Error, FormData>({
        mutationKey: [OrganizationQueryKeys.CREATE_ORGANIZATION],
        mutationFn: (data) => OrganizationService.createOrganization(data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: [OrganizationQueryKeys.ORGANIZATION]})
            startConfetti()
            toast.success("Поздравляем! Вы успешно создали организацию!")

            replace(ORGANIZATION_ROUTES.ORGANIZATION_LIST)

        }
    })
}