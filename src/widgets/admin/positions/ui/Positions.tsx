"use client";
import React from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { PositionItem } from "@/entities/admin/positionItem";
import {EmptyContent} from "@/entities/admin/emptyContent";
import { ORGANIZATION_ROUTES, usePositions } from "@/shared/lib";
import { useThemeStore } from "@/shared/store/themeStore";
import {Button, GlobalLoading} from "@/shared/ui";
import {EMPTY_CONTENT_TYPES} from "@/shared/lib/constants/consts";
import styles from "./styles.module.scss";

const Positions = () => {
   const theme = useThemeStore((state) => state.theme);

   const router = useRouter();
   const handleRoute = () => {
      router.push(ORGANIZATION_ROUTES.ADD_POSITION);
   };


   const {data, isLoading, isError, isPending} = usePositions()
   if (isLoading || isPending) return <GlobalLoading type="full"/>
   if (isError) return <h3 className="h3">Упс, произошла ошибка</h3>

   return (
       <>
          {
             !data?.length && <EmptyContent type={EMPTY_CONTENT_TYPES.positions}/>
          }
          {
              !!data?.length &&
              <div className={clsx(styles.position, styles[theme])}>

                 <div className={styles.position__top}>
                    <h3>Список должностей</h3>
                    <Button onClick={handleRoute}>Добавить должность</Button>
                 </div>

                 <div className={styles.table__border}>
                    <table className={styles.table}>
                       <thead>
                       <tr className={styles.table__thead}>
                          <th className={clsx(styles.table__item, styles.table__item__idx)}>№</th>
                          <th className={clsx(styles.table__item, styles.table__item__title)}>
                             Название
                          </th>
                          <th className={clsx(styles.table__item, styles.table__item__descr)}>
                             Описание
                          </th>
                       </tr>
                       </thead>
                       <tbody className={styles.table__list}>
                       {data?.map((item, idx) => (
                           <PositionItem key={item.title} item={item} idx={idx}/>
                       ))}
                       </tbody>
                    </table>
                 </div>
              </div>
          }
       </>
   );
};

export default Positions;
