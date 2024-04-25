import styles from "./styles.module.scss";
import { Bell } from "lucide-react";

const NoticeEmpty = () => {
   return (
      <div className={styles.notice}>
         <Bell className={styles.notices__icon} />
         <h3 className="h3">Уведомлений пока нет</h3>
         <h4 className={styles.notices__text}>Заходите сюда, чтобы посмотреть уведомления</h4>
      </div>
   );
};

export default NoticeEmpty;
