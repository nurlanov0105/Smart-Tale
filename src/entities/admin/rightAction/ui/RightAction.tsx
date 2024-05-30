import React, {FC, memo} from "react";
import clsx from "clsx";
import { useThemeStore } from "@/shared/themeStore";
import {InputField} from "@/shared/ui";
import type {RightActionProps} from "../model/types";
import styles from "./styles.module.scss";


const RightAction: FC<RightActionProps> = ({action, register, isDisabled}) => {
   const theme = useThemeStore((state) => state.theme);
    const handleChildClick = (event: React.MouseEvent<HTMLLIElement>) => {
        if (!isDisabled) return
        event.preventDefault();
        event.stopPropagation();
    };
    const handleChange = () => {}

   return (
      <li onClick={handleChildClick} className={clsx(styles.item, styles[theme], isDisabled && styles.item__disabled)}>
         <label>
            <span>
                <InputField
                    {...register(action.name)}
                    onChange={handleChange}
                    defaultChecked={Boolean(action.value)}
                    checked={isDisabled && Boolean(action.value)}
                    type="checkbox"
                    isBordered={true}
                />
            </span>
            <p className={styles.item__title}>{action.title}</p>
         </label>
      </li>
   );
};

export default memo(RightAction);
