"use client"
import React, {useState} from 'react';
import {GlobalLoading, Select} from "@/shared/ui";
import {timeList, typeList} from "@/widgets/user/vacancies/model/values.data";
import {SlidersHorizontal} from "lucide-react";
import clsx from "clsx";
import {FiltersVacancies} from "@/features/user/filtersVacancies";
import {useGetResumes} from "@/widgets/admin/resumes/model/useGetResumes";
import {ResumeItem} from "@/entities/admin/resumeItem";
import {ResumeCardType} from "@/entities/admin/resumeItem/model/types";
import Select2 from "@/shared/ui/select/Select2";
import {useThemeStore} from "@/shared/store/themeStore";
import styles from "./styles.module.scss";

const Resumes = () => {
    const theme = useThemeStore(state => state.theme)

    const [selectedDate, setSelectedDate] = useState(timeList[0]);
    const [selected, setSelected] = useState(typeList[0]);

    const [withFilters, setWithFilters] = useState(false);


    const {data, isLoading} = useGetResumes()
    const handleFilters = () => setWithFilters(!withFilters);

    if (isLoading) return <GlobalLoading type="full"/>

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
                    <div className={styles.resumes__list}>
                        {data?.data?.data?.map((item: ResumeCardType, idx: number) => (
                            <ResumeItem item={item} key={idx}/>
                        ))}
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