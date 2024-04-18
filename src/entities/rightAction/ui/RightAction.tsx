import React, { FC } from "react";
import styles from "./styles.module.scss";
import { TypeRightActions } from "@/features/rightActions/model/types";

const RightAction: FC<TypeRightActions> = ({ isRight, title }) => {
   return (
      <li className={styles.item}>
         <label>
            <input className={styles.item__input} defaultChecked={isRight} type="checkbox" />
            <p className={styles.item__title}>{title}</p>
         </label>
      </li>
   );
};

export default RightAction;
