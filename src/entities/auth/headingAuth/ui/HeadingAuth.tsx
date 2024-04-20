"use client";
import React, { FC } from "react";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { headingValues, HeadingTypes } from "../index";

const HeadingAuth: FC<HeadingTypes> = ({ isLoading, isError }) => {
   const pathname = usePathname() as string;
   const data = headingValues[pathname];

   return (
      <div className={styles.block}>
         <h2 className={styles.title}>{data.title}</h2>
         <p>{isLoading ? data.loading : isError ? data.error : data.subtitle}</p>
      </div>
   );
};

export default HeadingAuth;
