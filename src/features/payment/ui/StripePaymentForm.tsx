"use client";

import React, {FC} from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import clsx from "clsx";
import { Button, InputField } from "@/shared/ui";
import { useThemeStore } from "@/shared/store/themeStore";
import {usePayment} from "../model/usePayment";
import styles from "./styles.module.scss";

const StripePaymentForm: FC = () => {
   const theme = useThemeStore((state) => state.theme);

   const {
      handleSubmit,
      handleInputChange,
      handleCallback,
      handleInputFocus,
      formRef,
      state,
      isLoading,
      isError
   } = usePayment()

   return (
      <div key="Payment" className={clsx(styles.formWrapper, styles[theme])}>
         <div className={styles.card}>
            <Card
               number={state.number}
               name={state.name}
               expiry={state.expiry}
               cvc={state.cvc}
               focused={state.focused as "number" | "name" | "expiry" | "cvc" | undefined}
               callback={handleCallback}
            />
         </div>

         <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <fieldset className={styles.form__fieldset}>
               <InputField
                  type="text"
                  name="name"
                  pattern="[a-z A-Z-]+"
                  maxLength={30}
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  title="Название карты"
                  isBordered={true}
                  placeholder="Igor Sergeev"
               />

               <InputField
                  type="tel"
                  name="number"
                  pattern="[\d| ]{16,22}"
                  maxLength={19}
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  title="Номер карты"
                  isBordered={true}
                  placeholder="**** **** **** ****"
               />
               <div className={styles.form__box}>
                  <InputField
                     type="tel"
                     name="expiry"
                     pattern="\d\d/\d\d"
                     maxLength={5}
                     required
                     onChange={handleInputChange}
                     onFocus={handleInputFocus}
                     title="Дата истечения срока"
                     isBordered={true}
                     placeholder="00/00"
                  />

                  <InputField
                     type="tel"
                     name="cvc"
                     pattern="\d{3}"
                     maxLength={3}
                     required
                     onChange={handleInputChange}
                     onFocus={handleInputFocus}
                     title="CVV"
                     isBordered={true}
                     placeholder="000"
                  />
               </div>
            </fieldset>

            {/* <input type="hidden" name="issuer" value={state.issuer} /> */}
            <Button className={styles.form__btn}>{isLoading ? "Загрузка..." : "Оплатить"}</Button>
         </form>
      </div>
   );
};

export default StripePaymentForm;
