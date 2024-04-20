"use client";

import { FC, useEffect, useRef, useState } from "react";
import { SliderProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardSlider: FC<SliderProps> = ({ images, isLarge }) => {
   const [selectedImage, setSelectedImage] = useState(images[0]);
   const swiperRef = useRef<any>(null);

   const readySlides = images.map((image: string) => (
      <SwiperSlide key={image}>
         <div className={styles.slider__big} style={{ backgroundImage: `url(${image})` }} />
      </SwiperSlide>
   ));

   const onSwiper = (swiper: SwiperClass) => {
      swiperRef.current = swiper;
   };

   const handlePreviewClick = (image: string, index: number) => {
      setSelectedImage(image);
      swiperRef.current?.slideTo(index);
   };

   useEffect(() => {
      if (swiperRef.current) {
         swiperRef.current.on("slideChange", () => {
            setSelectedImage(images[swiperRef.current?.activeIndex]);
         });
      }
   }, [swiperRef.current]);

   return (
      <div className={clsx(styles.slider, isLarge ? styles.slider_large : "")}>
         <div className={styles.slider__content}>
            <div className={styles.slider__wrapper}>
               <Swiper onSwiper={onSwiper} slidesPerView="auto">
                  {readySlides}
               </Swiper>
            </div>
            <div className={styles.slider__row}>
               {images.map((image: any, i: number) => (
                  <div
                     onClick={() => handlePreviewClick(image, i)}
                     key={i}
                     className={clsx(
                        styles.slider__small,
                        selectedImage === image ? styles.slider__small_active : ""
                     )}
                     style={{ backgroundImage: `url(${image})` }}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default CardSlider;
