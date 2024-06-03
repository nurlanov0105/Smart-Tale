"use client";
import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { VacancyCardType, VacancyItem, useGetVacancies } from "@/entities/user/vacancyItem";
import { GlobalLoading, Select } from "@/shared/ui";
import { useThemeStore } from "@/shared/store/themeStore";
import { timeList, typeList } from "../model/values.data";
import { FiltersVacancies } from "@/features/user/filtersVacancies";

import clsx from "clsx";
import { ErrorMessage } from "@/entities/general/errorMessage";
import {TypeViewButtons} from "@/entities/user/typeViewButtons";
import Select2 from "@/shared/ui/select/Select2";
import styles from "./styles.module.scss";

const Vacancies = () => {
   const theme = useThemeStore((state) => state.theme);

   const [selectedDate, setSelectedDate] = useState(timeList[0]);
   const [selected, setSelected] = useState(typeList[0]);

   const [page, setPage] = useState(1);

   const [withFilters, setWithFilters] = useState(false);
   const [typeView, setTypeView] = useState(false);

   const handleFilters = () => setWithFilters(!withFilters);

   const {
       isError,
       isPending: isLoading,
       data
   } = useGetVacancies(page);

   return (
      <div className={clsx(styles.vacancies, styles[theme])}>
         <div className={styles.vacancies__title}>
            <h4 className="h4">Найдено 12 вакансий</h4>
         </div>

         <div className={styles.vacancies__filters}>
            <TypeViewButtons typeView={typeView} setTypeView={setTypeView}/>
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
            {isLoading ? (
               <GlobalLoading type="full"/>
            ) : isError ? (
               <ErrorMessage />
            ) : data.data?.data.length === 0 ? (
               <ErrorMessage isEmpty={true} />
            ) : (
               <div className={styles.vacancies__list}>
                  {data.data?.data?.map((item: VacancyCardType, idx: number) => (
                     <VacancyItem item={item} key={idx} typeView={typeView} />
                  ))}
               </div>
            )}

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
