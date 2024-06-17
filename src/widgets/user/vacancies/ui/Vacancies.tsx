"use client";

import React, {FC, useState} from "react";
import { FiltersVacancies } from "@/features/user/filtersVacancies";
import { VacancyCardType, VacancyItem, useGetVacancies } from "@/entities/user/vacancyItem";
import { TypeViewButtons } from "@/entities/user/typeViewButtons";
import { ErrorMessage } from "@/entities/general/errorMessage";
import { useThemeStore } from "@/shared/store/themeStore";
import { GlobalLoading } from "@/shared/ui";
import Select2 from "@/shared/ui/select/Select2";
import { timeList, typeList } from "../model/values.data";
import { SlidersHorizontal } from "lucide-react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import {useResponse} from "@/shared/lib";
import {useInfinityScroll2} from "@/widgets/user/cardsSection/model/useInfinityScroll2";


interface IProps{
    initialData: any,
    queryKey: string
}
const Vacancies:FC<IProps> = ({initialData, queryKey}) => {
   const theme = useThemeStore((state) => state.theme);

   const [selectedDate, setSelectedDate] = useState(timeList[0]);
   const [selected, setSelected] = useState(typeList[0]);

   const [page, setPage] = useState(1);

   const [withFilters, setWithFilters] = useState(false);
   const [typeView, setTypeView] = useState(false);

   const handleFilters = () => setWithFilters(!withFilters);

   const {
       data,
       isLoading,
       isError
   } = useInfinityScroll2({initialData, queryKey})

   const response = useResponse()


   const vacanciesLength = !!data ? data?.length : 0;

   return (
      <div className={clsx(styles.vacancies, styles[theme])}>
         <div className={styles.vacancies__title}>
            <h4 className="h4">Найдено {vacanciesLength} вакансий</h4>
         </div>

         <div className={styles.vacancies__filters}>
            <TypeViewButtons typeView={typeView} setTypeView={setTypeView} />
            <div className={styles.vacancies__selects}>
               <Select2
                  selected={selectedDate}
                  setSelected={setSelectedDate}
                  data={timeList}
                  type="bordered"
                  classname={styles.vacancies__select}
               />
               <Select2
                  selected={selected}
                  setSelected={setSelected}
                  data={typeList}
                  type="bordered"
                  classname={styles.vacancies__selectType}
               />
               <button onClick={handleFilters} className={styles.vacancies__filter}>
                  <SlidersHorizontal />
               </button>
            </div>
         </div>

         <div
            className={clsx({
               [styles.vacancies__withoutFilters]: !withFilters,
               [styles.vacancies__row]: withFilters,
            })}>
            <div className={styles.vacancies__list}>
               {isLoading ? (
                  <GlobalLoading type="full" />
               ) : isError ? (
                  <ErrorMessage />
               ) : (
                  !data?.length && <ErrorMessage isEmpty={true} />
               )}

               {data?.map((item: VacancyCardType, idx: number) => (
                  <VacancyItem response={response} item={item} key={idx} typeView={typeView} />
               ))}
            </div>

            <div
               className={clsx(styles.vacancies__transition, {
                  [styles.vacancies__transition_show]: withFilters,
               })}>
               <FiltersVacancies />
            </div>
         </div>
      </div>
   );
};

export default Vacancies;
