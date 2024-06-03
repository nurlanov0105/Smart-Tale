"use client";

import { FC } from "react";
import clsx from "clsx";
import { Menu, PanelLeft } from "lucide-react";
import { useNavbar } from "@/shared/lib";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/store/themeStore";

const NavbarPanel: FC = () => {
   const theme = useThemeStore((state) => state.theme);

   const { hidden, handlePanelClick, handleMouseOver, handleMouseOut } = useNavbar();

   return (
      <button
         className={clsx(styles.btn, hidden && styles.btn_hidden, styles[theme])}
         onClick={handlePanelClick}
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}>
         {/*<PanelLeft />*/}
         <Menu />
      </button>
   );
};

export default NavbarPanel;
