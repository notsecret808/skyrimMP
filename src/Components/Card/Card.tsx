import React, {FC, useState} from "react";
import styles from './styles.module.scss';
import {Modal} from "../Modal/Modal";

type PropsT = {
    modalOpen: boolean
};


export const Card: FC<PropsT> = ({children, modalOpen}) => {
    return (
        <div className={styles.card_wrapper} style={{
            filter: modalOpen ?  "blur(8px)" : "blur(0)"
        }}>
            {children}
        </div>
    )
}