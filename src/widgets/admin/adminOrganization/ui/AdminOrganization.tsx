"use client";
import React from "react";
import { EmptyContent } from "@/entities/admin/emptyContent";
import { OrganizationItem } from "@/entities/admin/organizationItem";
import { GlobalLoading } from "@/shared/ui";
import {EMPTY_CONTENT_TYPES} from "@/shared/lib/constants/consts";
import { useOrganization } from "../model/useOrganization";
import OrganizationProvider from "./OrganizationProvider";
import styles from "./styles.module.scss";

const AdminOrganization = () => {

   const { data, isLoading, isError, isSuccess } = useOrganization();
   const organizations = data && data["my-orgs"]

    if (isLoading) return <GlobalLoading />;

   return (
      <OrganizationProvider>
         <>
            {!organizations?.length ? (
                <EmptyContent type={EMPTY_CONTENT_TYPES.organization} />
            ) : (
                <div className={styles.list}>
                   <h4 className="h4">Список организаций</h4>
                   {organizations?.map((item) => (
                       <OrganizationItem
                           key={item.slug}
                           item={item}
                       />
                   )).reverse()}
                </div>
            )}
         </>
      </OrganizationProvider>
   );
};

export default AdminOrganization;
