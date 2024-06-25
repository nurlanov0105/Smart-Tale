import { OrganizationQueryKeys } from "@/shared/api";
import { OrdersService, OrganizationService } from "@/shared/lib";
import { closeModal } from "@/views/modal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useGetOrderEmployees = (slug: string) => {
   return useQuery({
      queryKey: [OrganizationQueryKeys.EMPLOYEE_ORDERS],
      queryFn: () => OrdersService.getOrderEmployees(slug),
   });
};
export const useGetOrderDetail = (slug: string) => {
   return useQuery({
      queryKey: [OrganizationQueryKeys.GET_ORDERS],
      queryFn: () => OrdersService.getMyOrder(slug),
   });
};

export const useAddEmployeeOrder = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: OrdersService.addEmployeeOrder,
      mutationKey: [OrganizationQueryKeys.ADD_EMPLOYEE_ORDER],
      onSuccess: () => {
         closeModal();
         toast.success("Сотрудник был успешно выбран");
         queryClient.invalidateQueries({ queryKey: [OrganizationQueryKeys.EMPLOYEE_ORDERS] });
         queryClient.invalidateQueries({ queryKey: [OrganizationQueryKeys.EMPLOYEES] });
      },
   });
};
export const useRemoveEmployeeOrder = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: OrdersService.removeEmployeeOrder,
      mutationKey: [OrganizationQueryKeys.REMOVE_EMPLOYEE_ORDER],
      onSuccess: () => {
         closeModal();
         toast.success("Сотрудник был успешно снят с заказа");
         queryClient.invalidateQueries({ queryKey: [OrganizationQueryKeys.EMPLOYEE_ORDERS] });
         queryClient.invalidateQueries({ queryKey: [OrganizationQueryKeys.EMPLOYEES] });
      },
   });
};

export const useGetCurrentOrders = (type: string) => {
   return useQuery({
      queryKey: [OrganizationQueryKeys.HISTORY_ORDERS],
      queryFn: () => OrganizationService.getHistoryOrders(type),
   });
};
