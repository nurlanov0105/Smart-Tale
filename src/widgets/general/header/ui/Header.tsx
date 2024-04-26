"use client";

import { HeaderIntro } from "@/entities/general/headerIntro";
import { NoticeBtn } from "@/entities/general/noticeBtn";
import { ROUTES, useAuth } from "@/shared/lib";

import styles from "./styles.module.scss";
import clsx from "clsx";
import { Search } from "@/features/general/search";
import Link from "next/link";

const Header = () => {
   const isAuth = useAuth();

   return (
      <div className={clsx(styles.header, styles.header_mb)}>
         <div className={clsx(styles.header__block, styles.header_left)}>
            <HeaderIntro />
         </div>
         <div className={clsx(styles.header__block, styles.header_right)}>
            <Link href={ROUTES.MODE}>Mode</Link>
            <Link href={ROUTES.SIGN_IN}>Login</Link>
            <Search />
            <NoticeBtn />
         </div>
      </div>
   );
};

export default Header;
