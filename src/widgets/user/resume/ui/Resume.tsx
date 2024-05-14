"use client";

import React, { useState } from "react";
import {Tabs} from "@/features/general/tabs";
import {ResumeForm} from "@/entities/user/resumeForm";
import {resumeType} from "../model/values.data";
import styles from "./styles.module.scss";
import {Select} from "@/shared/ui";

const Resume = () => {
   
   const [type, setType] = useState(resumeType[0].postValue);

   return (
       <div className={styles.resume}>
          <div className={styles.resume__block}>
             <h4 className="h4">Тип резюме</h4>
             <div className={styles.resume__margin}>
                <Tabs type={type} setType={setType} values={resumeType} />
             </div>
          </div>

          <ResumeForm type={type}/>
       </div>
   );
};

export default Resume;
