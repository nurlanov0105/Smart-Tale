import React, { FC } from "react";
import { useRouter } from "next/navigation";
import {Button, Emojis} from "@/shared/ui";

import { dataMap } from "../model/dataMap";
import type { EmptyContentProps } from "../model/types";
import styles from "./styles.module.scss";
import {showModal} from "@/views/modal";
import {MODAL_KEYS} from "@/shared/lib";

const EmptyContent: FC<EmptyContentProps> = ({ type, access = true }) => {
   const router = useRouter();

   const { title, description, button, route } = dataMap[type];

   const handleRoute = () => {
      if (!access){
         showModal(MODAL_KEYS.infoModal, {componentName: MODAL_KEYS.noRights})
         return
      }
      router.push(route)
   };

   return (
      <>
         <div className={styles.organization}>
            <div className={styles.organization__row}>
               <div>
                  <div className={styles.organization__block}>
                     <h3 className="h3">{title}</h3>
                     <Emojis type="okay"/>
                  </div>
                  <p className={styles.organization__text}>{description}</p>
                  <Button onClick={handleRoute}>{button}</Button>
               </div>
            </div>
         </div>
      </>
   );
};

export default EmptyContent;
