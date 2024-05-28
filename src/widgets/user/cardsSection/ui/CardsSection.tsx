"use client";

import React, { FC } from "react";
import { StandartCard } from "@/features/user/standartCard";
import { ObserverSection } from "@/entities/general/observerSection";
import { CommonSkeleton } from "@/shared/ui";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";
import { CardSectionProps } from "../model/types";
import styles from "./styles.module.scss";
import { CardType } from "@/shared/lib";

const CardsSection: FC<CardSectionProps> = ({ fetchFunction, queryKey, tab, type }) => {
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
      data?.map((item: CardType, i: number) => <StandartCard key={i} item={item} />)
   );

   return (
      <section className={styles.section}>
         <div className={styles.section__list}>{readyData}</div>

         <ObserverSection
            isInitialLoading={isLoading}
            isLoading={isFetchingNextPage}
            observerTarget={observerTarget}
         />
         {/* {showBtn && (
            <Button className="btn_fixed" onClick={goTop}>
               <ArrowUpIcon />
            </Button>
         )} */}
      </section>
   );
};

export default CardsSection;
