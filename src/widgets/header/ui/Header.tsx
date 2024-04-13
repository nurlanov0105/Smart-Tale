"use client";

import { HeaderIntro } from "@/entities/headerIntro";
import { NoticeBtn } from "@/entities/noticeBtn";
import { useAuth } from "@/shared/lib";

import styles from "./styles.module.scss";
import clsx from "clsx";
import { Search } from "@/features/search";

const Header = () => {
   const isAuth = useAuth();
   return (
      <div className={clsx(styles.header, styles.header_mb)}>
         <div className={clsx(styles.header__block, styles.header_left)}>
            <HeaderIntro />
         </div>
         <div className={clsx(styles.header__block, styles.header_right)}>
            <Search />
            <NoticeBtn />
         </div>
      </div>
   );
};

export default Header;
