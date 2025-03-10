import styles from './InstallGuideDesktop.module.scss';

// selected - получаем переменную из usestate через пропсы
interface InstallGuideDesktopProps {
    selected: number
}


export function InstallGuideDesktop({selected}: InstallGuideDesktopProps) {
    return(
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
    )
}