"use client";

import React, { useState } from "react";
import { Tabs } from "@/features/general/tabs";
import { ResumeForm } from "@/entities/user/resumeForm";
import { resumeType } from "../model/values.data";
import styles from "./styles.module.scss";
import { useAddResume } from "@/entities/user/vacancyItem";

const Resume = () => {
   const [type, setType] = useState(resumeType[0].postValue);

   return (
      <div className={styles.resume}>
         <ResumeForm type={type}  />
      </div>
   );
};

export default Resume;
