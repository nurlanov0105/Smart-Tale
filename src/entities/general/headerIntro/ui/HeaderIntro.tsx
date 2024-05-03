"use client";

import { usePathname } from "next/navigation";
import { PathData } from "../model/consts";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";

const HeaderIntro = () => {
   const theme = useThemeStore((state) => state.theme);
   const pathname = usePathname() as string;

   const pathArray = pathname.split("/");
   const slug =
      pathname.includes("/order-details/") ||
      pathname.includes("/card-details/") ||
      pathname.includes("/employees-details/") ||
      pathname.includes("/employees-settings/") ||
      pathname.includes("/users/")
         ? pathArray.pop()
         : "";
   const remainingPath = pathArray.join("/");

   return (
      <div className={clsx(styles.intro, styles[theme])}>
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
