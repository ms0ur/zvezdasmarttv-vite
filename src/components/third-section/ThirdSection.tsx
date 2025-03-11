import {ZButton} from "../";
import {ProgramsGrid} from "../";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-expect-error css from swiper npm package
import 'swiper/css';

import styles from './ThirdSection.module.scss';

export function ThirdSection() {
    const [isTablet, setIsTablet] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => setIsTablet(window.innerWidth < 992);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    
    return(
       <div className={styles.sectionMain}>
           <div className={styles.lineContainer}></div>
           <div className={styles.info}>
               <div className={styles.infoText}>
                   <h2 className={styles.infoTextTitle}>Все самое интересное!</h2>
                   <p className={styles.infoTextDesc}>Смотрите прямой эфир, фильмы, трансляции и новые выпуски программ первыми</p>
               </div>
               <div className={styles.infoGrid}>
                   {isTablet ? (
                       <Swiper
                           spaceBetween={50}
                           slidesPerView={1}
                       >
                           <SwiperSlide><img width='100%' src="/programs/broadcast-01.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-02.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-03.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-04.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-05.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-06.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-07.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-08.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-09.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-10.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-11.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-12.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-13.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-14.png" alt=""/></SwiperSlide>
                           <SwiperSlide><img width='100%' src="/programs/broadcast-15.png" alt=""/></SwiperSlide>
                       </Swiper>
                   ) : <ProgramsGrid />}
               </div>
           </div>
           <div className={styles.action}>
               <div className={styles.actionButton}>
                   <ZButton text={"Мобильное приложение"}/>
               </div>
               <footer className={styles.footer}>
                   © 2020 ОАО «ТРК ВС РФ «ЗВЕЗДА»
               </footer>
           </div>
       </div>
    )
}