"use client";

import React, { FC } from "react";
import { NavbarItem } from "@/entities/user/navbarItem";
import { getCategoryRoutes } from "../model/getCategoryRoutes";
import {CookiesServices, useAuth, useSubscribed} from "@/shared/lib";
import styles from "./styles.module.scss";
import jwt from "jsonwebtoken";
import {useOrganization} from "@/widgets/admin/adminOrganization/model/useOrganization";

const NavbarCategories: FC<{isAuth: boolean}> = ({isAuth}) => {
   const { isSubscribed, subscribed } = useSubscribed();

   const {data} = useOrganization(isAuth)

   const isSubscribedWithOrg = data && !!data["my-orgs"].length
   const isEmployee = data && (!!data["my-orgs"].length || !!data["other-orgs"].length) || false

   const categories = getCategoryRoutes({
      authorized: isAuth,
      subscribed: isSubscribed,
      isEmployee,
      hasOrganization: isSubscribedWithOrg
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
