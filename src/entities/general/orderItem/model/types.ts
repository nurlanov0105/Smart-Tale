import { EmployeeOrderTypes } from "@/entities/admin/adminEmployeesItem/model/types";

export type ItemProps = {
   item: EmployeeOrderTypes;
   isCurrent?: boolean;
   isOrganization?: boolean;
};
