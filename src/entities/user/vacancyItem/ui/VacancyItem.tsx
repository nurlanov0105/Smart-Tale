import React, {FC} from 'react';
import {BriefcaseBusiness} from "lucide-react";
import {VacancyItemProps} from "../model/types";
import styles from "./styles.module.scss"

const VacancyItem:FC<VacancyItemProps> = ({item}) => {
    return (
        <>
            <div className={styles.item}>
                <div className={styles.item__row}>
                    <div>
                        <h4 className={styles.item__title}>{item.title}</h4>
                        <h3 className={styles.item__salary}>{item.salary}</h3>
                    </div>
                    <div>
                        <h4>{item.organization}</h4>
                        <h3>{item.city}</h3>
                    </div>
                    <div className={styles.item__experiance}>
                        <BriefcaseBusiness className={styles.item__icon}/>
                        {item.experience}
                    </div>
                    {/*<div>*/}
                    {/*    <p>{item.description}</p>*/}
                    {/*</div>*/}

                    <div>
                        <span className={styles.item__block}>Откликнитесь среди первых</span>
                    </div>
                </div>
                <div>
                    <button className={styles.item__button}>Откликнуться</button>
                </div>

            </div>
            <div className={styles.item}>
                <div className={styles.item__row}>
                    <div>
                        <h4 className={styles.item__title}>{item.title}</h4>
                        <h3 className={styles.item__salary}>{item.salary}</h3>
                    </div>
                    <div>
                        <h4>{item.organization}</h4>
                        <h3>{item.city}</h3>
                    </div>
                    <div className={styles.item__experiance}>
                        <BriefcaseBusiness className={styles.item__icon}/>
                        {item.experience}
                    </div>
                    {/*<div>*/}
                    {/*    <p>{item.description}</p>*/}
                    {/*</div>*/}

                    <div>
                        <span className={styles.item__block}>Откликнитесь среди первых</span>
                    </div>
                </div>
                <div>
                    <button className={styles.item__button}>Откликнуться</button>
                </div>

            </div>
        </>
    );
};

export default VacancyItem;