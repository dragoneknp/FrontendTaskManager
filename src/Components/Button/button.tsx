import { EffectCallback } from "react";
import styles from "./button.module.scss";
interface ButtonProps {
    text: string;
    handleClick?: () => void;
}
const Button = ({ text, handleClick = () => {}}: ButtonProps) => {
    return (
        <button className={styles.container} onClick={handleClick}>
            <div className={styles.text}>{text}</div>
        </button>
    );
};
export default Button;
