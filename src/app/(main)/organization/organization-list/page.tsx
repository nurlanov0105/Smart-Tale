import React from "react";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import { AdminOrganization } from "@/widgets/admin/adminOrganization";
import type {OrganizationsTypes} from "@/widgets/admin/adminOrganization";
import {ErrorMessage} from "@/entities/general/errorMessage";
import {BASE_URL} from "@/shared/api/instance";
import {ORGANIZATION_ROUTES} from "@/shared/lib";
import {OrganizationEndpoints} from "@/shared/api/endpoints";

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const runtime = 'edge';

export default async function OrganizationAdminPage () {
   // const data: OrganizationsTypes = await fetchOrganization()
   //
   // if (!data) return <ErrorMessage/>
   //
   // const myOrg = data["my-orgs"]
   // const otherOrg = data["other-orgs"]
   //
   // const myOrganization = myOrg.find(organization => organization.active)
   //
   // if (!myOrganization){
   //    const otherOrganization = otherOrg.find(organization => organization.active)
   //    const route = otherOrganization || otherOrg[0]?.slug
   //
   //
   //    if (route){
   //       redirect(ORGANIZATION_ROUTES.ORGANIZATION_DETAILS + `/${route}`)
   //    }
   // }

   return <AdminOrganization/>;
};



// const fetchOrganization = async () => {
//    try {
//       const accessToken = cookies().get("accessToken")
//
//       const timestamp = new Date().getTime()
//       const url = BASE_URL + OrganizationEndpoints.GET_MY_ORGANIZATIONS + `?timestamp=${timestamp}`
//
//       const res = await fetch(url, {
//          headers: {
//             Authorization: `Bearer ${accessToken?.value}`,
//             'Content-Type': 'application/json',
//             'Cache-Control': 'no-cache, no-store, must-revalidate'
//          },
//          cache: "no-store",
//
//       });
//       if (!res.ok){
//          throw new Error("Произошла ошибка при запросе")
//       }
//
//       return res.json();
//
//    } catch (err){
//       console.error('Ошибка при обработке запроса:', err);
//    }
//
// };