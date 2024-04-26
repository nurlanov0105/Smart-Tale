"use client";

import { usePathname } from "next/navigation";
import { PathData } from "../model/consts";
import styles from "./styles.module.scss";

const HeaderIntro = () => {
   const pathname = usePathname() as string;

   const pathArray = pathname.split("/");
   const slug =
      pathname.includes("/order-details/") ||
      pathname.includes("/card-details/") ||
      pathname.includes("/employees-details/") ||
      pathname.includes("/employees-settings/")
         ? pathArray.pop()
         : "";
   const remainingPath = pathArray.join("/");

   return (
       <div className={styles.intro}>
          {!slug ? (
              <>
                 <span>{PathData[pathname]?.path}</span>
                 <h2 className="h2">{PathData[pathname]?.name}</h2>
              </>
          ) : (
              <>
                 <span>{PathData[remainingPath]?.path}</span>
                 <h2 className="h2">{PathData[remainingPath]?.name}</h2>
              </>
          )}
       </div>
   );
};

export default HeaderIntro;
