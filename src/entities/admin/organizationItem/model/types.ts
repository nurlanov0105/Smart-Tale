import {
   OrganizationsTypes,
   OrganizationItem,
   ActiveOrganizationItem,
} from "@/widgets/admin/adminOrganization/model/types";

export type TypesItemOrganization = {
   item: OrganizationItem;
   activeOrg?: ActiveOrganizationItem;
};
