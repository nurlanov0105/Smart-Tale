"use client";

import React, { FC } from "react";
import { AnnouncementDetailForm } from "@/features/user/ announcementDetailForm";
import styles from "./styles.module.scss";

const AnnouncementDetail: FC = () => {
   return (
      <div className={styles.order}>
         <AnnouncementDetailForm />
      </div>
   );
};

export default AnnouncementDetail;
