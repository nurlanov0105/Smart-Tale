import { useMutation, useQuery } from "@tanstack/react-query";
import { OrdersQueryKeys } from "@/shared/api/queryKeys";
import { OrdersService } from "@/shared/lib";
import { toast } from "react-toastify";

export const useGetAppliedOrgs = (slug: string) => {
   return useQuery({
      queryFn: () => OrdersService.getAppliedOrganizations({ slug }),
      queryKey: [OrdersQueryKeys.APPLIED_OERGANIZATIONS],
   });
};

export const useBookOrder = () => {
   return useMutation({
      mutationFn: OrdersService.bookingOrder,
      mutationKey: [OrdersQueryKeys.APPLIED_OERGANIZATIONS],
      onSuccess: () => {
         toast.success("Выбрана организация для выполения заказа");
      },
   });
};
