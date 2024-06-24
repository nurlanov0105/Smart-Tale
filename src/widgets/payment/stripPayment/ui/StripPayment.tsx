"use client";

import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showModal } from "@/views/modal";
import { StripePaymentForm, SubsribesData } from "@/features/payment";
import { SubscribeCard, dataSubscribe } from "@/features/user/subscribeCard";
import {
   CookiesServices,
   EnumTokens,
   MODAL_KEYS,
   TWO_MONTH_COOKIES,
   UserService,
   useRememberMe, DASHBOARD,
} from "@/shared/lib";
import { useThemeStore } from "@/shared/store/themeStore";
import Select2 from "@/shared/ui/select/Select2";

import clsx from "clsx";
import styles from "./styles.module.scss";
import { OrganizationQueryKeys, UserQueryKeys } from "@/shared/api";
import {useRouter} from "next/navigation";

const StripPayment = () => {
   const theme = useThemeStore((state) => state.theme);

   const {push} = useRouter()
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

   const queryClient = useQueryClient();
   const {
      mutate: subscribe,
      isError,
      isPending,
   } = useMutation({
      mutationFn: UserService.subscribe,

      onSuccess: () => {
         // queryClient.removeQueries({queryKey: [UserQueryKeys.PROFILE]})
         push(DASHBOARD.PROFILE)
         queryClient.invalidateQueries({ queryKey: [UserQueryKeys.PROFILE] });
         showModal(MODAL_KEYS.infoModal, { componentName: MODAL_KEYS.subscribe });
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
