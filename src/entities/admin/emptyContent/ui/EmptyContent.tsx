import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";

import {dataMap} from "../model/dataMap";
import type { EmptyContentProps } from "../model/types";
import styles from "./styles.module.scss";

const EmptyContent: FC<EmptyContentProps> = ({ type }) => {
   const router = useRouter();

   const {title, description, button, route} = dataMap[type]

   const handleRoute = () => router.push(route)

   return (
       <>
          <div className={styles.organization}>
             <div className={styles.organization__row}>
                <div>
                   <h3 className="h3">{title}</h3>
                   <p className={styles.organization__text}>{description}</p>
                   <Button onClick={handleRoute}>{button}</Button>
                </div>
             </div>
          </div>
       </>
   );
};

export default EmptyContent;
