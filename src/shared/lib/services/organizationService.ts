import {baseApiInstance} from "@/shared/api/instance";
import {OrdersEndpoints} from "@/shared/api";
import {OrganizationEndpoints} from "@/shared/api/endpoints";
import {AddPositionRequestTypes, AddPositionTypes} from "@/shared/lib/types/organizations-service.types";

export const OrganizationService = {
    createOrganization: async (params: FormData) => {
        const headers = { "Content-Type": "multipart/form-data" };
        const response = await baseApiInstance.post(OrganizationEndpoints.ORGANIZATION_CREATE, params, {
            headers: headers,
        });
        return response.data;
    },
    getOrganizationsList: async () => {
        const response = await baseApiInstance.get(OrganizationEndpoints.GET_USER_ORGANIZATIONS, {});
        return response.data;
    },
    getEmployees: async () => {
        const response = await baseApiInstance.get(OrganizationEndpoints.GET_EMPLOYEES, {});
        return response.data;
    },
    getOrganizationDetails: async (slug: string) => {
        const response = await baseApiInstance.get(OrganizationEndpoints.ORGANIZATION_DETAILS + slug, {});
        return response.data;
    },
    getEmployeeDetails: async (employeeSlug: string) => {
        const response = await baseApiInstance.post(OrganizationEndpoints.EMPLOYEE_DETAILS + employeeSlug);
        return response.data;
    },
    deleteEmployee: async (employeeSlug: string) => {
        const response = await baseApiInstance.delete(OrganizationEndpoints.DELETE_EMPLOYEE, {data: employeeSlug});
        return response.data;
    },
    addEmployee: async (data: any) => {
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

}