import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import { OrdersQueryKeys } from "@/shared/api/queryKeys";
import { OrdersService } from "@/shared/lib";
import { toast } from "react-toastify";
import {closeModal} from "@/views/modal";

export const useGetAppliedOrgs = (slug: string) => {
   return useQuery({
      queryFn: () => OrdersService.getAppliedOrganizations({ slug }),
      queryKey: [OrdersQueryKeys.APPLIED_OERGANIZATIONS],
   });
};

export const useBookOrder = () => {
   const queryClient = useQueryClient();
   return useMutation<any, Error, {slug: string, organizationSlug: string}>({
      mutationFn: (variables) => OrdersService.bookingOrder({
         orderSlug: variables.slug ,
         organizationSlug: variables.organizationSlug
      }),
      mutationKey: [OrdersQueryKeys.APPLIED_OERGANIZATIONS],
      onSuccess: () => {
         queryClient.invalidateQueries({queryKey: [OrdersQueryKeys.GET_MY_ORDER]});
         queryClient.invalidateQueries({queryKey: [OrdersQueryKeys.APPLIED_OERGANIZATIONS]});
         toast.success("Выбрана организация для выполения заказа");
         closeModal()
      },
   });
};
