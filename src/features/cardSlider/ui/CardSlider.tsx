import { FC } from "react";
import { Props } from "../model/types";
import styles from "./styles.module.scss";

const CardSlider: FC<Props> = ({ images }) => {
   return (
      <div className={styles.slider}>
         <div className={styles.slider__content}>
            <div className={styles.slider__big} style={{ backgroundImage: `url()` }} />
            <div className={styles.slider__row}>
               {images.map((item: any, i: number) => (
                  <div
                     key={i}
                     className={styles.slider__small}
                     style={{ backgroundImage: `url()` }}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default CardSlider;
