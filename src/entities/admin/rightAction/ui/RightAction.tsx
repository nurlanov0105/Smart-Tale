import React, { FC } from "react";
import styles from "./styles.module.scss";
import { TypeRightActions } from "../model/types";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";
import {InputField} from "@/shared/ui";
import {UseFormRegister} from "react-hook-form";
import {AddPositionTypes} from "@/shared/lib/types/organizations-service.types";




interface IProps{
    action: TypeRightActions
    register: UseFormRegister<any>
}
const RightAction: FC<IProps> = ({action, register}) => {
   const theme = useThemeStore((state) => state.theme);
   return (
      <li className={clsx(styles.item, styles[theme])}>
         <label>
            <span>
                <InputField
                    {...register(action.name)}
                    defaultChecked={action.isRight}
                    type="checkbox"
                    isBordered={true}
                />
            </span>
            <p className={styles.item__title}>{action.title}</p>
         </label>
      </li>
   );
};

export default RightAction;
