"use client";

import { FC } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";

// enum ClassNameEnum {
//    standart = "standart",
//    listItem = "listItem",
// }

type Props = {
   type: string;
};

const CommonSkeleton: FC<Props> = ({ type }) => {
   const theme = useThemeStore((state) => state.theme);
   return <div className={clsx(styles.cardSkeleton, styles[type], styles[theme])}></div>;
};

export default CommonSkeleton;
