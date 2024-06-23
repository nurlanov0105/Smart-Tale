import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
   deadline: string;
};

const DeadlineInfo: FC<Props> = ({ deadline }) => {
   return <div className={styles.block}>Срок: до {deadline}</div>;
};

export default DeadlineInfo;
