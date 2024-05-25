"use client";

import React, { FC, useEffect } from "react";
import { StandartCard } from "@/features/user/standartCard";
import { CardSceletonProps } from "../model/types";
import { CommonSkeleton, GlobalLoading } from "@/shared/ui";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";
import styles from "./styles.module.scss";
import { ObserverSection } from "@/entities/general/observerSection";

const CardsSection: FC<CardSceletonProps> = ({ fetchFunction, queryKey, tab, type }) => {
   const { observerTarget, isError, isLoading, isFetchingNextPage, data } = useInfiniteScroll({
      fetchFunction,
      queryKey,
      tab,
   });

   const readyData = isError ? (
      <h3 className="h3">Упс, произошла ошибка 😅</h3>
   ) : isLoading ? (
      [...Array(8)].map((_, i: number) => <CommonSkeleton key={i} type={type} />)
   ) : (
      data?.map((item: any, i: number) => <StandartCard key={i} item={item} />)
   );

   return (
      <section className={styles.section}>
         <div className={styles.section__list}>{readyData}</div>

         <ObserverSection
            isInitialLoading={isLoading}
            isLoading={isFetchingNextPage}
            observerTarget={observerTarget}
         />
      </section>
   );
};

export default CardsSection;
