import React, {Dispatch, FC, SetStateAction} from 'react';
import clsx from "clsx";
import {ChevronDown} from "lucide-react";
import {useOutside} from "@/shared/lib";
import {useThemeStore} from "@/shared/store/themeStore";
import {SelectPostTypes} from "../../lib/types/types"
import styles from "./styles.module.scss";

interface ISelect{
    data: SelectPostTypes[] | undefined,
    selected: SelectPostTypes,
    setSelected: Dispatch<SetStateAction<SelectPostTypes>>
    title?: string
    classname?: string
    type: "transparent" | "default" | "chat" | "vacancy" | "bordered" | "auth"
}
const Select: FC<ISelect> = (
    {
        data,
        title,
        selected,
        setSelected,
        type,
        classname,
    }
) => {
    const { toggleShow, ref, isShown, setIsShown } = useOutside(false);
    const theme = useThemeStore((state) => state.theme);
    const handleSelect = (employee: SelectPostTypes) => {
        setSelected(employee);
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
                            {data?.map((employee) => (
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