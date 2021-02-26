import {FC} from "react";
import styles from './styles.module.scss';

type PropsT = {
    isOpen: boolean
    closeModal: () => void
    cityName: string
};

export const Modal: FC<PropsT> = ({isOpen, closeModal, cityName}) => {
    if (isOpen) {
        return (
            <div className={styles.modal}>
                <div className={styles.modal_message}>
                    Вы действительно хотите начать вашу историю в {cityName + 'e'}? Город появления изменить будет
                    нельзя!
                    <div className={styles.modal_btn_row}>
                        <div className={styles.modal_btn} onClick={closeModal}>
                            Нет, вернуться!
                        </div>
                        <div className={styles.modal_btn}>
                            Да, продолжить
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (<div></div>)
}