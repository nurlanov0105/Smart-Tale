"use client";

import React, { FC } from "react";
import { NavbarItem } from "@/entities/user/navbarItem";
import { getCategoryRoutes } from "../model/getCategoryRoutes";
import { useAuth, useSubscribed } from "@/shared/lib";
import styles from "./styles.module.scss";

const NavbarCategories: FC = () => {
   const isAuth = useAuth();
   const { isSubscribed, subscribed } = useSubscribed();

   const categories = getCategoryRoutes({ authorized: isAuth, subscribed: true });

   return (
      <ul className={styles.list}>
         {categories.map((item) => (
            <NavbarItem {...item} key={item.id} isAuth={isAuth} />
         ))}
      </ul>
   );
};

export default NavbarCategories;
