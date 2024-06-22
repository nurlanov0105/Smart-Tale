"use client";

import React, { FC } from "react";
import { AnnouncementDetailForm } from "@/features/user/ announcementDetailForm";
import styles from "./styles.module.scss";
import CreateAnnouncementContext from "@/widgets/user/createAnnouncement/ui/useFormContext";

const AnnouncementDetail: FC = () => {
   return (
      <div className={styles.order}>
         <CreateAnnouncementContext mode="onChange">
            <AnnouncementDetailForm />
         </CreateAnnouncementContext>
      </div>
   );
};

export default AnnouncementDetail;
