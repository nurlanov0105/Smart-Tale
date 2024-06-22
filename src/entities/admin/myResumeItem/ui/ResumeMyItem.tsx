import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import avatar from "@@/imgs/auth/auth-1.jpg";
import { useThemeStore } from "@/shared/store/themeStore";
import { ROUTES, WORK } from "@/shared/lib/routes.config";
import styles from "./styles.module.scss";
import { ResumeItemTypes } from "../model/types";
import { monthsForDate } from "@/widgets/admin/adminOrganizationDetail/model/helper";
import { useGetDates } from "@/shared/lib";

const ResumeMyItem: FC<ResumeItemTypes> = ({ job_title, experience, slug, author, updated_at }) => {
   const theme = useThemeStore((state) => state.theme);

   const { day, month, year } = useGetDates(updated_at ?? "2024");

   const monthFormat = monthsForDate()[month];

   return (
      <div className={clsx(styles.resume__item, styles[theme])}>
         <div className={styles.resume__left}>
            <Image
               src={avatar}
               alt="avatar"
               width={150}
               height={150}
               className={styles.resume__image}
            />
         </div>
         <div className={styles.resume__right}>
            <div className={styles.resume__info}>
               <Link href={WORK.RESUME_INFO + `/${slug}`} className={styles.resume__salary}>
                  {job_title}
               </Link>
               <Link href={ROUTES.USERS + `/${author.slug}`} className={styles.resume__title}>
                  {`${author.last_name} ${author.first_name}`}
               </Link>
               <p>График работы: Полный рабочий день</p>
               <p>Опыт работы: {experience}</p>
               {/* <div className={styles.resume__statisticsWrapper}>
                        <h4 className="h4">Статистика за неделю</h4>
                        <div className={styles.resume__statistics}>
                            <div className={styles.resume__statistic}>15 показов</div>
                            <div className={styles.resume__statistic}>100 просмотров</div>
                            <div className={styles.resume__statistic}>10 приглашений</div>
                        </div>
                    </div> */}
               {/*<h4 className={styles.resume__salary}>20 000 - 30 000 сом</h4>*/}
            </div>
            <p className={styles.resume__date}>
               Обновлено {day} {monthFormat.value} {year} года
            </p>
            <div className={styles.resume__buttons}>
               <Link href={WORK.RESUME_INFO + `/${slug}`} className={styles.resume__button}>
                  Посмотреть подробнее
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ResumeMyItem;
