import React, { FC } from "react";
import { Button } from "@/shared/ui";
import { ADMIN_ROUTES } from "@/shared/lib";
import { useRouter } from "next/navigation";
import type { EmptyContentProps } from "../model/types";
import styles from "./styles.module.scss";

const EmptyContent: FC<EmptyContentProps> = ({ type }) => {
   const router = useRouter();
   const handleRoute = () => {
      if (type === "organization") {
         router.push(ADMIN_ROUTES.CREATE_ORGANIZATION);
      } else {
         router.push(ADMIN_ROUTES.INVITE_EMPLOYEES);
      }
   };

   return (
      <>
         {type === "organization" ? (
            <div className={styles.organization}>
               <div className={styles.organization__row}>
                  <div>
                     <h3 className="h3">Тут еще нет организаций</h3>
                     <p className={styles.organization__text}>
                        Создайте свою организацию <br />и добавьте своих сотрудников
                     </p>
                     <Button onClick={handleRoute}>Создать</Button>
                  </div>
               </div>
            </div>
         ) : (
            <div className={styles.organization}>
               <div className={styles.organization__row}>
                  <div>
                     <h3 className="h3">Тут еще нет сотрудников</h3>
                     <p className={styles.organization__text}>
                        Пригласите своих сотрудников <br />и следите за выполненными задачами
                     </p>
                     <Button onClick={handleRoute}>Пригласить</Button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default EmptyContent;
