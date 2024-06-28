import { NoticeItem, NoticesDataType, noticesData } from "@/entities/general/noticeItem";
import styles from "./styles.module.scss";
import { CommonSkeleton } from "@/shared/ui";
import { FC } from "react";

type Props = {
   data: any;
};

const NoticesLists: FC<Props> = ({ data }) => {
   const seen = new Set();
   const filteredData = data.filter((notification: NoticesDataType) => {
      const uniqKey = `${notification.id}-${notification.timestamp}`;
      if (seen.has(uniqKey)) {
         return false;
      } else {
         seen.add(uniqKey);
         return true;
      }
   });

   return (
      <ul className={styles.list}>
         {filteredData?.map((item: NoticesDataType) => (
            <NoticeItem key={item?.id} item={item} />
         ))}
      </ul>
   );
};

export default NoticesLists;
