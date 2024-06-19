"use client";

import React, { FC, PropsWithChildren, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ORGANIZATION_ROUTES, OWNER, ROUTES } from "@/shared/lib";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";
import { TypeComponentOrganizationFields } from "./types";

const CheckSubscribe: FC<PropsWithChildren<TypeComponentOrganizationFields>> = ({ children }) => {
   const pathname = usePathname();
   const { replace } = useRouter();

   const data = useSubscribeStore((state) => state.data);
   const isError = useSubscribeStore((state) => state.isError);
   const position = useSubscribeStore((state) => state.position);

   useEffect(() => {
      if (!!data) {
         const isSubscribe = data?.is_subbed;
         const hasPositions = false;

         if (!hasPositions && !isSubscribe) {
            replace(ORGANIZATION_ROUTES.NO_RIGHTS);
            return;
         }

         const isOwner = position?.job_title === OWNER;

         if (hasPositions && !isOwner && pathname === ORGANIZATION_ROUTES.ORGANIZATION_LIST) {
            const url = ORGANIZATION_ROUTES.ORGANIZATION_DETAILS + `/${position?.organization}`;
            replace(url);
            return;
         }

         if (!isSubscribe) {
            replace(ROUTES.SUBSCRIBE);
            return;
         }
      }
      if (isError) {
         replace(ROUTES.NO_RIGHTS);
         return;
      }

      // eslint-disable-next-line
   }, [data, isError, pathname, replace]);

   if (data?.is_subbed) return <>{children}</>;

   return null;
};

export default CheckSubscribe;
