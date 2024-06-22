import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OrganizationQueryKeys } from "@/shared/api";
import { OrganizationService } from "@/shared/lib";
import { KanbanOrderProps } from "@/widgets/user/board";
import { toast } from "react-toastify";

interface IProps {
   Arrived: KanbanOrderProps[];
   Checking: KanbanOrderProps[];
   Process: KanbanOrderProps[];
   Sending: KanbanOrderProps[];
   Waiting: KanbanOrderProps[];
}
export const useGetOrganizationOrders = () => {
   return useQuery<IProps>({
      queryKey: [OrganizationQueryKeys.GET_ORDERS],
      queryFn: () => OrganizationService.getOrganizationsOrders(),
   });
};

export const useUpdateStatusOrder = () => {
   const queryClient = useQueryClient();
   return useMutation<any, Error, { orderSlug: string; status: string }>({
      mutationKey: [OrganizationQueryKeys.UPDATE_STATUS_ORDER],
      mutationFn: ({ orderSlug, status }) => {
         const parameters = orderSlug + `/?status=${status}`;
         return OrganizationService.updateOrderStatus(parameters);
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [OrganizationQueryKeys.GET_ORDERS] });
      },
      onError: () => {
         toast.error("Извините, произошла ошибка при запросе, попытайтесь еще раз");
      },
   });
};
