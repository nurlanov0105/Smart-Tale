"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import { PathData } from "../model/consts";

const HeaderIntro = () => {
   const pathname = usePathname();

   return (
      <div className={styles.intro}>
         <span>{PathData[pathname]?.path}</span>
         <h2 className="h2">{PathData[pathname]?.name}</h2>
      </div>
   );
};

export default HeaderIntro;
