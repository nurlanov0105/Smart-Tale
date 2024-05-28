"use client";
import React from "react";
import styles from "./styles.module.scss";
import { VacancyItem, useGetVacancySlug } from "@/entities/user/vacancyItem";
import { vacancies } from "@/widgets/user/vacancies/model/values.data";
import { GlobalLoading, InputField } from "@/shared/ui";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ErrorMessage } from "@/entities/general/errorMessage";

const VacancyDetail = () => {
   const theme = useThemeStore((state) => state.theme);
   const pathname = usePathname();
   console.log(pathname.split("/")[3]);
   const { isError, isFetching, data } = useGetVacancySlug(pathname.split("/")[3]);

   if (isFetching) {
      return <GlobalLoading />;
   }

   if (isError) {
      return <ErrorMessage />;
   }

   if (!data?.data) {
      return <ErrorMessage isEmpty={true} />;
   }

   console.log(data);

   return (
      <div className={clsx(styles.detail, styles[theme])}>
         <div className={styles.detail__left}>
            <h3 className={styles.detail__title}>Описание вакансии</h3>
            <div className={styles.detail__vacancy}>
               <h3 className="h3">{data?.data.job_title}</h3>

               <p className={styles.detail__salary}>
                  от {`${Math.round(+data?.data?.min_salary)}`} до{" "}
                  {`${Math.round(+data?.data?.max_salary)}`} {data?.data?.currency} на руки
               </p>
               <p className={styles.detail__text}>Организация: {data?.data?.organization.title}</p>
               <p className={styles.detail__text}>
                  Требуемый опыт работы: {data?.data?.experience}
               </p>
               <p className={styles.detail__text}>{data?.data?.schedule}</p>
               <div>
                  <button className={styles.detail__button}>Откликнуться</button>
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
               <p className={styles.detail__description}>{data?.data?.description}</p>
               {/* <h4 className="h4">Обязанности:</h4>
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
               </ul> */}
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
