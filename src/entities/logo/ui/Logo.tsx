import React from "react";
import logo from "@@/logo.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { ROUTES } from "@/shared/lib";

const Logo = () => {
   return (
      <div className={styles.logo}>
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
   );
};

export default Logo;
