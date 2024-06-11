"use client";
import React from "react";
import { EmptyContent } from "@/entities/admin/emptyContent";
import { OrganizationItem } from "@/entities/admin/organizationItem";
import {Button, GlobalLoading} from "@/shared/ui";
import {EMPTY_CONTENT_TYPES} from "@/shared/lib/constants/consts";
import { useOrganization } from "../model/useOrganization";
import OrganizationProvider from "./OrganizationProvider";
import styles from "./styles.module.scss";
import {ORGANIZATION_ROUTES} from "@/shared/lib";
import {useRouter} from "next/navigation";

const AdminOrganization = () => {

   const { data, isLoading, isError, isSuccess } = useOrganization();
   const organizations = data && data["my-orgs"]

    const {push} = useRouter()
    const handleAdd = () => push(ORGANIZATION_ROUTES.CREATE_ORGANIZATION)

    if (isLoading) return <GlobalLoading />;

   return (
      <OrganizationProvider>
         <>
            {!organizations?.length ? (
                <EmptyContent type={EMPTY_CONTENT_TYPES.organization} />
            ) : (
                <div className={styles.list}>
                    <div className={styles.list__top}>
                        <h4 className="h4">Список организаций</h4>
                        <Button onClick={handleAdd}>Добавить организацию</Button>
                    </div>
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
