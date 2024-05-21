"use client";

import { FC, useEffect, useRef, useState } from "react";
import { SliderProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardSlider: FC<SliderProps> = ({ images, isLarge, isLoading = true }) => {
   const [selectedImage, setSelectedImage] = useState(images[0]);
   const swiperRef = useRef<any>(null);
   useEffect(() => {
      setSelectedImage(images[0]);
   }, [images, isLoading]);

   const readySlides = isLoading
      ? [...Array(5)].map((_, i: number) => (
           <SwiperSlide key={i}>
              <div className={styles.slider__big} />
           </SwiperSlide>
        ))
      : images.map((item: { images: string }, i: number) => (
           <SwiperSlide key={i}>
              <div
                 className={styles.slider__big}
                 style={{ backgroundImage: `url(${item.images})` }}
              />
           </SwiperSlide>
        ));

   const readySubSlides = isLoading
      ? [...Array(5)].map((_, i: number) => <div key={i} className={styles.slider__small} />)
      : images.map((item: { images: string }, i: number) => (
           <div
              onClick={() => handlePreviewClick(item, i)}
              key={i}
              className={clsx(
                 styles.slider__small,
                 selectedImage === item ? styles.slider__small_active : ""
              )}
              style={{ backgroundImage: `url(${item.images})` }}
           />
        ));

   const onSwiper = (swiper: SwiperClass) => {
      swiperRef.current = swiper;
   };

   const handlePreviewClick = (image: any, index: number) => {
      setSelectedImage(image);
      swiperRef.current?.slideTo(index);
   };

   useEffect(() => {
      if (swiperRef.current) {
         swiperRef.current.on("slideChange", () => {
            setSelectedImage(images[swiperRef.current?.activeIndex]);
         });
      }
      // eslint-disable-next-line
   }, [swiperRef.current]);

   return (
      <div className={clsx(styles.slider, isLarge ? styles.slider_large : "")}>
         <div className={styles.slider__content}>
            <div className={styles.slider__wrapper}>
               <Swiper onSwiper={onSwiper} slidesPerView="auto">
                  {readySlides}
               </Swiper>
            </div>
            <div className={styles.slider__row}>{readySubSlides}</div>
         </div>
      </div>
   );
};

export default CardSlider;
