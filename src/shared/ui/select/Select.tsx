import React, {Dispatch, FC, SetStateAction} from 'react';
import clsx from "clsx";
import styles from "./styles.module.scss";
import {ChevronDown} from "lucide-react";
import {useOutside} from "@/shared/lib";
import {useThemeStore} from "@/shared/themeStore";
import {employee} from "../../lib/types/types"

interface ISelect{
    data: employee[],
    selected: employee,
    setSelected: Dispatch<SetStateAction<employee>>
    title?: string
    classname?: string
    type: "transparent" | "default" | "chat" | "vacancy" | "bordered" | "auth"
    handleSelectElem? : (value: string) => void
}
const Select: FC<ISelect> = (
    {
        data,
        title,
        selected,
        setSelected,
        type,
        classname,
        handleSelectElem
    }
) => {
    const { toggleShow, ref, isShown, setIsShown } = useOutside(false);

    const theme = useThemeStore((state) => state.theme);
    const handleSelect = (employee: employee) => {
        setSelected(employee);
        handleSelectElem && handleSelectElem(employee.value)
        setIsShown(false)
    };

    return (
        <div className={clsx(styles.select__wrapper, styles[theme])} ref={ref}>
            <div className={clsx(styles.select, styles[type], classname)}>
                <div className={styles.select__relative}>
                    <p className={styles.select__text}>{title}</p>
                    <button
                        type="button"
                        onClick={toggleShow}
                        className={clsx(styles.select__selected, styles[`${type}__selected`])}>
                        <p className={styles.select__select}>{selected.value}</p>

                        <ChevronDown
                            className={clsx(styles.select__icon, {
                                [styles.select__icon_active]: isShown
                            })}/>
                    </button>

                    {isShown && (
                        <div className={styles.select__menu}>
                            {data.map((employee) => (
                                <button
                                    onClick={() => handleSelect(employee)}
                                    type="button"
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