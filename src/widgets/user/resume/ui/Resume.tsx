"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button, InputField, Select, TextArea } from "@/shared/ui";
import { useThemeStore } from "@/shared/themeStore";
import clsx from "clsx";
import { cityFilter, currencies, graphicsFilter } from "../../createVacancy";

const Resume = () => {
   const theme = useThemeStore((state) => state.theme);

   const [graphicSelected, setGraphicSelected] = useState(graphicsFilter[0]);
   const [citySelect, setCitySelect] = useState(cityFilter[0]);
   const [selectCurrency, setSelectCurrency] = useState(currencies[0]);

   return (
      <form className={clsx(styles.form, styles[theme])}>
         <div className={styles.form__row}>
            <h4 className="h4">Название должности</h4>
            <InputField
               classname={styles.form__input}
               disabled={false}
               isBordered={true}
               type="text"
            />
            <h4 className="h4">Напишите о себе</h4>
            <div className={styles.form__block}>
               <TextArea classname={styles.form__area} />
            </div>
            <div className={styles.form__block}>
               <h4 className="h4">Опыт работы</h4>
               <InputField
                  classname={styles.form__input}
                  disabled={false}
                  isBordered={true}
                  type="text"
               />
            </div>
            <div className={styles.form__block}>
               <h4 className="h4">График работы</h4>
               <Select
                  classname={styles.form__select}
                  selected={graphicSelected}
                  setSelected={setGraphicSelected}
                  data={graphicsFilter}
               />
            </div>

            <div className={styles.form__block}>
               <h4 className="h4">Город</h4>
               <Select
                  classname={styles.form__select}
                  selected={citySelect}
                  setSelected={setCitySelect}
                  data={cityFilter}
               />
            </div>
            <div className={styles.form__block}>
               <h4 className="h4">Желаемая заработная плата</h4>
               <div className={styles.form__salary}>
                  <div className={styles.form__salary}>
                     <InputField classname={styles.form__inputBorder} title="от " type="number" />
                     <InputField classname={styles.form__inputBorder} title="до " type="number" />
                     <div>
                        <Select
                           selected={selectCurrency}
                           setSelected={setSelectCurrency}
                           data={currencies}
                           classname={styles.form__currency}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className={styles.form__btns}>
            <Button>Добавит резюме</Button>
         </div>
      </form>
   );
};

export default Resume;
