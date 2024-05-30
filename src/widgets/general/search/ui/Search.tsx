"use client";
import React, { useEffect, useState } from "react";
import { OrderList } from "@/features/general/orderList";
import styles from "./styles.module.scss";
import { DefineSearchParam, useSearchStore } from "@/features/general/search";
import { EquipmentService, SkeletonTypes, UserService } from "@/shared/lib";
import { EquipmentQueryKeys } from "@/shared/api";
import { usePathname } from "next/navigation";

const Search = () => {
   const searchValue = useSearchStore((state) => state.searchValue);
   const pathname = usePathname();
   const [searchPath] = useState(pathname.slice(1).split("/")[0].replace("-", "/"));

   const type = DefineSearchParam[("/" + searchPath) as keyof typeof DefineSearchParam];
   console.log("type -- ", type);

   return (
      <div className={styles.search}>
         <div className={styles.search__block}>
            <span className={styles.search__title}>
               Поиск по запросу:
               <span className={styles.search__text}> {searchValue}</span>
            </span>
            {/* <span className={styles.search__title}>результаты: 10</span> */}
         </div>

         <OrderList
            fetchFunction={UserService.search}
            queryKey={EquipmentQueryKeys.GET_MY_ADS}
            type={SkeletonTypes.listItem}
            ads={type}
            title={searchValue}
         />
      </div>
   );
};

export default Search;
