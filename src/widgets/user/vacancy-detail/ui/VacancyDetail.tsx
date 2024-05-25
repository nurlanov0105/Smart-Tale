"use client";
import React from "react";
import styles from "./styles.module.scss";
import { VacancyItem } from "@/entities/user/vacancyItem";
import { vacancies } from "@/widgets/user/vacancies/model/values.data";
import { InputField } from "@/shared/ui";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";

const VacancyDetail = () => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <div className={clsx(styles.detail, styles[theme])}>
         <div className={styles.detail__left}>
            <h3 className={styles.detail__title}>Описание вакансии</h3>
            <div className={styles.detail__vacancy}>
               <h3 className="h3">Senior Frontend ментор</h3>
               <p className={styles.detail__salary}>от 15 до 20 $ на руки</p>
               <p className={styles.detail__text}>Требуемый опыт работы: 3–6 лет</p>
               <p className={styles.detail__text}>Полная занятость, полный день</p>
               <div>
                  <button className={styles.detail__button}>Откликнуться</button>
                  <button></button>
               </div>
            </div>
            <div className={styles.detail__phoneWrapper}>
               <h3 className={styles.detail__title}>
                  Напишите телефон, чтобы работодатель мог <br /> связаться с вами
               </h3>
               <form className={styles.detail__form}>
                  <InputField
                     type="tel"
                     placeholder="Номер телефона"
                     classname={styles.detail__input}
                     isBordered={true}
                  />
                  <button className={styles.detail__btn} type="submit">
                     Продолжить
                  </button>
               </form>
               <p className={styles.detail__conditions}>
                  Нажимая «Продолжить», вы подтверждаете, что ознакомлены, полностью согласны и
                  принимаете условия «
                  <span>Соглашения об оказании услуг по содействию в трудоустройстве</span>»
               </p>
            </div>
            <div className={styles.detail__info}>
               <p className={styles.detail__description}>
                  Мы лицензированная IT академия Motion web LLC. Занимаемся обучением IT направлений
                  как оффлайн так и на онлайн формате. Мы в поиске senior Javascript-разработчика
                  способного научить студентов Front-endу и сделать хорошими интернами/джунами
               </p>
               <h4 className="h4">Обязанности:</h4>
               <ul className={styles.detail__list}>
                  <li className={styles.detail__item}>
                     • Преподавать Front-end на Javascripte взрослым по программе обучения
                  </li>
                  <li className={styles.detail__item}>• Проверять и оценивать домашние задания</li>
                  <li className={styles.detail__item}>
                     • Мотивировать и поддерживать учеников в изучении Javascript.
                  </li>
               </ul>
               <h4 className="h4">Требования:</h4>
               <ul className={styles.detail__list}>
                  <li className={styles.detail__item}>• отличные знания Javascript</li>
                  <li className={styles.detail__item}>• опыт в разработке от 5 - лет и более</li>
                  <li className={styles.detail__item}>
                     • опыт преподавания будет большим преимуществом
                  </li>
                  <li className={styles.detail__item}>• действующий разработчик</li>
               </ul>
               <h4 className="h4">Условия:</h4>
               <ul className={styles.detail__list}>
                  <li className={styles.detail__item}>• Почасовая оплата по 15$</li>
                  <li className={styles.detail__item}>
                     • График работы: обговаривается по итогу собеседования
                  </li>
                  <li className={styles.detail__item}>• Дружная и прогрессивная команда</li>
                  <li className={styles.detail__item}>• Официальное оформление по ТК КР</li>
               </ul>
            </div>
         </div>
         <div className={styles.detail__right}>
            <h3 className={styles.detail__title}>Похожие вакансии</h3>
            <div className={styles.detail__vacancies}>
               {vacancies.map((item, idx) => (
                  // @ts-ignore
                  <VacancyItem key={idx} item={item} typeView={true} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default VacancyDetail;
