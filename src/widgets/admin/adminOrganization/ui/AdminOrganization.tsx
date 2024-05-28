"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { EmptyContent } from "@/entities/admin/emptyContent";
import { OrganizationItem } from "@/entities/admin/organizationItem";
import { GlobalLoading } from "@/shared/ui";
import { useOrganization } from "../model/useOrganization";
import styles from "./styles.module.scss";
import {EMPTY_CONTENT_TYPES} from "@/shared/lib/constants/consts";

const AdminOrganization = () => {
   const [dataList, setData] = useState([
      { id: 1, type: "order", isActive: true },
      { id: 2, type: "order", isActive: false },
      { id: 3, type: "order", isActive: false },
      { id: 4, type: "order", isActive: false },
      { id: 5, type: "order", isActive: false },
      { id: 6, type: "order", isActive: false },
   ]);

   const { data, isLoading, isError, isSuccess } = useOrganization();

   const { replace } = useRouter();
   useEffect(() => {
      if (isSuccess && data) {
         console.log(data);
         // replace(ORGANIZATION_ROUTES.ORGANIZATION_DETAILS + "/name")
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isSuccess]);

   if (isLoading) return <GlobalLoading />;

   return (
      <>
         {!data?.length ? (
            <EmptyContent type={EMPTY_CONTENT_TYPES.organization} />
         ) : (
            <div className={styles.list}>
               <h4 className="h4">Список организаций</h4>
               {dataList.map((item) => (
                  <OrganizationItem key={item.id} item={item} />
               ))}
            </div>
         )}
      </>
   );
};

export default AdminOrganization;
