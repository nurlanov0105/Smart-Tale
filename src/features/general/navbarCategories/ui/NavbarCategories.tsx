"use client";

import React, { FC } from "react";
import { NavbarItem } from "@/entities/user/navbarItem";
import { getCategoryRoutes } from "../model/getCategoryRoutes";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";
import styles from "./styles.module.scss";

const NavbarCategories: FC<{ isAuth: boolean }> = ({ isAuth }) => {
   const data = useSubscribeStore((state) => state.data);

   const isSubscribedWithOrg = !!data?.job_titles?.filter(item => item.active).length;

   const categories = getCategoryRoutes({
      authorized: isAuth,
      subscribed: data?.is_subbed || false,
      hasOrganization: isSubscribedWithOrg,
   });

   return (
      <ul className={styles.list}>
         {categories.map((item) => (
            <NavbarItem {...item} key={item.id} isAuth={isAuth} />
         ))}
      </ul>
   );
};

export default NavbarCategories;
