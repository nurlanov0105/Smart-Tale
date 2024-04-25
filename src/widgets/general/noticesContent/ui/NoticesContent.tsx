import React from "react";
import styles from "./styles.module.scss";
import { NoticeEmpty } from "@/entities/general/noticeEmpty";
import { noticesData } from "@/entities/general/noticeItem";
import { NoticesLists } from "@/features/general/noticesLists";

const NoticesContent = () => {
   return (
      <div className={styles.notices}>
         {noticesData.length === 0 ? <NoticeEmpty /> : <NoticesLists />}
      </div>
   );
};

export default NoticesContent;
