import React from 'react';
import {InputField} from "@/shared/ui";

import {useThemeStore} from "@/shared/store/themeStore";
import clsx from "clsx";
import {
    cityFilter,
    experienceFilter,
    graphicsFilter,
    incomeLevelFilter,
    specializationsFilter,

    VacancyFilterStore
} from "@/shared/lib";
import styles from "./styles.module.scss"


const FiltersVacancies = () => {
    const theme = useThemeStore((state) => state.theme);

    const setter = VacancyFilterStore(state => state.setter)

    return (
        <div className={clsx(styles.filters, styles[theme])}>
            <div className={styles.filter}>
                <h4 className="h4">График работы</h4>
                {
                    graphicsFilter.map(graphic =>
                        <label key={graphic.postValue} className={styles.filter__label}>
                            <span>
                                <InputField
                                    value={graphic.postValue}
                                    onChange={() => setter({value: graphic.postValue, key: "schedule"})}
                                    isBordered={true}
                                    type="checkbox"
                                    classname={styles.filter__checkbox}
                                />
                            </span>
                            <p>{graphic.value}</p>
                        </label>
                    )
                }
            </div>
            <div className={styles.filter}>
                <h4 className="h4">Уровень дохода</h4>
                {
                    incomeLevelFilter.map(income =>
                        <label key={income.postValue} className={styles.filter__label}>
                            <span>
                                <InputField
                                    value={income.postValue}
                                    onChange={() => setter({value: income.postValue, key: "incomeLevel"})}
                                    name="income"
                                    isBordered={true}
                                    type="radio"
                                    classname={styles.filter__radio}
                                />
                            </span>
                            <p>{income.value}</p>
                        </label>
                    )
                }
            </div>
            <div className={styles.filter}>
                <h4 className="h4">Город</h4>
                {
                    cityFilter.map(city =>
                        <label key={city.postValue} className={styles.filter__label}>
                            <span>
                                <InputField
                                    value={city.postValue}
                                    onChange={() => setter({value: city.postValue, key: "location"})}
                                    isBordered={true}
                                    type="checkbox"
                                    classname={styles.filter__checkbox}
                                />
                            </span>
                            <p>{city.value}</p>
                        </label>
                    )
                }
            </div>
            <div className={styles.filter}>
                <h4 className="h4">Специализации</h4>
                {
                    specializationsFilter.map(specialization =>
                        <label key={specialization.postValue} className={styles.filter__label}>
                            <span>
                                <InputField
                                    value={specialization.postValue}
                                    onChange={() => setter({value: specialization.postValue, key: "job_title"})}
                                    isBordered={true}
                                    type="checkbox"
                                    classname={styles.filter__checkbox}
                                />
                            </span>
                            <p>{specialization.value}</p>
                        </label>
                    )
                }

            </div>
            <div className={styles.filter}>
                <h4 className="h4">Опыт работы</h4>
                {
                    experienceFilter.map(experience =>
                        <label key={experience.postValue} className={styles.filter__label}>
                            <span>
                                <InputField
                                    value={experience.postValue}
                                    onChange={() => setter({value: experience.postValue, key: "experience"})}
                                    isBordered={true}
                                    type="radio"
                                    classname={styles.filter__radio}
                                />
                            </span>
                            <p>{experience.value}</p>
                        </label>
                    )
                }
            </div>
        </div>
    );
};

export default FiltersVacancies;