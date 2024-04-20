import { FC } from "react";
import Image from "next/image";
import { useOrdersStore } from "../model/useOrdersStore";
import { CardProps } from "../model/types";

import timeIcon from "@@/imgs/board/time.svg";
import styles from "./styles.module.scss";

const BoardCard: FC<CardProps> = ({ order }) => {
   const { id, title, description, date } = order;

   const dragOrder = useOrdersStore((state) => state.dragOrder);

   return (
      <div className={styles.card} draggable onDrag={() => dragOrder(order.id)}>
         <div className={styles.card__top}>
            <h4 className="h4">
               {title} = {id}
            </h4>
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
