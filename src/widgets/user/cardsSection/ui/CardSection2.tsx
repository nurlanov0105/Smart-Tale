"use client";

import React, {FC} from "react";
import { StandartCard } from "@/features/user/standartCard";
import { ObserverSection } from "@/entities/general/observerSection";
import {ScrollTopButton} from "@/entities/general/scrollTopBtn";
import {CommonSkeleton} from "@/shared/ui";
import {CardType, ServicesService, SkeletonTypes} from "@/shared/lib";
import {useInfinityScroll2} from "@/widgets/user/cardsSection/model/useInfinityScroll2";
import {ErrorMessage} from "@/entities/general/errorMessage";
import styles from "./styles.module.scss";


interface IProps{
    initialData: any
    queryKey: string,
    dependencies? : {
        tab?: string;
        tabType?: string;
        param_tab?: string;
        slug?: string;
    }
}
const CardsSection2: FC<IProps> = ({initialData, queryKey, dependencies}) => {

    const {
        isFetchingNextPage,
        observerTarget,
        data,
        isLoading,
        isError
    } = useInfinityScroll2({initialData, queryKey, dependencies})

    // const getServices = async () => {
    //     const services = await ServicesService.getServices({page: 1})
    //     console.log(services)
    // }
    // getServices()
    //
    // console.log(initialData)

    const readyData = () => {
        if (isError) {
            return null
        }  else

        if (isLoading) {
            return [...Array(8)].map((_, i: number) => <CommonSkeleton key={i} type={SkeletonTypes.standart} />);
        } else

        if (!isFetchingNextPage && data?.length === 0) {
            return <ErrorMessage isEmpty={true}/>;
        }

        return data?.map((item: CardType, i: number) => <StandartCard key={i} item={item} />);
    };


    return (
        <section className={styles.section}>
            <div className={styles.section__list}>{readyData()}</div>

            <ObserverSection
                isInitialLoading={isLoading}
                isLoading={isFetchingNextPage}
                observerTarget={observerTarget}
            />
        </section>
    );
};

export default CardsSection2;
