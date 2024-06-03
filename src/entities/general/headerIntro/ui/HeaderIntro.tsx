"use client";

import { usePathname } from "next/navigation";
import { PathData } from "../model/consts";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/store/themeStore";
import clsx from "clsx";
import { ROUTES } from "@/shared/lib";

const HeaderIntro = () => {
   const theme = useThemeStore((state) => state.theme);
   const pathname = usePathname() as string;

   const pathArray = pathname.split("/");
   const slug =
      pathname.includes("/order-details/1/") ||
      pathname.includes("/order-details/2/") ||
      pathname.includes("/order-details/3/") ||
      pathname.includes("/card-details/1/") ||
      pathname.includes("/card-details/2/") ||
      pathname.includes("/card-details/3/") ||
      pathname.includes("/employees-details/") ||
      pathname.includes("/employees-settings/") ||
      pathname.includes("/organization-details/") ||
      pathname.includes("/vacancy-detail/") ||
      pathname.includes("/announcement-details/") ||
      pathname.includes("/position-details/") ||
      pathname.includes("/resume-details/") ||
      pathname.includes("/resume-info/") ||
      pathname.includes("/users/")
      pathname.includes("/users/") ||
      pathname.includes("/organizations-list/") ||
      pathname.includes("/organization/announcement-details/") ||
      pathname.includes("/resume-details/")
         ? pathArray.pop()
         : "";
   const remainingPath = pathArray.join("/");

   return (
      <div className={clsx(styles.intro, styles[theme])}>
         {!slug ? (
            <>
               <span>
                  {pathname.includes("/search")
                     ? PathData[ROUTES.SEARCH]?.path
                     : PathData[pathname]?.path}
               </span>
               <h2 className="h2">
                  {pathname.includes("/search")
                     ? PathData[ROUTES.SEARCH]?.name
                     : PathData[pathname]?.name}
               </h2>
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
