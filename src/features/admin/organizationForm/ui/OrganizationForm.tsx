import React from "react";
import { AddImages } from "@/features/general/addImages";
import { Button, InputField, TextArea } from "@/shared/ui";
import styles from "./styles.module.scss";

const OrganizationForm = () => {
   return (
      <div className={styles.form}>
         <h4 className="h4">Ваш логотип</h4>
         <AddImages />
         <div className={styles.form__row}>
            <h4 className="h4">Создание организации</h4>
            <InputField
               classname={styles.form__margin}
               disabled={false}
               type="text"
               error="errror"
               title="Название организации"
            />
            <TextArea disabled={false} error="errror" title="Описание организации" />
         </div>
         <div className={styles.form__button}>
            <Button>Создать организацию</Button>
         </div>
      </div>
   );
};

export default OrganizationForm;
