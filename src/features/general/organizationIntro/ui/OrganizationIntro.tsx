import { Logo } from "@/entities/general/logo";
import styles from "./styles.module.scss";
import { FC } from "react";
import clsx from "clsx";
import {OrganizationDetailsTypes, useThemeStore} from "@/shared/lib";

interface OrganizationIntroProps {
   data: OrganizationDetailsTypes | undefined
   type?: string;
   day: number;
   month: string;
   year: number | string;
}

const OrganizationIntro: FC<OrganizationIntroProps> = ({ data, day, month, year }) => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <div className={clsx(styles.organization, styles[theme])}>
          <Logo data={data} type="organization" />
          <p className={styles.organization__date}>
            Создан {day} {month} {year}
         </p>
      </div>
   );
};

export default OrganizationIntro;
