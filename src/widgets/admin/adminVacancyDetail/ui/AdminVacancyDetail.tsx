"use client"
import React, {useState} from 'react';
import {showModal} from "@/views/modal";
import {cityFilter, experienceFilter, graphicsFilter} from "@/widgets/user/createVacancy";
import {Button, InputField, Select, TextArea} from "@/shared/ui";
import {useThemeStore} from "@/shared/themeStore";
import {MODAL_KEYS} from "@/shared/lib";

import clsx from "clsx";
import styles from "./styles.module.scss"
import {currencies} from "@/widgets/user/createVacancy/model/values.data";
import {useForm} from "react-hook-form";

const AdminVacancyDetail = () => {
    const theme = useThemeStore((state) => state.theme);

    const [graphicSelected, setGraphicSelected] = useState(graphicsFilter[0])
    const [citySelect, setCitySelect] = useState(cityFilter[0])
    const [selectCurrency, setSelectCurrency] = useState(currencies[0])

    const {register} = useForm()
    const handleOpenResponses = () => {
        showModal(MODAL_KEYS.responsesUsers)
    }
    const handleDelete = () => {
        showModal(MODAL_KEYS.deleteAnnouncement)
    }
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
                <h4 className="h4">Расскажите про вакансию</h4>
                <div className={styles.form__margin}>
                    <TextArea classname={styles.form__area} type="default"/>
                </div>
                {/*<h4 className="h4">Требования</h4>*/}
                {/*<InputField*/}
                {/*    classname={styles.form__input}*/}
                {/*    disabled={false}*/}
                {/*    isBordered={true}*/}
                {/*    type="text"*/}
                {/*/>*/}
                {/*<h4 className="h4">Обязанности</h4>*/}
                {/*<InputField*/}
                {/*    classname={styles.form__input}*/}
                {/*    disabled={false}*/}
                {/*    isBordered={true}*/}
                {/*    type="text"*/}
                {/*/>*/}
                <div className={styles.form__block}>
                    <h4 className="h4">График работы</h4>
                    <Select
                        //@ts-ignore
                        selected={graphicSelected}
                        setSelected={setGraphicSelected}
                        data={graphicsFilter}
                        type="vacancy"
                    />
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
                        <div>
                            <Select
                                //@ts-ignore
                                selected={selectCurrency}
                                setSelected={setSelectCurrency}
                                data={currencies}
                                type="vacancy"
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.form__block}>
                    <h4 className="h4">Город</h4>
                    <Select
                        // classname={styles.form__select}
                        //@ts-ignore
                        selected={citySelect}
                        setSelected={setCitySelect}
                        data={cityFilter}
                        type="vacancy"
                    />
                </div>
                <div className={styles.form__filter}>

                    <h4 className="h4">Опыт работы</h4>
                    {/*<h4 className="h4">Требуемый опыт работы</h4>*/}
                    {/*<div className={styles.form__salary}>*/}
                    {/*    <InputField*/}
                    {/*        classname={styles.form__inputBorder}*/}
                    {/*        title="от"*/}
                    {/*        type="number"*/}
                    {/*    />*/}
                    {/*    <InputField*/}
                    {/*        classname={styles.form__inputBorder}*/}
                    {/*        title="до"*/}
                    {/*        type="number"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {
                        experienceFilter.map(item =>
                            <label key={item.postValue} className={styles.form__label}>
                                <span><InputField {...register("experience")} isBordered={true} type="radio"
                                                  classname={styles.form__radio}/></span>
                                <p>{item.value}</p>
                            </label>
                        )
                    }
                </div>

            </div>

            <div className={styles.form__btnsWrapper}>
                <Button onClick={handleOpenResponses} type="button">Посмотреть на отклики</Button>
                <div className={styles.form__btns}>
                    <Button onClick={handleDelete} type="button" className="btn_danger">Удалить вакансию</Button>
                    <Button>Изменить</Button>
                </div>
            </div>
        </form>
    );
};

export default AdminVacancyDetail;