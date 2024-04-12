"use client";

import { FC, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { NavbarItemProps } from "../model/types";

const NavbarItem: FC<NavbarItemProps> = ({ title, id, routes }) => {
   const [isActive, setisActive] = useState(false);
   const handleClick = (item: any) => {
      if (id === item.parentId) {
         setisActive(isActive);
      }
   };

   return (
      <li>
         <h3 className={clsx("h3", isActive ? "active" : "")}> {title}</h3>
         {routes.map((item: any) => (
            <div key={item.subtitle} onClick={() => handleClick(item)}>
               {item.subtitle}
            </div>
         ))}
      </li>
   );
};

export default NavbarItem;
