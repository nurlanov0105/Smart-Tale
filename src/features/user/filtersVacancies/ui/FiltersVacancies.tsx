import React from 'react';
import {InputField} from "@/shared/ui";
import styles from "./styles.module.scss"

const FiltersVacancies = () => {
    return (
        <div className={styles.filters}>
            <div className={styles.filter}>
                <h4 className="h4">График работы</h4>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="checkbox"/></span>
                    <p>24/7</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="checkbox"/></span>
                    <p>В будние дни</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="checkbox"/></span>
                    <p>По выходным</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="checkbox"/></span>
                    <p>Неполный день</p>
                </label>
            </div>
            <div className={styles.filter}>
                <h4 className="h4">Уровень дохода</h4>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                    <p>Не имеет значения</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                    <p>от 1 700 сом</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                    <p>от 10 000 сом </p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                    <p>от 25 000 сом</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                    <p>от 50 000 сом</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                    <p>от 80 000 сом</p>
                </label>
            </div>
            <div className={styles.filter}>
                <h4 className="h4">Город</h4>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="checkbox"/></span>
                    <p>Бишкек</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="checkbox"/></span>
                    <p>Ош</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="checkbox"/></span>
                    <p>Джалал-Абад</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="checkbox"/></span>
                    <p>Баткен</p>
                </label>

            </div>
            <div className={styles.filter}>
                <h4 className="h4">Специализации</h4>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="checkbox"/></span>
                    <p>Администратор</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="checkbox"/></span>
                    <p>Швея</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="checkbox"/></span>
                    <p>Утюжник</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="checkbox"/></span>
                    <p>Менеджер</p>
                </label>

            </div>
            <div className={styles.filter}>
                <h4 className="h4">Опыт работы</h4>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                    <p> Не имеет значения</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                    <p> От 1 года до 3 лет</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                    <p>От 3 до 6 лет</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                    <p>Более 6 лет</p>
                </label>
                <label className={styles.filter__label}>
                    <span><InputField isBordered={true} type="radio" classname={styles.filter__radio}/></span>
                    <p>Нет опыта</p>
                </label>
            </div>
        </div>
    );
};

export default FiltersVacancies;