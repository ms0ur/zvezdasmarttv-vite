
import {ZButton} from "../";
import {InstallGuideDesktop} from "../";

import logo from "../../assets/svg/star-logo.svg";
import on from "../../assets/svg/on.svg";
import off from "../../assets/svg/off.svg";
import mouseBlack from "../../assets/svg/mouse_black.svg";

import styles from './SecondSection.module.scss';
import {useState} from "react";





export function SecondSection() {
    const [selected, setSelected] = useState(0);
    return (
        <>
            <div className={styles.sectionMain}>
                <div className={styles.lineContainer}></div>
                <h2 className={styles.sectionHeader}>Установка приложения</h2>
                <div className={styles.desc}>
                    <div className={styles.descLogo}>
                        <img src={logo} alt=""/>
                    </div>
                    <p className={styles.descText}>Приложение «Звезда» доступно бесплатно в
                        магазине приложений вашего телевизора,
                        в <a href='https://www.rustore.ru/catalog/app/ru.infolio.zvezdatv' className={styles.descTextLink}>RuStore</a>,{'\u00A0'}
                        <a href='https://appgallery.huawei.ru/app/C109571413' className={styles.descTextLink}>AppGallery</a>(Huawei),{'\u00A0'}
                        <a href='https://global.app.mi.com/details?lo=RU&la=ru&id=ru.infolio.zvezdatv' className={styles.descTextLink}>GetApps</a>(Xiaomi).
                        Если вы не нашли приложение в магазине вашего телевизора,
                        то его можно установить вручную.</p>
                </div>
                <div className={styles.selector}>
                    <div className={styles.selectorItem} onClick={() => setSelected(0)}>
                        <div className={styles.selectorItemPoint}>
                            <img src={selected === 0 ? on : off} alt=""/>
                        </div>
                        <p className={styles.selectorItemText}>
                            Через браузер телевизора
                        </p>
                    </div>
                    <div className={styles.selectorItem} onClick={() => setSelected(1)}>
                        <div className={styles.selectorItem}>
                            <div className={styles.selectorItemPoint}>
                                <img src={selected === 0 ? off : on} alt=""/>
                            </div>
                            <p className={styles.selectorItemText}>
                                При помощи флешки (USB-накопителя)
                            </p>
                        </div>
                    </div>
                </div>
                <InstallGuideDesktop selected={selected} />
                <div className={styles.buttonContainer}>
                    <ZButton text={"Скачать приложение"} />
                </div>
                <div className={styles.mouse}>
                    <img src={mouseBlack} alt=""/>
                </div>
            </div>
        </>
    )
}