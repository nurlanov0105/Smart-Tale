"use client";

import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { showModal } from "@/views/modal";
import { StripePaymentForm, SubsribesData } from "@/features/payment";
import { SubscribeCard, dataSubscribe } from "@/features/user/subscribeCard";
import { CookiesServices, EnumTokens, MODAL_KEYS, UserService, useRememberMe } from "@/shared/lib";
import { useThemeStore } from "@/shared/store/themeStore";
import Select2 from "@/shared/ui/select/Select2";

import clsx from "clsx";
import styles from "./styles.module.scss";

const StripPayment = () => {
   const theme = useThemeStore((state) => state.theme);
   const isRemember = useRememberMe();

   const isClient = typeof window === "object";
   const [type, setType] = useState("base");
   const [selected, setSelected] = useState(SubsribesData[type as keyof typeof SubsribesData]);

   useEffect(() => {
      if (isClient) {
         setType(CookiesServices.getCookiesValue(EnumTokens.SUBSCRIBE_TYPE) || "base");
         setSelected(SubsribesData[type as keyof typeof SubsribesData]);
      } else {
         setType("");
      }
   }, [isClient, type]);

   const {
      mutate: subscribe,
      isError,
      isPending,
   } = useMutation({
      mutationFn: UserService.subscribe,
      onSuccess: (data: any) => {
         const subData = { subscription: data.new_sub_dt, ["is subscribed"]: true };
         if (isRemember) {
            console.log(subData);
            CookiesServices.setToken({
               keyName: EnumTokens.SUBSCRIBED_DATA,
               value: `${JSON.stringify(subData)}`,
               time: `${60 * 86400}`,
            });
         } else {
            sessionStorage.setItem(EnumTokens.SUBSCRIBED_DATA, JSON.stringify(subData));
         }
         showModal(MODAL_KEYS.confirmationModal, { componentName: MODAL_KEYS.subscribe });
      },
   });

   const handleSubscribe = () => {
      subscribe(dataSubscribe[type].title);
   };

   return (
      <section className={clsx(styles.section, styles[theme])}>
         <h3 className="h3">Оплата картой</h3>
         <div className={styles.section__content}>
            <div className={styles.section__left}>
               <Select2
                  selected={selected}
                  setSelected={setSelected}
                  title="Подписки"
                  data={Object.values(SubsribesData)}
                  type="transparent"
               />
               <SubscribeCard type={selected.postValue} isPayment={true} />
            </div>
            <StripePaymentForm handleSubscribe={handleSubscribe} isLoading={isPending} />
         </div>
      </section>
   );
};

export default StripPayment;
