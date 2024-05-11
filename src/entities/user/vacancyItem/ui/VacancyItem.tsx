import React, {FC} from 'react';
import {BriefcaseBusiness} from "lucide-react";
import {VacancyItemProps} from "../model/types";
import styles from "./styles.module.scss"
import {useThemeStore} from "@/shared/themeStore";
import clsx from "clsx";
import Link from "next/link";
import {ADMIN_ROUTES, WORK} from "@/shared/lib/routes.config";

const VacancyItem:FC<VacancyItemProps> = ({item, typeView, isAdmin}) => {
    const theme = useThemeStore((state) => state.theme);

    return (
        <>
            {
                !isAdmin &&
                <Link href={`${WORK.VACANCY_DETAIL}/${item.id}`} className={clsx(styles.item, styles[theme])}>
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
                        {
                            typeView &&
                            <div>
                                <p className={styles.item__description}>{item.description}</p>
                            </div>
                        }

                        <div>
                            <span className={styles.item__block}>Откликнитесь среди первых</span>
                        </div>
                    </div>
                    <div>
                        <button className={styles.item__button}>Откликнуться</button>
                    </div>
                </Link>
            }

            {
                isAdmin &&
                <Link href={`${ADMIN_ROUTES.VACANCY_DETAIL}/${item.id}`} className={clsx(styles.item, styles[theme])}>
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
                        <div>
                            <p className={styles.item__description}>{item.description}</p>
                        </div>

                        <div>
                            {/*<span className={styles.item__block}>Откликнитесь среди первых</span>*/}
                        </div>
                    </div>
                    <div>
                        <button className={styles.item__button}>Подробнее</button>
                    </div>
                    <div className={styles.item__responses}>+{item.responses.length} отклика</div>
                </Link>
            }



        </>
    );
};

export default VacancyItem;