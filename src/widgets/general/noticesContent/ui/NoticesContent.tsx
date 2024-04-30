import React from "react";
import { NoticeEmpty } from "@/entities/general/noticeEmpty";
import { noticesData } from "@/entities/general/noticeItem";
import { NoticesLists } from "@/features/general/noticesLists";
import styles from "./styles.module.scss";

const NoticesContent = () => {
   return (
      <div className={styles.notices}>
         {noticesData.length ? <NoticeEmpty /> : <NoticesLists />}
      </div>
   );
};

export default NoticesContent;
