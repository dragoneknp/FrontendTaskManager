import styles from "./circleProgressBar.module.scss";
interface CircleProgressBarProps {
    percents: number;
    label: string;
}
const CircleProgressBar = ({ percents, label }: CircleProgressBarProps) => {
    return (
        <div className={styles.frame}>
            <div>
                <div className={styles["circle-big"]}>
                    <div className={styles.text}>
                        {`${percents} %`}
                        <div className={styles.small}>{label}</div>
                    </div>
                    <svg>
                        <circle
                            className={styles.bg}
                            cx="90"
                            cy="90"
                            r="80"
                        ></circle>
                        <circle
                            style={{
                                strokeDasharray: `${percents * 5.4}, 540`,
                            }}
                            className={styles.progress}
                            cx="90"
                            cy="90"
                            r="80"
                        ></circle>
                    </svg>
                </div>
            </div>
        </div>
    );
};
export default CircleProgressBar;
