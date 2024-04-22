"use client";
import React, { FC } from "react";
import { SelectTypes, employee } from "@/shared/lib/types";
import { useOutside } from "@/shared/lib";
import { ChevronsUpDown } from "lucide-react";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Select: FC<SelectTypes> = ({ data, title, selected, setSelected, classname }) => {
   const { toggleShow, ref, isShown } = useOutside(false);
   const handleSelect = (employee: employee) => {
      setSelected(employee);
      toggleShow();
   };

   return (
      <div className={styles.select__content} ref={ref}>
         <div className={clsx(styles.select, classname && styles.select__none)}>
            <div className={styles.select__block}>
               <p className={styles.select__text}>{title}</p>
               <button
                  type="button"
                  onClick={toggleShow}
                  className={clsx(styles.select__selected, classname)}>
                  <p className={styles.select__select}>{selected.value}</p>
                  <ChevronsUpDown className={styles.select__icon} />
               </button>

               {isShown && (
                  <div className={styles.select__menu}>
                     {data.map((employee) => (
                        <button
                           type="button"
                           onClick={() => handleSelect(employee)}
                           className={clsx(styles.select__item, {
                              [styles.select__item_active]:
                                 employee.postValue === selected.postValue,
                           })}
                           key={employee.postValue}>
                           {employee.value}
                        </button>
                     ))}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Select;
