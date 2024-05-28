import React, {Dispatch, FC, SetStateAction} from 'react';
import clsx from "clsx";
import styles from "./styles.module.scss";
import {ChevronDown} from "lucide-react";
import {useOutside} from "@/shared/lib";
import {useThemeStore} from "@/shared/themeStore";
import {employee} from "../../lib/types/types"
import {GlobalLoading} from "@/shared/ui";

interface ISelect{
    data: employee[],
    value?: any
    onChange?: (value: any) => void;
    title?: string
    classname?: string
    type: "transparent" | "default" | "chat" | "vacancy" | "bordered" | "auth"
    typeData?: "sizes"
    sizeType?: string
    error?: string
    isLoading?: boolean
}

const Select: FC<ISelect> = (
    {
        data,
        title,
        type,
        classname,
        value,
        onChange,
        typeData,
        error,
        isLoading
    }
) => {
    const { toggleShow, ref, isShown, setIsShown } = useOutside(false);

    const theme = useThemeStore((state) => state.theme);
    const handleSelect = (selected: employee) => {

        if (typeData === "sizes"){
            if (!value.find((el: employee) => el.postValue === selected.postValue)){
                const newValue = [...value, selected];
                onChange && onChange(newValue)
            }
        } else {
            onChange && onChange(selected)
        }

        setIsShown(false)
    };

    const viewValue = () => {
        if(!!value?.length){
            return value[value?.length - 1].value
        }

        return value?.value
    }

    return (
        <div className={clsx(styles.select__wrapper, styles[theme])} ref={ref}>
            <div className={clsx(styles.select, styles[type], classname)}>
                <div className={styles.select__relative}>
                    <p className={styles.select__text}>{title}</p>
                    <button
                        type="button"
                        onClick={toggleShow}
                        className={clsx(styles.select__selected, styles[`${type}__selected`], error && styles.select__error)}>
                        <p className={styles.select__select}>{
                            isLoading ? "Загрузка..." : viewValue()
                        }</p>

                        <ChevronDown
                            className={clsx(styles.select__icon, {
                                [styles.select__icon_active]: isShown
                            })}/>
                    </button>

                    {isShown && (
                        <div className={styles.select__menu}>
                            {
                                isLoading && <GlobalLoading type="default"/>
                            }
                            {!isLoading && data?.map((employee) => (
                                <button
                                    onClick={() => handleSelect(employee)}
                                    type="button"
                                    className={clsx(styles.select__item, {
                                        [styles.select__item_active]:
                                        employee.postValue === value?.postValue,
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