import { FC, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { StandartCard } from "@/features/user/standartCard";
import { CommonSkeleton } from "@/shared/ui";
import { SliderCardsProps } from "../model/types";
import { ArrowRight, ArrowLeft } from "lucide-react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import "swiper/css";

const SliderCards: FC<SliderCardsProps> = ({ data, type, isLoading }) => {
   const swiperRef = useRef<any>(null);
   const onSwiper = (swiper: SwiperClass) => {
      swiperRef.current = swiper;
   };

   const handlePrevBtn = () => swiperRef.current?.slidePrev();
   const handleNextBtn = () => swiperRef.current?.slideNext();

   return (
      <section className={styles.section}>
         <div className={styles.section__heading}>
            <h3 className="h3">Другие товары</h3>
            <div className={styles.section__btns}>
               <button
                  className={clsx(styles.section__btn, styles.section__btn_left)}
                  onClick={handlePrevBtn}>
                  <ArrowLeft className={styles.section__icon} />
               </button>
               <button
                  className={clsx(styles.section__btn, styles.section__btn_right)}
                  onClick={handleNextBtn}>
                  <ArrowRight className={styles.section__icon} />
               </button>
            </div>
         </div>
         <div className={styles.section__content}>
            <Swiper spaceBetween={16} slidesPerView="auto" onSwiper={onSwiper}>
               {isLoading
                  ? [...Array(8)].map((item: any, i: number) => (
                       <SwiperSlide key={i} className={styles.section__card}>
                          <CommonSkeleton key={i} type={type} />
                       </SwiperSlide>
                    ))
                  : data.map((item: any, i: number) => (
                       <SwiperSlide key={i} className={styles.section__card}>
                          <StandartCard item={item} />
                       </SwiperSlide>
                    ))}
            </Swiper>
         </div>
      </section>
   );
};

export default SliderCards;
