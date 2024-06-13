"use client";

import React, {FC} from "react";
import clsx from "clsx";
import {useThemeStore} from "@/shared/store/themeStore";
import {Button, GlobalLoading} from "@/shared/ui";

import {useGetProfile} from "@/widgets/user/profile/model/useQueries";
import Image from "next/image";
import avatar from "@@/logo.svg";
import {useParams, useRouter} from "next/navigation";
import {CookiesServices, EnumTokens, ROUTES} from "@/shared/lib";
import {useResumeDetailsQuery} from "@/entities/user/vacancyItem/model/useQueries";
import {WORK} from "@/shared/lib/routes.config";
import Link from "next/link";
import styles from "./styles.module.scss";

const ResumeInfo: FC = () => {
   const theme = useThemeStore((state) => state.theme);
   const user_slug = CookiesServices.getCookiesValue(EnumTokens.USER_SLUG)

   const { push } = useRouter();
   const params = useParams();
   const slug = params.slug.toString();

   const { data: resume, isLoading } = useResumeDetailsQuery(slug);
   const { data } = useGetProfile();

   const handleRoute = () => push(WORK.RESUME_DETAILS + `/${slug}`);

   if (isLoading) return <GlobalLoading type="full" />;

   return (
      <form className={clsx(styles.form, styles[theme])}>
         <div className={styles.form__row}>
            <h3 className="h3">Кандидат</h3>

            <div className={styles.form__info}>
               <div>
                  <Image src={avatar} alt="avatar" width={80} height={80} />
               </div>
               <div>
                  <div className={styles.form__initials}>
                     <span>ФИО:</span>
                     <Link href={ROUTES.USERS + `/${data?.data?.slug}`}>
                        {data?.data?.last_name} {data?.data?.first_name} {data?.data?.middle_name}
                     </Link>
                  </div>
                  <div className={styles.form__initials}>
                     <span>Почта:</span>
                     <Link href={ROUTES.USERS + `/${data?.data?.slug}`}>{data?.data?.email}</Link>
                  </div>

                  <div className={styles.form__initials}>
                     <span>Номер телефона:</span>
                     <Link href={ROUTES.USERS + `/${data?.data?.slug}`}>{data?.data?.phone_number}</Link>
                  </div>
               </div>
            </div>

            <div className={styles.form__block}>
               <h4 className={styles.form__title}>Опыт работы:</h4>
               <p>{resume?.experience}</p>
            </div>
            <div className={styles.form__block}>
               <h4 className={styles.form__title}>Заработная плата: </h4>
               <p>
                  {resume?.min_salary}-{resume?.max_salary} {resume?.currency}
               </p>
            </div>
            <div className={styles.form__block}>
               <h4 className={styles.form__title}>Город:</h4>
               <p>{resume?.location}</p>
            </div>

            <div className={styles.form__block}>
               <h4 className={styles.form__title}>График работы:</h4>
               <p>{resume?.schedule}</p>
            </div>

            <div className={clsx(styles.form__block, styles.form__block_margin)}>
               <h4 className={styles.form__title}>Описание:</h4>
            </div>

            <p>
               {resume?.about_me} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
               architecto corporis debitis eum nobis perspiciatis reprehenderit vel voluptatum.
               Harum ipsam iusto praesentium reprehenderit temporibus? At beatae cum delectus dolor
               doloribus, eaque est nesciunt odit officiis, pariatur quaerat quibusdam, quis quo
               repellat repudiandae sapiente soluta! Atque, aut culpa cupiditate ea eius harum
               inventore laudantium mollitia natus officia omnis optio perferendis recusandae
               repellat, tempore. Aliquam aliquid amet, animi architecto asperiores aspernatur, aut
               autem commodi delectus distinctio dolorum eius esse explicabo incidunt iure iusto
               minima mollitia natus nemo officia officiis perspiciatis porro praesentium quia quo
               repellendus voluptates! Expedita explicabo inventore magni quis voluptate?
            </p>
         </div>

         <div className={styles.form__btnsWrapper}>
            {/*<div className={styles.form__btns}>*/}
            {/*    <Button onClick={handleHide} type="button">Скрыть резюме</Button>*/}
            {/*    <Button onClick={handleDelete} type="button" classType="btn_danger">Удалить резюме</Button>*/}
            {/*</div>*/}
         </div>
         {
             user_slug === data?.data.slug &&
             <div className={styles.form__btns}>
                <Button onClick={handleRoute} type="button">
                   Изменить резюме
                </Button>
             </div>
         }
      </form>
   );
};

export default ResumeInfo;
