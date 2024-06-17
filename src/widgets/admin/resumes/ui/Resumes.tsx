"use client"
import React, {FC, useState} from 'react';
import {timeList, typeList} from "@/widgets/user/vacancies/model/values.data";
import {SlidersHorizontal} from "lucide-react";
import clsx from "clsx";
import {FiltersVacancies} from "@/features/user/filtersVacancies";
import {ResumeItem} from "@/entities/admin/resumeItem";
import {ResumeCardType} from "@/entities/admin/resumeItem/model/types";
import Select2 from "@/shared/ui/select/Select2";
import {useThemeStore} from "@/shared/store/themeStore";
import styles from "./styles.module.scss";
import {useInfinityScroll2} from "@/widgets/user/cardsSection/model/useInfinityScroll2";
import {ObserverSection} from "@/entities/general/observerSection";


interface IProps{
    initialData: any
    queryKey: string
}

const Resumes:FC<IProps> = ({initialData, queryKey}) => {
    const theme = useThemeStore(state => state.theme)

    const [selectedDate, setSelectedDate] = useState(timeList[0]);
    const [selected, setSelected] = useState(typeList[0]);

    const [withFilters, setWithFilters] = useState(false);


    // const {data, isLoading} = useGetResumes()

    const {
        data,
        isLoading,
        isError,
        observerTarget,
        isFetchingNextPage
    } = useInfinityScroll2({initialData, queryKey})
    const handleFilters = () => setWithFilters(!withFilters);

    //if (isLoading) return <GlobalLoading type="full"/>

    return (
        <div className={clsx(styles.resumes, styles[theme])}>
            <div className={styles.resumes__title}>
                <h4 className="h4">Найдено 12 резюме</h4>
            </div>
            <div className={styles.resumes__filters}>
                <div className={styles.resumes__selects}>
                    <Select2
                        selected={selectedDate}
                        setSelected={setSelectedDate}
                        data={timeList}
                        type="bordered"
                        classname={styles.resumes__select}
                    />
                    <Select2
                        selected={selected}
                        setSelected={setSelected}
                        data={typeList}
                        type="bordered"
                        classname={styles.resumes__selectType}
                    />
                </div>
                <button onClick={handleFilters}>
                    <SlidersHorizontal className={styles.resumes__filter}/>
                </button>
            </div>

            <div
                className={clsx({
                    [styles.resumes__withoutFilters]: !withFilters,
                    [styles.resumes__row]: withFilters,
                })}>
                {
                    <div>
                        <div className={styles.resumes__list}>
                            {data?.map((item: ResumeCardType, idx: number) => (
                                <ResumeItem item={item} key={idx}/>
                            ))}
                        </div>
                        <ObserverSection
                            isInitialLoading={isLoading}
                            isLoading={isFetchingNextPage}
                            observerTarget={observerTarget}
                        />
                    </div>
                }

                <div
                    className={clsx(styles.resumes__transition, {
                        [styles.resumes__transition_show]: withFilters,
                    })}>
                    <FiltersVacancies/>
                </div>
            </div>
        </div>
    );
};

export default Resumes;