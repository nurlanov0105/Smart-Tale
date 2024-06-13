"use client";
import React, {FC} from "react";
import { EmptyContent } from "@/entities/admin/emptyContent";
import { OrganizationItem } from "@/entities/admin/organizationItem";
import {Button} from "@/shared/ui";
import {EMPTY_CONTENT_TYPES} from "@/shared/lib/constants/consts";
import {ORGANIZATION_ROUTES} from "@/shared/lib";
import {useRouter} from "next/navigation";
import {OrganizationsTypes} from "../model/types";
import styles from "./styles.module.scss";

const AdminOrganization:FC<{organization: OrganizationsTypes}> = ({organization}) => {

   // const { data, isLoading, isError, isSuccess } = useOrganization();
   const organizations = organization && organization["my-orgs"]

    const {push} = useRouter()
    const handleAdd = () => push(ORGANIZATION_ROUTES.CREATE_ORGANIZATION)


   return (
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
   );
};

export default AdminOrganization;
