import { FC } from "react";
import { NavbarItem } from "@/entities/navbarItem";
import { CategoryRoutes } from "../model/categoryRoutes";

const NavbarCategories: FC = () => {
   return (
      <ul>
         {CategoryRoutes.map((item) => (
            <NavbarItem {...item} key={item.id} />
         ))}
      </ul>
   );
};

export default NavbarCategories;
