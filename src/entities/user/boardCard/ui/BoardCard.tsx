import { FC } from "react";
import { CardProps } from "../model/types";

import { Draggable } from "@hello-pangea/dnd";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useThemeStore } from "@/shared/store/themeStore";
import {Clock4} from "lucide-react";
import {getDate, getMonth} from "date-fns";
import {monthsForDate} from "@/widgets/admin/adminOrganizationDetail/model/helper";

const BoardCard: FC<CardProps> = ({ order, index }) => {
   const theme = useThemeStore((state) => state.theme);

   const { id, title, description, deadline } = order;

   const day = getDate(deadline ?? "")
   const monthIndex = getMonth(deadline ?? "")
   const month = monthsForDate()[monthIndex]

   return (
      <Draggable draggableId={id.toString()} index={index}>
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
                     {title}
                  </h4>
                  <p className="commonGreyText">{description}</p>
               </div>
               <div className={styles.card__date}>
                  <span><Clock4/></span>
                  <p>
                     {day} {month.value}
                  </p>
               </div>
            </div>
         )}
      </Draggable>
   );
};

export default BoardCard;
