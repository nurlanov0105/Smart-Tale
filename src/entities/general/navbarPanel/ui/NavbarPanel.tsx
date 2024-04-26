// NavbarPanel.tsx
import { PanelLeft } from "lucide-react";
import { useOrdersStore } from "../model/useNavbarStore";
import { FC, useCallback } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

const NavbarPanel: FC = () => {
   const hidden = useOrdersStore((state) => state.hidden);
   const hover = useOrdersStore((state) => state.hover);
   const toggleHidden = useOrdersStore((state) => state.toggleHidden);
   const addHover = useOrdersStore((state) => state.addHover);
   const removeHover = useOrdersStore((state) => state.removeHover);

   const handlePanelClick = () => {
      removeHover();

      toggleHidden();
   };

   const handleMouseOver = useCallback(() => {
      if (hidden) {
         addHover();
      }
   }, [addHover, hidden]);

   const handleMouseOut = useCallback(() => {
      if (hidden && hover) {
         removeHover();
      }
   }, [hidden, hover, removeHover]);

   return (
      <button
         className={clsx(styles.btn, hidden && styles.btn_hidden)}
         onClick={handlePanelClick}
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}>
         <PanelLeft />
      </button>
   );
};

export default NavbarPanel;
