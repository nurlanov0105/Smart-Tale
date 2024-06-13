import React from "react";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import { AdminOrganization } from "@/widgets/admin/adminOrganization";
import type {OrganizationsTypes} from "@/widgets/admin/adminOrganization";
import {ErrorMessage} from "@/entities/general/errorMessage";
import {BASE_URL} from "@/shared/api/instance";
import {ORGANIZATION_ROUTES} from "@/shared/lib";
import {OrganizationEndpoints} from "@/shared/api/endpoints";


export default async function OrganizationAdminPage () {
   const data: OrganizationsTypes = await fetchOrganization()

   if (!data) return <ErrorMessage/>

   const myOrg = data["my-orgs"]
   const otherOrg = data["other-orgs"]

   const myOrganization = myOrg.find(organization => organization.active)

   if (!myOrganization){
      const otherOrganization = otherOrg.find(organization => organization.active)
      const route = otherOrganization || otherOrg[0].slug

      redirect(ORGANIZATION_ROUTES.ORGANIZATION_DETAILS + `/${route}`)
   }

   return <AdminOrganization organization={data}/>;
};


const fetchOrganization = async () => {
   try {
      const accessToken = cookies().get("accessToken")
      const res = await fetch(BASE_URL + OrganizationEndpoints.GET_MY_ORGANIZATIONS, {
         headers: {
            Authorization: `Bearer ${accessToken?.value}`,
            'Content-Type': 'application/json',
         },
      });
      if (!res.ok){
         throw new Error("Произошла ошибка при запросе")
      }

      return res.json();

   } catch (err){
      console.error('Ошибка при обработке запроса:', err);
   }

};