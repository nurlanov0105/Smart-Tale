"use client";

import { useState } from "react";
import { useOrdersStore } from "../../navbarPanel";
import styles from "./styles.module.scss";

const NavbarLine = () => {
   const hidden = useOrdersStore((state) => state.hidden);
   const addHover = useOrdersStore((state) => state.addHover);
   const removeHover = useOrdersStore((state) => state.removeHover);
   const [timer, setTimer] = useState<number | null>(null);

   const handleMouseOver = () => {
      if (hidden) {
         setTimer(
            window.setTimeout(() => {
               addHover();
            }, 250)
         );
      }
   };

   const handleMouseLeave = () => {
      if (hidden) {
         removeHover();
         if (timer) {
            clearTimeout(timer);
         }
      }
   };
   return (
      <div className={styles.line} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
   );
};

export default NavbarLine;
