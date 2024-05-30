"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { EmptyContent } from "@/entities/admin/emptyContent";
import { OrganizationItem } from "@/entities/admin/organizationItem";
import { GlobalLoading } from "@/shared/ui";
import {EMPTY_CONTENT_TYPES} from "@/shared/lib/constants/consts";
import { useOrganization } from "../model/useOrganization";
import styles from "./styles.module.scss";
import {ORGANIZATION_ROUTES} from "@/shared/lib";

const AdminOrganization = () => {

   const { data, isLoading, isError, isSuccess } = useOrganization();

   const [loading, setLoading] = useState(true)

   const { replace } = useRouter();

   const isMe = true

   useEffect(() => {
      if (isSuccess && data) {
         console.log(data);
         if (!isMe){
            replace(ORGANIZATION_ROUTES.ORGANIZATION_DETAILS + `/${data[data?.length - 1].slug}`)
         }else {
            setLoading(false)
         }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isSuccess]);

   if (isLoading || loading) return <GlobalLoading />;

   return (
      <>
         {!data?.length ? (
            <EmptyContent type={EMPTY_CONTENT_TYPES.organization} />
         ) : (
            <div className={styles.list}>
               <h4 className="h4">Список организаций</h4>
               {data.map((item) => (
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
