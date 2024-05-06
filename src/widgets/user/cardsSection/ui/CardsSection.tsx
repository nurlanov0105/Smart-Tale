"use client"
import React, {useState, FC} from "react";
import { StandartCard } from "@/features/user/standartCard";
import {X} from "lucide-react";
import { CardSceletonProps } from "../model/types";
import {CommonSkeleton, Select} from "@/shared/ui";
import styles from "./styles.module.scss";

const CardsSection: FC<CardSceletonProps> = ({ isLoading = true, isError = false, type }) => {
   const readyData = isError ? (
      <h3 className="h3">Упс, произошла ошибка 😅</h3>
   ) : isLoading ? (
      [...Array(8)].map((_, i: number) => <CommonSkeleton key={i} type={type} />)
   ) : (
      [...Array(24)].map((_, i) => <StandartCard key={i} />)
   );
   const data = [
      {value: "По рейтингу", postValue: "rating"},
      {value: "По возрастанию цены", postValue: "price-asc"},
      {value: "По убыванию цены", postValue: "price-desc"},
      {value: "По дате выполнения", postValue: "date"},
      {value: "По новинкам", postValue: "newest"},
   ]
   const [selected, setSelected] = useState(data[0])

   return (
       <section className={styles.section}>
           {/*<h3 className="h4">Фильтры</h3>*/}
           <div className={styles.section__filters}>
               <div className={styles.section__selectWrapper}>
                   <Select classname={styles.section__select} selected={selected} setSelected={setSelected} data={data}/>
               </div>
           </div>
           <div className={styles.section__list}>
               {readyData}
           </div>
           ;
       </section>
   )
};

export default CardsSection;
