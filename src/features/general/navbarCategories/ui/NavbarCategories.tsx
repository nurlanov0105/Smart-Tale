"use client"

import React, { FC } from "react";
import { NavbarItem } from "@/entities/user/navbarItem";
import { CategoryRoutes } from "../model/categoryRoutes";
import styles from "./styles.module.scss";
import { useAuth } from "@/shared/lib";

const NavbarCategories: FC = () => {
   // const isAuth = useAuth();
   const isAuth = true;

   const filteredNavbar = CategoryRoutes.map((item) => {
      if (isAuth || !item.authorized) {
         return <NavbarItem {...item} key={item.id} isAuth={isAuth} />;
      }
   });
   return <ul className={styles.list}>{filteredNavbar}</ul>;
};

export default NavbarCategories;
