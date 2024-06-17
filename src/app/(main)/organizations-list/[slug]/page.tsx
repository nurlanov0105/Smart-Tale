import dynamic from "next/dynamic";
const OrganizationDetail = dynamic(() => import("@/views/organizationDetail/ui/OrganizationDetail"))
const OrganizationsListPage = () => {
   return <OrganizationDetail />;
};

export default OrganizationsListPage;
