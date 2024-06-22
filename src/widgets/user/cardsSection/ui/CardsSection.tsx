"use client";

import React, { FC } from "react";
import { StandartCard } from "@/features/user/standartCard";
import { ObserverSection } from "@/entities/general/observerSection";
import { CommonSkeleton } from "@/shared/ui";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";
import { CardSectionProps } from "../model/types";
import { CardType } from "@/shared/lib";
import styles from "./styles.module.scss";

const CardsSection: FC<CardSectionProps> = ({
   fetchFunction,
   queryKey,
   param_tab,
   tab,
   slug,
   type,
}) => {
   const { observerTarget, isError, isLoading, isFetchingNextPage, data } = useInfiniteScroll({
      fetchFunction,
      queryKey,
      tab,
      slug,
      param_tab,
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
            <Button classType="btn_fixed" onClick={goTop}>
               <ArrowUpIcon />
            </Button>
         )} */}
      </section>
   );
};

export default CardsSection;
