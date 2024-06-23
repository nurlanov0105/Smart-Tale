export type OrganizationsTypes = {
   my_orgs: OrganizationItem[];
   orgs_active: ActiveOrganizationItem[];
   "other-orgs": OrganizationItem[];
};

export type ActiveOrganizationItem = {
   active: true;
   org_slug: string;
};

export type OrganizationItem = {
   // active: boolean
   description: string;
   logo: string | null;
   slug: string;
   title: string;
};

export type OrganizationActiveTypes = {
   org_slug: string;
   active: boolean;
};
