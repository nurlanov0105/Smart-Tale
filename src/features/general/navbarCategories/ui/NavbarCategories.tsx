"use client"

import React, {FC} from "react";
import { NavbarItem } from "@/entities/user/navbarItem";
import { CategoryRoutes } from "../model/categoryRoutes";
import { useAuth } from "@/shared/lib";
import styles from "./styles.module.scss";

const NavbarCategories: FC = () => {
    // const isAuth = useAuth();
   const isAuth = useAuth();

   const isSubscribed = true

   const filteredNavbar = CategoryRoutes.map((item) => {
      if ((item.role === "authorized" && isAuth)
          || (item.role === "subscribed" && isSubscribed)
            || (item.role === "unAuthorized")
      ) {
         return <NavbarItem {...item} key={item.id} isAuth={isAuth} />;
      }
   });
   return <ul className={styles.list}>{filteredNavbar}</ul>;
};

export default NavbarCategories;
