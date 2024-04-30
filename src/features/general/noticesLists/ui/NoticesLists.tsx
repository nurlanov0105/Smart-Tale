import { NoticeItem, NoticesDataType, noticesData } from "@/entities/general/noticeItem";
import styles from "./styles.module.scss";
import {CommonSkeleton} from "@/shared/ui";

const NoticesLists = () => {
   return (
      <ul className={styles.list}>
         {noticesData.map((item: NoticesDataType) => (
            <NoticeItem key={item.id} item={item} />
         ))}

      </ul>
   );
};

export default NoticesLists;
