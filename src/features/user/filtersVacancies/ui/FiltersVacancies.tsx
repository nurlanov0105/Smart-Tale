import React, {useEffect, useRef} from 'react';
import {InputField} from "@/shared/ui";
import {
    cityFilter,
    experienceFilter,
    graphicsFilter,
    incomeLevelFilter,
    specializationsFilter
} from "@/widgets/user/createVacancy";

import styles from "./styles.module.scss"
import {useThemeStore} from "@/shared/themeStore";
import clsx from "clsx";
import {useForm} from "react-hook-form";

const FiltersVacancies = () => {
    const theme = useThemeStore((state) => state.theme);
    const {register} = useForm()

    return (
        <div className={clsx(styles.filters, styles[theme])}>
            <div className={styles.filter}>
                <h4 className="h4">График работы</h4>
                {
                    graphicsFilter.map(graphic =>
                        <label key={graphic.postValue} className={styles.filter__label}>
                            <span>
                                <InputField {...register(graphic.postValue)} isBordered={true} type="checkbox" classname={styles.filter__checkbox}/></span>
                            <p>{graphic.value}</p>
                        </label>
                    )
                }
            </div>
            <div className={styles.filter}>
                <h4 className="h4">Уровень дохода</h4>
                {
                    incomeLevelFilter.map(item =>
                        <label key={item.postValue} className={styles.filter__label}>
                            <span><InputField {...register("income-level")} value={item.postValue} isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                            <p>{item.value}</p>
                        </label>
                    )
                }
            </div>
            <div className={styles.filter}>
                <h4 className="h4">Город</h4>
                {
                    cityFilter.map(city =>
                        <label key={city.postValue} className={styles.filter__label}>
                            <span><InputField isBordered={true} type="checkbox" classname={styles.filter__checkbox}/></span>
                            <p>{city.value}</p>
                        </label>
                    )
                }
            </div>
            <div className={styles.filter}>
                <h4 className="h4">Специализации</h4>
                {
                    specializationsFilter.map(item =>
                        <label key={item.postValue} className={styles.filter__label}>
                            <span><InputField isBordered={true} type="checkbox" classname={styles.filter__checkbox}/></span>
                            <p>{item.value}</p>
                        </label>
                    )
                }

            </div>
            <div className={styles.filter}>
                <h4 className="h4">Опыт работы</h4>
                {
                    experienceFilter.map(item =>
                        <label key={item.postValue} className={styles.filter__label}>
                            <span><InputField {...register("experience")} isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                            <p>{item.value}</p>
                        </label>
                    )
                }
            </div>
        </div>
    );
};

export default FiltersVacancies;