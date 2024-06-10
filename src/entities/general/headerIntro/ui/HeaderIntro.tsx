"use client";

import { usePathname } from "next/navigation";
import { PathData } from "../model/consts";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/store/themeStore";
import clsx from "clsx";
import { ROUTES } from "@/shared/lib";
import { usePathSlug } from "../model/usePathSlug";

const HeaderIntro = () => {
   const theme = useThemeStore((state) => state.theme);
   const { pathname, slug, remainingPath } = usePathSlug();

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
