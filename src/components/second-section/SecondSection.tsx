
import {ZButton} from "../zbutton/ZButton.tsx";

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
                <div className={styles.installGuide}>
                    <div className={styles.installGuideItem}>
                        <div className={styles.installGuideItemImage}>
                            <img width='100%' src={selected === 0 ? "/install/tv/browser/installTVBrowser1.png" : "/install/tv/usb/installTVUSB1.png"} alt=""/>
                        </div>
                        <p className={styles.installGuideItemText1}>
                            {
                                selected === 0 ?
                                    "Установите из магазина приложений вашего телевизора браузер, поддерживающий скачивание файлов, например, браузер Browser" :
                                    "Скачайте с нашего сайта установочный APK файл и перенесите его на флешку"
                            }
                        </p>
                        <p className={styles.installGuideItemText2}>

                        </p>
                        <div className={styles.installGuideItemNumber}>
                            1
                        </div>
                    </div>
                    <div className={styles.installGuideItem}>
                        <div className={styles.installGuideItemImage}>
                            <img width='100%' src={selected === 0 ? "/install/tv/browser/installTVBrowser2.png" : "/install/tv/usb/installTVUSB2.png"} alt=""/>
                        </div>
                        <p className={styles.installGuideItemText1}>
                            {
                                selected === 0 ?
                                    "Откройте в браузере вашего телевизора эту страницу (tvzvezda.ru/sp/smart) и нажмите кнопку «Скачать приложение»" :
                                    "Установите на вашем устройстве любой файловый менеджер"
                            }
                        </p>
                        <p className={styles.installGuideItemText2}>

                            {
                                selected === 0 ?
                                    "Если браузер вашего телевизора блокирует скачивание APK, установите сторонний браузер, поддерживающий скачивание файлов – смотрите пункт 1" :
                                    "В качестве примера файлового менеджера можно использовать File Manager, Cx File Explorer, Mi Проводник"
                            }
                        </p>
                        <div className={styles.installGuideItemNumber}>
                            2
                        </div>
                    </div>
                    <div className={styles.installGuideItem}>
                        <div className={styles.installGuideItemImage}>
                            <img width='100%' src={selected === 0 ? "/install/tv/browser/installTVBrowser3.png" : "/install/tv/usb/installTVUSB3.png"} alt=""/>
                        </div>
                        <p className={styles.installGuideItemText1}>
                            {
                                selected === 0 ?
                            "После завершения скачивания файла APK на ваш телевизор, откройте установочный файл" :
                            "Вставьте флешку в ваш телевизор и откройте APK-файл при помощи установленного файлового менеджера"
                            }
                        </p>
                        <p className={styles.installGuideItemText2}>
                            {
                                selected === 0 ?
                                    "Если файл не открылся автоматически, найдите его в «Загрузках» браузера и откройте" :
                                    ""
                            }
                        </p>
                        <div className={styles.installGuideItemNumber}>
                            3
                        </div>
                    </div>
                    <div className={styles.installGuideItem}>
                        <div className={styles.installGuideItemImage}>
                            <img width='100%' src={selected === 0 ? "/install/tv/browser/installTVBrowser4.png" : "/install/tv/usb/installTVUSB4.png"} alt=""/>
                        </div>
                        <p className={styles.installGuideItemText1}>
                            {
                                selected === 0 ?
                                    "Нажмите кнопку «Установить», а затем, после установки приложения, закройте браузер и откройте приложение «Звезда»" :
                                    "Нажмите кнопку «Установить», а затем, после установки приложения, закройте файловый менеджер и откройте приложение «Звезда»"
                            }
                        </p>
                        <p className={styles.installGuideItemText2}>

                        </p>
                        <div className={styles.installGuideItemNumber}>
                            4
                        </div>
                    </div>
                </div>
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