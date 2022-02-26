import { TaskCardProps } from "../../types/types";
import LineProgressBar from "../LineProgressBar/lineProgressBar";
import styles from "./taskProgress.module.scss";

const TaskProgress = ({
    tasks,
    categories,
}: {
    tasks: TaskCardProps[];
    categories: string[];
}) => {
    return (
        <div className={styles.progress}>
            <div className={styles.header}>Task Progress</div>
            {categories.map((category) => {
                const currentTasks = tasks.filter(
                    (task) => task.category === category
                );
                return (
                    <div className={styles.progressItem} key={category}>
                        <LineProgressBar
                            maxValue={currentTasks.length}
                            currentValue={
                                currentTasks.filter(
                                    (task) => task.isDone === true
                                ).length
                            }
                            progressBarColor="70, 189, 132"
                            header={category}
                        />
                    </div>
                );
            })}
        </div>
    );
};
export default TaskProgress;
