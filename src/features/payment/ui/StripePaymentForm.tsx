"use client";

import React, { useState, useRef } from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from "../model/formating";
import Payment from "payment";
import styles from "./styles.module.scss";
import { Button, InputField } from "@/shared/ui";

interface FormState {
   number: string;
   name: string;
   expiry: string;
   cvc: string;
   issuer: string;
   focused: string;
}

const StripePaymentForm: React.FC = () => {
   const [state, setState] = useState<FormState>({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      issuer: "",
      focused: "",
   });

   const formRef = useRef<HTMLFormElement>(null);

   const handleCallback = ({ issuer }: { issuer: string }, isValid: boolean) => {
      if (isValid) {
         setState((prevState) => ({ ...prevState, issuer }));
      }
   };

   const handleInputFocus = ({ target }: React.FocusEvent<HTMLInputElement>) => {
      setState((prevState) => ({ ...prevState, focused: target.name }));
   };

   const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      let { name, value } = target;

      if (name === "number") {
         value = formatCreditCardNumber(value);
      } else if (name === "expiry") {
         value = formatExpirationDate(value);
      } else if (name === "cvc") {
         value = formatCVC(value);
      }

      setState((prevState) => ({ ...prevState, [name]: value }));
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert("You have finished payment!");
      if (formRef.current) {
         formRef.current.reset();
      }
   };

   return (
      <div key="Payment" className={styles.formWrapper}>
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
            <Button className={styles.form__btn}>Оплатить</Button>
         </form>
      </div>
   );
};

export default StripePaymentForm;
