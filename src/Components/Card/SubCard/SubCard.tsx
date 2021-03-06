import React, {FC, ReactNode} from "react";
import styles from "../styles.module.scss";

type PropsT = {
    logoImg: string | undefined
    logoName: string
    bodyText: ReactNode
    logo?: any
    bg_link: string
    openModal: (cityName: string) => void
};


export const SubCard: FC<PropsT> = ({logoImg, logoName, logo, bodyText, bg_link, openModal}) => {
    return (
        <div style={{
            background: `url(${bg_link}) rgba(0,0,0,0.8) top no-repeat`,
            backgroundSize: "cover",
            backgroundBlendMode: "overlay"
        }}
             className={styles.subcard_wrapper}>

            <div className={styles.subcard_body_wrapper}>
                <div className={styles.subcard_logo_wrapper}>
                    <div className={styles.subcard_logo}>
                        <div className={styles.subcard_logo_container}>
                            <img src={logoImg} alt="city image"/>
                        </div>
                    </div>
                    <div className={styles.subcard_logoName_wrapper}>
                        <div className={styles.subcard_logoName}>
                            {logoName}
                        </div>
                    </div>
                </div>
                <div className={styles.subcard_text_wrapper}>
                    <div className={styles.subcard_text_container}>
                        {bodyText}
                    </div>
                </div>
            </div>

            <div className={styles.subcard_footer}>
                <div className={styles.subcard_btn_wrapper}>
                    <div className={styles.subcard_btn} onClick={() => openModal(logoName)}>
                        <span>Подтвердить выбор</span>
                    </div>
                </div>
            </div>
        </div>
    )
}