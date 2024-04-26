import { FC } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

// enum ClassNameEnum {
//    standart = "standart",
//    listItem = "listItem",
// }

type Props = {
   type: string;
};

const CommonSkeleton: FC<Props> = ({ type }) => {
   return <div className={clsx(styles.card, styles[type])}></div>;
};

export default CommonSkeleton;
