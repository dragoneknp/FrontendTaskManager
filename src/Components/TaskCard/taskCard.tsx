import { TaskCardProps } from "../../types/types";
import styles from "./taskCard.module.scss";
import more from "../../Assets/more.svg";
const TaskCard = ({
    category,
    description,
    date,
    comments,
    files,
    avatar,
}: TaskCardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.category}>{category}</div>
                <div className={styles.edit}>
                    <img src={more} />
                </div>
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.footer}>
                <div className={styles.date}>{date}</div>
                <div className={styles.comments}>{comments}</div>
                <div className={styles.files}>{files}</div>
                <div className={styles.avatar}>{avatar}</div>
            </div>
        </div>
    );
};
export default TaskCard;
