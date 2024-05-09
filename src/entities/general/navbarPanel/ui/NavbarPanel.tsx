import { FC } from "react";
import clsx from "clsx";
import {Menu, PanelLeft} from "lucide-react";
import {useNavbar} from "@/shared/lib";
import styles from "./styles.module.scss";

const NavbarPanel: FC = () => {

   const {hidden, handlePanelClick, handleMouseOver, handleMouseOut} = useNavbar()

   return (
      <button
         className={clsx(styles.btn, hidden && styles.btn_hidden)}
         onClick={handlePanelClick}
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}>
         {/*<PanelLeft />*/}
          <Menu />
      </button>
   );
};

export default NavbarPanel;
