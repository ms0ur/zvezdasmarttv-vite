import styles from './FirstSection.module.scss';
import logo from '../../assets/svg/logo.svg';
import mouse from '../../assets/svg/mouse.svg';
import {ZButton} from "../zbutton/ZButton.tsx";

export function FirstSection() {
    return (
        <div className={styles.sectionMain}>
            <div className={styles.navbar}>
                <img src={logo} alt=""/>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.info}>
                    <h1 className={styles.header}>Приложение «Звезда» для СМАРТ ТВ</h1>
                    <div className={styles.infoSecondary}>
                        <h2 className={styles.headerSecond}>Прямой эфир, видео, новости, программы и трансляции от «ЗВЕЗДЫ» прямо в вашем телевизоре!</h2>
                        <p className={styles.description}>Приложение для умных телевизоров и приставок Android TV</p>
                        <div className={styles.buttonContainer}>
                            <ZButton text="Прочитать инструкцию" />
                        </div>
                    </div>
                </div>
                <div className={styles.tvImage}>
                    <div className={styles.gradientTop}></div>

                    <div className={styles.gradientLeft}></div>

                    <div className={styles.gradientBottom}></div>

                    <img className={styles.tvImageImg} src="/public/tv-mocap.png" alt="Телевизор" />
                </div>

            </div>
            <div className={styles.mouseContainer}>
                <img src={mouse} alt=""/>
            </div>
        </div>
    );
}