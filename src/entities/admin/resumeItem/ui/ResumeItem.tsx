import React from 'react';
import Link from "next/link";
import clsx from "clsx";
import {WORK} from "@/shared/lib/routes.config";
import {useThemeStore} from "@/shared/store/themeStore";

import {ResumeItemProps} from "../model/types";
import styles from "@/entities/user/vacancyItem/ui/styles.module.scss";

const ResumeItem = ({item}: ResumeItemProps) => {

    const theme = useThemeStore((state) => state.theme);

    return (
        <Link
            href={`${WORK.RESUME_INFO + `/${item.slug}`}`}
            className={clsx(styles.item, styles[theme])}>
            <div className={styles.item__row}>
                <div>
                    <h4 className={styles.item__title}>{item.job_title}</h4>
                    <h3 className={styles.item__salary}>
                        {/*{item.min_salary} - {item.max_salary}*/}
                        10 000 - 30 000
                    </h3>
                </div>
                <div>
                    <h4>
                        {item.author.first_name} {item.author.last_name} {item.author.middle_name}
                    </h4>
                    <h3>
                        {
                            // item.location
                        }
                        Бишкек
                    </h3>
                </div>
                <div className={styles.item__experiance}>
                    {/*<BriefcaseBusiness className={styles.item__icon} />*/}
                    <p>Опыт работы: </p>
                    {item.experience}
                </div>

                <div>
                    <span className={styles.item__block}>В поиске</span>
                </div>
            </div>
            <div>
                <button className={styles.item__button}>Отправить приглашение</button>
            </div>
        </Link>
    );
};

export default ResumeItem;