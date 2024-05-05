import React, { FC } from "react";
import styles from "./styles.module.scss";
import { TypeRightActions } from "../model/types";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";

const RightAction: FC<TypeRightActions> = ({ isRight, title }) => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <li className={clsx(styles.item, styles[theme])}>
         <label>
            <input className={styles.item__input} defaultChecked={isRight} type="checkbox" />
            <p className={styles.item__title}>{title}</p>
         </label>
      </li>
   );
};

export default RightAction;
