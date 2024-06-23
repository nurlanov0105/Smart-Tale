import {
   OrganizationsTypes,
   OrganizationItem,
   OrganizationActiveTypes,
} from "@/widgets/admin/adminOrganization/model/types";

export type TypesItemOrganization = {
   item: OrganizationItem;
   activeOrg?: OrganizationActiveTypes;
};
