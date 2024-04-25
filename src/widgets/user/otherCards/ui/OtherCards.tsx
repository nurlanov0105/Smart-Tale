import { StandartCard } from "@/features/user/standartCard";
import styles from "./styles.module.scss";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import clsx from "clsx";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

const OtherCards = () => {
   const swiperRef = useRef<any>(null);
   const onSwiper = (swiper: SwiperClass) => {
      swiperRef.current = swiper;
   };

   const handlePrevBtn = () => swiperRef.current?.slidePrev();
   const handleNextBtn = () => swiperRef.current?.slideNext();

   return (
      <section className={styles.section}>
         <h3 className="h3">Другие товары</h3>
         <div className={styles.section__content}>
            <div>
               <Swiper spaceBetween={16} slidesPerView="auto" onSwiper={onSwiper}>
                  {[...Array(8)].map((_, i: number) => (
                     <SwiperSlide key={i} className={styles.section__card}>
                        <StandartCard />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
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
      </section>
   );
};

export default OtherCards;
