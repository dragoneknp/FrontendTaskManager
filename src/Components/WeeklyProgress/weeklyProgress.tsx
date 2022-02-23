import styles from "./weeklyProgress.module.scss";
import CircleProgressBar from "../CircleProgressBar/circleProgressBar";
import more from "../../Assets/more.svg";
const WeeklyProgress = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <div className={styles.label}>Weekly Progress</div>
                    <div className={styles.date}>Start from Nov 7-14, 2022</div>
                </div>
                <div className={styles.edit}>
                    <img src={more} />
                </div>
            </div>
            <div className={styles.progress}>
                <CircleProgressBar percents={45} label={"Tasks Completed"} />
            </div>
        </div>
    );
};
export default WeeklyProgress;
