import { OrganizationQueryKeys } from "@/shared/api";
import { OrdersService } from "@/shared/lib";
import { useMutation, useQuery } from "@tanstack/react-query";

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
   return useMutation({
      mutationFn: OrdersService.addEmployeeOrder,
      mutationKey: [OrganizationQueryKeys.EMPLOYEE_ORDERS],
   });
};
export const useRemoveEmployeeOrder = () => {
   return useMutation({
      mutationFn: OrdersService.removeEmployeeOrder,
      mutationKey: [OrganizationQueryKeys.EMPLOYEE_ORDERS],
   });
};
