"use client";

import React from "react";
import { ResumeForm } from "@/entities/user/resumeForm";
import styles from "./styles.module.scss";

const CreateResume = () => {
   return (
      <div className={styles.resume}>
         <ResumeForm  />
      </div>
   );
};

export default CreateResume;
