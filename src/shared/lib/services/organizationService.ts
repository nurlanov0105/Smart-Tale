import { baseApiInstance } from "@/shared/api/instance";
import { OrganizationEndpoints } from "@/shared/api/endpoints";
import {
   AddEmployeeRequestTypes,
   ChangePositionQueryTypes,
   UpdateEmployeeTypes,
   AddPositionRequestTypes,
} from "@/shared/lib";

export const OrganizationService = {
   createOrganization: async (params: FormData) => {
      const headers = { "Content-Type": "multipart/form-data" };
      const response = await baseApiInstance.post(OrganizationEndpoints.ORGANIZATION_CREATE,
         params,
         {
            headers: headers,
         }
      );
      return response.data;
   },
   updateOrganization: async (data: any, slug: string) => {
      const headers = { "Content-Type": "multipart/form-data" };
      const response = await baseApiInstance.put(
         OrganizationEndpoints.ORGANIZATION_DETAILS + slug,
         data,
         { headers: headers }
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
      const response = await baseApiInstance.put(
         OrganizationEndpoints.CHANGE_POSITION + slug + "/",
         params
      );
      return response.data;
   },
   updateEmployee: async ({ employeeSlug, positionSlug }: UpdateEmployeeTypes) => {
      const response = await baseApiInstance.put(
         OrganizationEndpoints.UPDATE_EMPLOYEE + employeeSlug + "/",
         { jt_slug: positionSlug }
      );
      return response.data;
   },
   activateOrganization: async (slug: string) => {
      const response = await baseApiInstance.put(
         OrganizationEndpoints.ORGANIZATION_ACTIVATE + slug
      );
      return response.data;
   },
   leaveOrganization: async (orgSlug: string) => {
      const response = await baseApiInstance.delete(OrganizationEndpoints.LEAVE_ORGANIZATION, {
         data: {org_slug: orgSlug}
      });
      return response.data;
   },
   deletePosition: async (slug: string) => {
      const response = await baseApiInstance.delete(OrganizationEndpoints.DELETE_POSITION + slug);
      return response.data;
   },
   deleteOrganization: async (slug: string) => {
      const response = await baseApiInstance.delete(
         OrganizationEndpoints.ORGANIZATION_DELETE + slug
      );
      return response.data;
   },
   getOrganizationsOrders: async () => {
      const response = await baseApiInstance.get(OrganizationEndpoints.GET_ORGANIZATION_ORDERS);
      return response.data;
   },
   getHistoryOrders: async (type?: string) => {
      const response = await baseApiInstance.get(OrganizationEndpoints.GET_HISTORY_ORDERS + `?stage=${type}`);
      return response.data?.data;
   },
   getEmployeeOrders: async (slug: string) => {
      const response = await baseApiInstance.get(OrganizationEndpoints.GET_EMPLOYEE_ORDERS + slug);
      return response.data;
   },
   updateOrderStatus: async (parameters: string) => {
      const response = await baseApiInstance.post(
         OrganizationEndpoints.UPDATE_ORDER_STATUS + parameters
      );
      return response.data;
   },
};
