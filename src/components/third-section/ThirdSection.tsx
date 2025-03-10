
import {ZButton} from "../";
import {ProgramsGrid} from "../";


import styles from './ThirdSection.module.scss';


export function ThirdSection() {
    return(
       <div className={styles.sectionMain}>
           <div className={styles.lineContainer}></div>
           <div className={styles.info}>
               <div className={styles.infoText}>
                   <h2 className={styles.infoTextTitle}>Все самое интересное!</h2>
                   <p className={styles.infoTextDesc}>Смотрите прямой эфир, фильмы, трансляции и новые выпуски программ первыми</p>
               </div>
               <div className={styles.infoGrid}>
                   <ProgramsGrid />
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