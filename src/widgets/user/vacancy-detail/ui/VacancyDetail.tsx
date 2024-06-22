"use client";
import React, {useState} from "react";
import {useParams, usePathname} from "next/navigation";
import {VacancyItem, useGetVacancySlug, useGetVacancies, VacancyCardType} from "@/entities/user/vacancyItem";
import { ErrorMessage } from "@/entities/general/errorMessage";
import { GlobalLoading, InputField } from "@/shared/ui";
import { useThemeStore } from "@/shared/store/themeStore";
import clsx from "clsx";
import styles from "./styles.module.scss";
import {useResponse} from "@/shared/lib";
import dynamic from "next/dynamic";

const PriceFormat = dynamic(() => import("@/shared/ui/price/PriceFormat"), {ssr: false})

const VacancyDetail = () => {
   const theme = useThemeStore((state) => state.theme);
   const {slug} = useParams<{slug: string}>()
   const { isError, isFetching, data } = useGetVacancySlug(slug);
   const response = useResponse()

   const vacancies = useGetVacancies(1)

   const [isResponsed, setIsResponse] = useState(false)
   const responseButton = !isResponsed ? (response.isPending ? "Загрузка..." : "Откликнуться") : "Отозвать отклик"

   const handleResponse = () => {
      response.mutate({slug})
      setIsResponse(!isResponsed)
   }

   if (isFetching) {
      return <GlobalLoading />;
   }

   if (isError) {
      return <ErrorMessage />;
   }

   if (!data) {
      return <ErrorMessage isEmpty={true} />;
   }

   return (
      <div className={clsx(styles.detail, styles[theme])}>
         <div className={styles.detail__left}>
            <h3 className={styles.detail__title}>Описание вакансии</h3>
            <div className={styles.detail__vacancy}>
               <h3 className="h3">{data?.job_title}</h3>

               <p className={styles.detail__salary}>
                  от <PriceFormat
                   price={+data?.min_salary}
                   type={data.currency}
                   variant="number"
               /> до <PriceFormat
                   price={+data?.max_salary}
                   type={data.currency}
               /> на руки
               </p>

               <p className={styles.detail__text}>Организация: {data?.organization.title}</p>
               <p className={styles.detail__text}>
                  Требуемый опыт работы: {data?.experience}
               </p>
               <p className={styles.detail__text}>{data?.schedule}</p>
               <div>
                  {/*<button onClick={handleResponse} className={styles.detail__button}>*/}
                  {/*   Откликнуться*/}
                  {/*</button>*/}

                  <button onClick={handleResponse} className={clsx(styles.detail__button, isResponsed && styles.active)}>
                     {responseButton}
                  </button>
               </div>
            </div>
            <div className={styles.detail__phoneWrapper}>
               <h3 className={styles.detail__title}>
                  Напишите телефон, чтобы работодатель мог <br/> связаться с вами
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
               <p className={styles.detail__description}>{data?.description}</p>
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
               {
                  vacancies.data?.data
                   .filter((item: VacancyCardType) => item.slug !== slug)
                   .map((item : VacancyCardType, idx: number) => (
                        <VacancyItem response={response} key={idx} item={item} typeView={true} />)
                   )
               }
            </div>
         </div>
      </div>
   );
};

export default VacancyDetail;
