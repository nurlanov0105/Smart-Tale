import { baseApiInstance } from "@/shared/api/instance";
import { OrganizationEndpoints } from "@/shared/api/endpoints";
import {
   AddEmployeeRequestTypes,
   AddPositionRequestTypes,
   ChangePositionQueryTypes,
} from "@/shared/lib/types/organizations-service.types";

export const OrganizationService = {
   createOrganization: async (params: FormData) => {
      const headers = { "Content-Type": "multipart/form-data" };
      const response = await baseApiInstance.post(
         OrganizationEndpoints.ORGANIZATION_CREATE,
         params,
         {
            headers: headers,
         }
      );
      return response.data;
   },
   getOrganizationsList: async () => {
      const response = await baseApiInstance.get(OrganizationEndpoints.GET_MY_ORGANIZATIONS, {});
      return response.data;
   },
   getEmployees: async () => {
      const response = await baseApiInstance.get(OrganizationEndpoints.GET_EMPLOYEES, {});
      return response.data;
   },
   getOrganizationDetails: async (slug: string) => {
      const response = await baseApiInstance.get(OrganizationEndpoints.ORGANIZATION_DETAILS + slug);
      return response.data;
   },
   getEmployeeDetails: async (slug: string) => {
      const response = await baseApiInstance.get(OrganizationEndpoints.EMPLOYEE_DETAILS + slug);
      return response.data;
   },
   deleteEmployee: async (employeeSlug: string) => {
      const response = await baseApiInstance.delete(
         OrganizationEndpoints.DELETE_EMPLOYEE + employeeSlug
      );
      return response.data;
   },
   addEmployee: async (data: AddEmployeeRequestTypes) => {
      const response = await baseApiInstance.post(OrganizationEndpoints.ADD_EMPLOYEE, data);
      return response.data;
   },
   addPosition: async (data: AddPositionRequestTypes) => {
      const response = await baseApiInstance.post(OrganizationEndpoints.ADD_POSITION, data);
      return response.data;
   },
   getPositions: async () => {
      const response = await baseApiInstance.get(OrganizationEndpoints.GET_POSITIONS, {});
      return response.data;
   },
   getPositionDetails: async (slug: string) => {
      const response = await baseApiInstance.get(OrganizationEndpoints.DETAILS_POSITION + slug, {});
      return response.data;
   },
   changePosition: async ({ slug, params }: ChangePositionQueryTypes) => {
      console.log(1, params);
      const response = await baseApiInstance.put(OrganizationEndpoints.CHANGE_POSITION + slug, {
         data: params,
      });
      return response.data;
   },
   activateOrganization: async (slug: string) => {
      const response = await baseApiInstance.put(
         OrganizationEndpoints.ORGANIZATION_ACTIVATE + slug
      );
      return response.data;
   },
   deletePosition: async (slug: string) => {
      const response = await baseApiInstance.delete(OrganizationEndpoints.DELETE_POSITION + slug);
      return response.data;
   },
   getOrganizationsOrders: async () => {
      const response = await baseApiInstance.get(OrganizationEndpoints.GET_ORGANIZATION_ORDERS);
      return response.data;
   },
   getHistoryOrders: async () => {
      const response = await baseApiInstance.get(
         OrganizationEndpoints.GET_HISTORY_ORDERS + `?stage=active`
      );
      return response.data;
   },
   getEmployeeOrders: async (slug: string) => {
      const response = await baseApiInstance.get(OrganizationEndpoints.GET_EMPLOYEE_ORDERS + slug);
      return response.data;
   },
};
