"use client"
import React, {FC} from 'react';
import {SelectTypes, employee} from "@/shared/lib/types";
import {useOutside} from "@/shared/lib";
import { ChevronsUpDown } from 'lucide-react';
import clsx from "clsx";
import styles from "./styles.module.scss"

const Select: FC<SelectTypes> = ({employees, title, selected, setSelected}) => {
    const {toggleShow, ref, isShown} = useOutside(false)
    const handleSelect = (employee: employee) => {
        setSelected(employee)
        toggleShow()
    }

    return (
        <div ref={ref}>
            <div className={styles.select}>
                <div className={styles.select__block}>
                    <p className={styles.select__text}>{title}</p>
                    <button type="button" onClick={toggleShow} className={styles.select__selected}>
                        <p className={styles.select__select}>{selected.value}</p>
                        <ChevronsUpDown className={styles.select__icon}/>
                    </button>

                    {
                        isShown &&
                        <div className={styles.select__menu}>
                            {
                                employees.map(employee =>
                                    <button
                                        type="button"
                                        onClick={() => handleSelect(employee)}
                                        className={clsx(styles.select__item, {
                                            [styles.select__item_active]: employee.email === selected.email
                                        })}
                                        key={employee.email}>

                                        {employee.value}
                                    </button>
                                )
                            }
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default Select;