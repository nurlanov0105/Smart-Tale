import { FC, useState } from "react";
import { NoticeItemProps } from "../model/types";

import { useThemeStore } from "@/shared/store/themeStore";
import { AnnouncementValues, useGetDates, useOutside } from "@/shared/lib";
import {
   Building,
   ChevronUp,
   Clipboard,
   GripVertical,
   MessageSquare,
   ShoppingCart,
   UserRound,
} from "lucide-react";
import {
   useDeleteNotification,
   useEmployeeApply,
   useEmployeeDecline,
   useOrderFinish,
   useReadNotification,
} from "../model/useQueries";

import styles from "./styles.module.scss";
import clsx from "clsx";
import { Button } from "@/shared/ui";

const NoticeItem: FC<NoticeItemProps> = ({ item }) => {
   const { title, description, id, read, recipient, target_slug, timestamp, type, image, org } =
      item;

   const theme = useThemeStore((state) => state.theme);
   const { ref, isShown, toggleShow } = useOutside(false);
   const [date, time] = timestamp.split(" ");
   const [showMore, setShowMore] = useState(false);

   const { mutate: deleteNotice, isPending: deleteLoading } = useDeleteNotification();
   const { mutate: readNotice, isPending: readLoading } = useReadNotification();

   const { mutate: employeeApply, isPending: applyLoading } = useEmployeeApply();
   const { mutate: employeeDecline, isPending: declineLoading } = useEmployeeDecline();
   const { mutate: orderFinish, isPending: finishLoading } = useOrderFinish();

   const isEquipment = type?.toLocaleLowerCase() === AnnouncementValues.EQUIPMENT;
   const isOrder = type?.toLocaleLowerCase() === AnnouncementValues.ORDER;
   const isService = type?.toLocaleLowerCase() === AnnouncementValues.SERVICE;
   const isChat = type?.toLocaleLowerCase() === "chat";

   const classnames = isEquipment
      ? styles.item__avatarDarkGreen
      : isService
      ? styles.item__avatarLightGreen
      : isOrder
      ? styles.item__avatarYellow
      : styles.item__avatarGreen;

   const Icon = isEquipment ? (
      <UserRound />
   ) : isService ? (
      <Clipboard />
   ) : isOrder ? (
      <ShoppingCart />
   ) : isChat ? (
      <MessageSquare />
   ) : (
      <Building />
   );
   const handleShowMore = () => {
      setShowMore(true);
   };
   const handleHideContent = (e: any) => {
      e.stopPropagation();
      setShowMore(false);
   };

   const handleReadNotice = () => {
      readNotice(`${id}`);
      toggleShow();
   };

   const handleRemoveNotice = () => {
      deleteNotice(`${id}`);
      toggleShow();
   };

   const handleApplyClick = () => {
      employeeApply({ org_slug: target_slug || "" });
   };
   const handleDeclineClick = () => {
      employeeDecline({ org_slug: target_slug || "" });
   };

   const handleFinishOrder = () => {
      readNotice(`${id}`);
      orderFinish(target_slug ? target_slug : "");
   };

   return (
      <li
         className={clsx(styles.item, styles[theme], !read && styles.item_active)}
         onClick={handleShowMore}>
         <div className={styles.item__content}>
            <div className={styles.item__outer}>
               <div className={styles.item__inner}>
                  <div className={styles.item__row}>
                     {!read && <span className={styles.item__new} />}

                     <div className={clsx(styles.item__avatar, classnames)}>{Icon}</div>
                  </div>
                  <div className={styles.item__block}>
                     <h4 className={clsx("h4", styles.item__author)}>
                        {title} {description?.includes("Arrived") ? "Ваш заказ прибыл" : ""}
                     </h4>
                     <h5
                        className={clsx(
                           "h4",
                           styles.item__title,
                           showMore && styles.item__title_more
                        )}>
                        {description}
                     </h5>
                  </div>
               </div>
               <b className={styles.item__date}>{`В ${time}, ${date} `}</b>
            </div>
            <button
               type="button"
               className={clsx(styles.item__btn, styles[theme])}
               onClick={toggleShow}>
               <GripVertical />
            </button>

            {isShown && (
               <ul className={styles.item__settings} ref={ref}>
                  <li onClick={handleReadNotice}>
                     <button disabled={readLoading}>Отметить прочитанным</button>
                  </li>
                  <li onClick={handleRemoveNotice}>
                     <button disabled={deleteLoading}>Удалить уведомление</button>
                  </li>
               </ul>
            )}
         </div>

         {showMore && (
            <div className={styles.item__bottom}>
               {/* "organization" */}
               {type?.toLocaleLowerCase() === "organization" && (
                  <div className={styles.item__btns}>
                     <Button disabled={applyLoading} onClick={handleApplyClick}>
                        Принять
                     </Button>
                     <Button
                        classType="btn_danger"
                        disabled={declineLoading}
                        onClick={handleDeclineClick}>
                        Отказать
                     </Button>
                  </div>
               )}

               {!read && description?.includes("Arrived") ? (
                  <div className={styles.item__btns}>
                     <Button disabled={applyLoading} onClick={handleFinishOrder}>
                        {finishLoading ? "Загрузка..." : "Заказ получен"}
                     </Button>
                  </div>
               ) : (
                  ""
               )}

               <button type="button" onClick={handleHideContent} className={styles.item__hideBtn}>
                  <ChevronUp /> <span>Скрыть</span>
               </button>
            </div>
         )}
      </li>
   );
};

export default NoticeItem;
