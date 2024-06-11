import { FC } from "react";
import { ObserverSectionProps } from "../model/types";
import { GlobalLoading } from "@/shared/ui";
import styles from "./styles.module.scss";
import clsx from "clsx";

const ObserverSection: FC<ObserverSectionProps> = ({
   isInitialLoading,
   isLoading,
   observerTarget,
}) => {
   return (
      !isInitialLoading && (
         <div className={clsx(styles.sectionoObserver)} ref={observerTarget}>
            {isLoading && <GlobalLoading />}
         </div>
      )
   );
};

export default ObserverSection;
