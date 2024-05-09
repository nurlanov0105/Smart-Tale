"use client"
import React, {useState} from 'react';
import clsx from "clsx";
import {Button, InputField, Select, TextArea} from "@/shared/ui";
import {useThemeStore} from "@/shared/themeStore";
import {cityFilter, graphicsFilter} from "../model/values.data";
import styles from "./styles.module.scss";

const CreateVacancy = () => {
    const theme = useThemeStore((state) => state.theme);

    const [graphicSelected, setGraphicSelected] = useState(graphicsFilter[0])
    const [citySelect, setCitySelect] = useState(cityFilter[0])

    return (
        <form className={clsx(styles.form, styles[theme])}>
            <h4 className="h4">Название должности</h4>
            <div className={styles.form__row}>
                <InputField
                    classname={styles.form__input}
                    disabled={false}
                    isBordered={true}
                    type="text"
                />
                <h4 className="h4">Описание должности</h4>
                <div className={styles.form__margin}>
                    <TextArea classname={styles.form__area}/>
                </div>
                <div className={styles.form__block}>
                    <h4 className="h4">Требуемый опыт работы</h4>
                    <div className={styles.form__salary}>
                        <InputField
                            classname={styles.form__inputBorder}
                            title="от"
                            type="number"
                        />
                        <InputField
                            classname={styles.form__inputBorder}
                            title="до"
                            type="number"
                        />
                    </div>
                </div>
                <div className={styles.form__block}>
                    <h4 className="h4">График работы</h4>
                    <Select classname={styles.form__select} selected={graphicSelected} setSelected={setGraphicSelected}
                            data={graphicsFilter}/>
                </div>

                <div className={styles.form__block}>
                    <h4 className="h4">Город</h4>
                    <Select classname={styles.form__select} selected={citySelect} setSelected={setCitySelect}
                            data={cityFilter}/>
                </div>
                <div className={styles.form__block}>
                    <h4 className="h4">Заработная плата</h4>
                    <div className={styles.form__salary}>
                        <InputField
                            classname={styles.form__inputBorder}
                            title="от "
                            type="number"

                        />
                        <InputField
                            classname={styles.form__inputBorder}
                            title="до "
                            type="number"
                        />
                    </div>
                </div>

            </div>

            <div className={styles.form__btns}>
                <Button>Добавить</Button>
            </div>
        </form>
    );
};

export default CreateVacancy;