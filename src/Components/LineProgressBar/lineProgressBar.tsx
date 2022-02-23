import styles from "./lineProgressBar.module.scss";
interface LineProgressBarProps {
    header: string;
    currentValue: number;
    maxValue: number;
    progressBarColor: string;
}
const LineProgressBar = ({
    header,
    currentValue,
    maxValue,
    progressBarColor,
}: LineProgressBarProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>{header}</div>
                <div
                    className={styles.status}
                >{`${currentValue} / ${maxValue}`}</div>
            </div>
            <div
                className={styles.progress}
                style={{ background: `rgba(${progressBarColor}, 0.2)` }}
            >
                <div
                    style={{
                        width: `${(currentValue / maxValue) * 100}%`,
                        background: `rgb(${progressBarColor})`,
                    }}
                    className={styles["progress-value"]}
                ></div>
            </div>
        </div>
    );
};
export default LineProgressBar;
