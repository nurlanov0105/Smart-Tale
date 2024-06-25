"use client";

import React, { FC, useEffect } from "react";
import { EmptyContent } from "@/entities/admin/emptyContent";
import { OrganizationItem } from "@/entities/admin/organizationItem";
import { Button, GlobalLoading } from "@/shared/ui";
import { EMPTY_CONTENT_TYPES } from "@/shared/lib/constants/consts";
import { ORGANIZATION_ROUTES, useConfettiStore } from "@/shared/lib";
import { useRouter } from "next/navigation";
import { ConfettiComponent } from "@/entities/general/confetti";
import { useOrganization } from "@/widgets/admin/adminOrganization/model/useOrganization";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";
import { ErrorMessage } from "@/entities/general/errorMessage";
import styles from "./styles.module.scss";

const AdminOrganization: FC = () => {
   const { data, isLoading, isError, isSuccess } = useOrganization();

   const organizations = data && data.my_orgs;
   const activeOrg = data && data["orgs_active"].find((item) => item.active);

   const positions = useSubscribeStore((state) => state.data?.job_titles);
   const isSubscribe = useSubscribeStore((state) => state.isSubscribe);
   const subscription = useSubscribeStore((state) => state.data?.subscription);
   const dataProfile = useSubscribeStore((state) => state.data);
   const isShow = useConfettiStore((state) => state.isShow);
   const endConfetti = useConfettiStore((state) => state.endConfetti);

   const MAX_ORGANIZATIONS_CREATING = 5;
   const MIN_ORGANIZATIONS_CREATING = 1;
   const isShowButton = () => {
      if (isSubscribe && subscription && positions?.length === MIN_ORGANIZATIONS_CREATING) {
         return;
      }
      if (
         isSubscribe &&
         !subscription &&
         positions?.length === MIN_ORGANIZATIONS_CREATING &&
         dataProfile?.profile.slug !== dataProfile?.org.founder
      ) {
         return;
      }

      if (isSubscribe && !subscription && positions?.length === MAX_ORGANIZATIONS_CREATING) {
         return;
      }
      return true;
   };

   const { push } = useRouter();
   const handleAdd = () => push(ORGANIZATION_ROUTES.CREATE_ORGANIZATION);

   useEffect(() => {
      if (isShow) {
         setTimeout(() => {
            endConfetti();
         }, 7000);
      }
      // eslint-disable-next-line
   }, []);

   if (isLoading) return <GlobalLoading type="default" />;
   if (isError) return <ErrorMessage />;

   return (
      <>
         {!organizations?.length ? (
            <EmptyContent type={EMPTY_CONTENT_TYPES.organization} />
         ) : (
            <div className={styles.list}>
               <div className={styles.list__top}>
                  <h4 className="h4">Список организаций</h4>
                  {isShowButton() && <Button onClick={handleAdd}>Добавить организацию</Button>}
               </div>
               {organizations?.map((item) => (
                  <OrganizationItem activeOrg={activeOrg} key={item.slug} item={item} />
               ))}
            </div>
         )}
         <ConfettiComponent showConfetti={isShow} />
      </>
   );
};

export default AdminOrganization;
