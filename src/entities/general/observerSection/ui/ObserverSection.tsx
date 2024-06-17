import React, { FC } from "react";
import { ObserverSectionProps } from "../model/types";
import { GlobalLoading } from "@/shared/ui";
import styles from "./styles.module.scss";
import clsx from "clsx";
import {ScrollTopButton} from "@/entities/general/scrollTopBtn";

const ObserverSection: FC<ObserverSectionProps> = ({
   isInitialLoading,
   isLoading,
   observerTarget,
}) => {
   return (
      <>
         {
             !isInitialLoading && (
                 <div className={clsx(styles.sectionoObserver)} ref={observerTarget}>
                    {isLoading && <GlobalLoading />}
                 </div>
             )
         }
         <ScrollTopButton/>
      </>
   );
};

export default ObserverSection;
