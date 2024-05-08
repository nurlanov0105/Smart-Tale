"use client";

import React, { FC } from "react";
import { NavbarItem } from "@/entities/user/navbarItem";
import { CategoryRoutes } from "../model/categoryRoutes";
import styles from "./styles.module.scss";

const NavbarCategories: FC = () => {

   return (
      <ul className={styles.list}>
         {CategoryRoutes
             .filter(category => category.isShow)
             .map((item) => (
            <NavbarItem {...item} key={item.id} />
         ))}
      </ul>
   );
};

export default NavbarCategories;
