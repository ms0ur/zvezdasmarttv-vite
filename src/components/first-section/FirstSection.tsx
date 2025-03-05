import styles from './FirstSection.module.scss';
import logo from '../../assets/svg/logo.svg';
import {ZButton} from "../zbutton/ZButton.tsx";

export function FirstSection() {
    return (
        <div className={styles.sectionMain}>
            <div className={styles.navbar}>
                <img src={logo} alt=""/>
            </div>
            <div>
                <div>
                    <h1 className={styles.header}>Приложение «Звезда» для СМАРТ ТВ</h1>
                    <h2 className={styles.headerSecond}>Прямой эфир, видео, новости, программы и трансляции от «ЗВЕЗДЫ» прямо в вашем телевизоре!</h2>
                    <p>Приложение для умных телевизоров и приставок Android TV</p>
                    <ZButton text="Прочитать инструкцию" />
                </div>
            </div>
        </div>
    );
}