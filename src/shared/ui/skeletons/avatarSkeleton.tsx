"use client";

import React from "react";

import { useThemeStore } from "@/shared/lib";
import clsx from "clsx";
import styles from "./styles.module.scss";

const AvatarSkeleton = () => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <div className={clsx(styles.skeleton, styles[theme])}>
         <div className={styles.skeleton__avatar} />
         <div className={styles.skeleton__info}>
            <h4 className={styles.skeleton__name} />
            <div>
               <p className={styles.skeleton__text} />
            </div>
         </div>
      </div>
   );
};

export default AvatarSkeleton;
