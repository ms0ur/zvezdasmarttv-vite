import {ZButton} from "../";
import {ProgramsGrid} from "../";

import { useState, useEffect } from "react";


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
                   {isTablet ? <img width='100%' src="/programs/broadcast-15.png" alt=""/> : <ProgramsGrid />}
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