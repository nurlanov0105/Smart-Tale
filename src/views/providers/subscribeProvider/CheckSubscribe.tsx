"use client";

import React, {FC, PropsWithChildren, useCallback, useEffect, useMemo, useState} from "react";
import { usePathname, useRouter } from "next/navigation";
import { ORGANIZATION_ROUTES, OWNER, ROUTES } from "@/shared/lib";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";
import { TypeComponentOrganizationFields } from "./types";
import {RIGHT_ACTIONS} from "@/shared/lib/constants/consts";

const CheckSubscribe: FC<PropsWithChildren<TypeComponentOrganizationFields>> = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);

   const pathname = usePathname();
   const { replace } = useRouter();

   const data = useSubscribeStore((state) => state.data);
   const isError = useSubscribeStore((state) => state.isError);
   const position = useSubscribeStore((state) => state.position);

   const routes = useMemo(() => {
      return [
         {route: ORGANIZATION_ROUTES.INVITE_EMPLOYEES, right: RIGHT_ACTIONS.ADD_EMPLOYEE},
         {route: ORGANIZATION_ROUTES.CREATE_VACANCY, right: RIGHT_ACTIONS.CREATE_POSITION},
         {route: ORGANIZATION_ROUTES.ADD_POSITION, right: RIGHT_ACTIONS.CREATE_POSITION},
      ]
   }, []);

   const handleNoRights = useCallback(() => {
      replace(ORGANIZATION_ROUTES.NO_RIGHTS);
      // eslint-disable-next-line
   },[]);

   useEffect(() => {
      if (!!data) {
         const isSubscribe = data?.is_subbed;
         const hasPositions = !!data.job_titles?.filter(item => item.active).length;

         if (!hasPositions && !isSubscribe) {
            replace(ROUTES.NO_RIGHTS);
            return;
         }

         const isOwner = data?.org.founder === data?.profile.slug; //data?.org?.title === OWNER

         if (hasPositions && !isOwner && pathname === ORGANIZATION_ROUTES.ORGANIZATION_LIST) {
            const url = ORGANIZATION_ROUTES.ORGANIZATION_DETAILS + `/${position?.slug}`;
            replace(url);
            return;
         }


         for (const {route, right} of routes){
            if (pathname.includes(route) && !position[right]){
               handleNoRights();
               return;
            }
         }
      }

      if (isError) {
         replace(ROUTES.NO_RIGHTS);
         return;
      }

      if (!!data){
         setIsLoading(false)
      }

      // eslint-disable-next-line
   }, [data, isError, pathname, replace]);

   if (isLoading) return null;

   return (
       <span>{children}</span>
   )

};

export default CheckSubscribe;
