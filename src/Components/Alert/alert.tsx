import styles from "./alert.module.scss";

import cross from "./assets/cross.svg";
import { AlertTypes } from "../../types/types";
import { useState } from "react";
import { alertSwitch } from "../../Utils/alertTypes";
interface AlertProps {
    type: AlertTypes;
}

const Alert = ({ type }: AlertProps) => {
    const [isVisible, changeVisibility] = useState<Boolean>(true);
    const handleClick = () => changeVisibility(!isVisible);
    const { background, color, img, title, description } = alertSwitch(type);
    return (
        <div
            className={`${styles.container} ${
                isVisible ? styles.visible : styles.notVisible
            }`}
            style={{
                background: background,
                color: color,
                border: `1px solid ${color}`,
            }}
        >
            <div className={styles.icon}>
                <img src={img} />
            </div>
            <div className={styles.text}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.cross} onClick={handleClick}>
                <img src={cross} />
            </div>
        </div>
    );
};
export default Alert;
