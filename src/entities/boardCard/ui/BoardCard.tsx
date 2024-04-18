import { FC } from "react";
import Image from "next/image";
import { CardProps } from "../model/types";
import timeIcon from "@@/imgs/board/time.svg";
import styles from "./styles.module.scss";

const BoardCard: FC<CardProps> = ({ order }) => {
   const { id, title, description, date } = order;

   return (
      <div
         // ref={provided.innerRef}
         // {...provided.draggableProps}
         // {...provided.dragJandleProps}
         className={styles.card}>
         <div className={styles.card__top}>
            <h4 className="h4">{title}</h4>
            <p className="commonGreyText">{description}</p>
         </div>
         <div className={styles.card__date}>
            <Image src={timeIcon} alt="time icon" width={20} height={20} />
            <span>{date}</span>
         </div>
      </div>
   );
};

export default BoardCard;
