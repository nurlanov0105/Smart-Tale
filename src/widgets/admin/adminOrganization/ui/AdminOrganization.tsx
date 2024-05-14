"use client";
import React, {useEffect, useState} from "react";
import { EmptyContent } from "@/entities/admin/emptyContent";
import { OrganizationItem } from "@/entities/admin/organizationItem";
import styles from "./styles.module.scss";
import {useRouter} from "next/navigation";
import {ORGANIZATION_ROUTES} from "@/shared/lib";

const AdminOrganization = () => {

   const [data, setData] = useState([
      { id: 1, type: "order", isActive: true },
      { id: 2, type: "order", isActive: false },
      { id: 3, type: "order", isActive: false },
      { id: 4, type: "order", isActive: false },
      { id: 5, type: "order", isActive: false },
      { id: 6, type: "order", isActive: false },
   ]);
   // const {replace} = useRouter()

   // useEffect(() => {
   //    if (data.length === 1){
   //       replace(ORGANIZATION_ROUTES.ORGANIZATION_DETAILS + "/name")
   //    }
   // }, [])

   return (
      <>
         {!data.length ? (
            <EmptyContent type="organization" />
         ) : (
            <div className={styles.list}>
               <h4 className="h4">Список организаций</h4>
               {data.map((item) => (
                  <OrganizationItem key={item.id} item={item} />
               ))}
            </div>
         )}
      </>
   );
};

export default AdminOrganization;
