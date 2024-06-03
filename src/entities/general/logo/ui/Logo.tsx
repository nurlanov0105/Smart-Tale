import React, { FC } from "react";
import logo from "@@/logo.svg";
import { ROUTES } from "@/shared/lib";
import type { LogoProps } from "../model/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";

const Logo: FC<LogoProps> = ({ type = "navbar", data }) => {
   const theme = useThemeStore((state) => state.theme);

   return (
      <>
         {type === "organization" ? (
            <div className={clsx(styles.logo, styles[theme])}>
               <Link href={ROUTES.MARKETPLACE_EQUIPMENT}>
                  <Image
                     className={styles.logo__imageOrganization}
                     src={logo}
                     alt="logo"
                     width={70}
                     height={70}
                     priority
                  />
               </Link>
               <h1 className="h1">{data?.title}</h1>
               <p className={styles.logo__text}>{data?.description}</p>
            </div>
         ) : (
            <div className={clsx(styles.logo, styles[theme])}>
               <Link href={ROUTES.MARKETPLACE_EQUIPMENT}>
                  <Image
                     className={styles.logo__image}
                     src={logo}
                     alt="logo"
                     width={70}
                     height={70}
                     priority
                  />
               </Link>
               <h1 className="h1">SmartTale</h1>
               <p className={styles.logo__text}>Мониторинг и управление швейным производством</p>
            </div>
         )}
      </>
   );
};

export default Logo;
