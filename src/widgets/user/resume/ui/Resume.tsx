"use client";

import React from "react";
import { ResumeForm } from "@/entities/user/resumeForm";
import styles from "./styles.module.scss";

const Resume = () => {
   return (
      <div className={styles.resume}>
         <ResumeForm  />
      </div>
   );
};

export default Resume;
