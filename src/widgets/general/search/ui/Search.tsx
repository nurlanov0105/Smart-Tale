"use client"
import React from 'react';
import {OrderList} from "@/features/general/orderList";
import styles from "./styles.module.scss"
import {useSearchStore} from "@/features/general/search";

const Search = () => {
    const searchValue = useSearchStore(state => state.searchValue)

    const data = [
        { id: 1, type: "order" },
        { id: 2, type: "order" },
        { id: 3, type: "order" },
        { id: 4, type: "order" },
        { id: 5, type: "order" },
        { id: 6, type: "order" },
    ];

    return (
        <div className={styles.search}>
            <div className={styles.search__block}>
                <span className={styles.search__title}>Поиск по запросу:
                    <span className={styles.search__text}> {searchValue}</span>
                </span>
                <span className={styles.search__title}>результаты: 10</span>
            </div>
            <OrderList data={data} type="order" isLoading={false} isError={false}/>
        </div>
    );
};

export default Search;