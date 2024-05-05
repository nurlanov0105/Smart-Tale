
import React, {FC} from 'react';
import styles from "./styles.module.scss"
import type {SearchItemTypes} from "../model/types";
import {useRouter} from "next/navigation";

const SearchItem:FC<SearchItemTypes> = ({title, debouncedValue}) => {
    return (
        <div className={styles.item}>
             <span>
                 {title
                     .split(new RegExp(`(${debouncedValue})`, 'gi'))
                     .map((part, index) =>
                         part.toLowerCase() === debouncedValue.toLowerCase() ? (
                             <mark key={index}>{part}</mark>
                         ) : (
                             part
                         ))
                 }
             </span>
        </div>
    );
};

export default SearchItem;