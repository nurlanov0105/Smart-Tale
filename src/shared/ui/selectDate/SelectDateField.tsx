import React, { FC } from "react";
import { SelectProps } from "@/shared/lib/types/types";
import { ChevronDown } from "lucide-react";
import { useOutside } from "@/shared/lib";
import {useThemeStore} from "@/shared/themeStore";
import type { IDateProps } from "@/entities/general/selectDate";

import clsx from "clsx";
import styles from "./styles.module.scss";

const SelectDateField: FC<SelectProps> = (
    {
       title,
       classname,
       value,
       setDate,
       data,
       type,
       onChange
    }
) => {

   const theme = useThemeStore((state) => state.theme);

   const { toggleShow, ref, isShown } = useOutside(false);
   const handleSelect = (item: IDateProps) => {
      setDate({ value: item.value, postValue: item.postValue });
      onChange && onChange({ value: item.value, postValue: item.postValue })
      toggleShow();
   };
   return (
      <div ref={ref} className={clsx(classname, styles.select, styles[theme])}>
         <button type="button" onClick={toggleShow} className={styles.select__content}>
            {
                type === "user" && <p className={styles.select__title}>{title}</p>
            }
            <div className={styles.select__block}>
               <p className={styles.select__value}>{value && value.postValue > 0 ? value.value : title}</p>
               <span className={styles.select__icon}>

                  <ChevronDown className={clsx(styles.select__icon, isShown && styles.select__icon_active)}/>
               </span>
            </div>
         </button>
         {isShown && (
            <div className={styles.select__menu}>
               {data.map((item) => (
                  <button
                     className={clsx(styles.select__item, {
                        [styles.select__item_active]: value && item.value === value.value,
                     })}
                     type="button"
                     onClick={() => handleSelect(item)}
                     key={item.value}>
                     {item.value}
                  </button>
               ))}
            </div>
         )}
      </div>
   );
};

export default SelectDateField;
