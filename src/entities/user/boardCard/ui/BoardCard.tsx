import { FC } from "react";
import Image from "next/image";
import { CardProps } from "../model/types";

import timeIcon from "@@/imgs/board/time.svg";
import { Draggable } from "@hello-pangea/dnd";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/themeStore";
import {Clock4} from "lucide-react";

const BoardCard: FC<CardProps> = ({ order, index }) => {
   const theme = useThemeStore((state) => state.theme);
   const { id, title, description, date } = order;

   return (
      <Draggable draggableId={order.id.toString()} index={index}>
         {(provided, snapshot) => (
            <div
               className={clsx(
                  styles.card,
                  snapshot.isDragging && styles.card__drag,
                  styles[theme]
               )}
               draggable
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}>
               <div className={styles.card__top}>
                  <h4 className="h4">
                     {title} = {id}
                  </h4>
                  <p className="commonGreyText">{description}</p>
               </div>
               <div className={styles.card__date}>
                  <span><Clock4/></span>
                  <p>{date}</p>
               </div>
            </div>
         )}
      </Draggable>
   );
};

export default BoardCard;
