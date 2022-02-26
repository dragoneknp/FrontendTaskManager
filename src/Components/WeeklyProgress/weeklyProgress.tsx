import styles from "./weeklyProgress.module.scss";
import CircleProgressBar from "../CircleProgressBar/circleProgressBar";
import more from "../../Assets/more.svg";

interface WeeklyProgressProps {
    date: string;
    percentsOfProgress: number;
}

const WeeklyProgress = ({date, percentsOfProgress} : WeeklyProgressProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <div className={styles.label}>Weekly Progress</div>
                    <div className={styles.date}>Start from {date}</div>
                </div>
                <div className={styles.edit}>
                    <img src={more} />
                </div>
            </div>
            <div className={styles.progress}>
                <CircleProgressBar percents={percentsOfProgress} label={"Tasks Completed"} />
            </div>
        </div>
    );
};
export default WeeklyProgress;
