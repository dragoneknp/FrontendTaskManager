import { useEffect } from "react";
import TaskCard from "../../Components/TaskCard/taskCard";
import { useLoading } from "../../Hooks/useLoading";
import { useAppDispatch, useAppSelector } from "../../Hooks/useRedux";
import PageLayout from "../../Layout/pageLayout";
import { getAllCategories } from "../../Store/ActionCreators/getCategoriesAction";
import { getAllTasks } from "../../Store/ActionCreators/getTaskAction";
import { getCategories, getTasks } from "../../Store/selectors";
import { TaskCardProps } from "../../types/types";
import styles from "./tasks.module.scss";

const Tasks = () => {
    const dispatch = useAppDispatch();
    const { error, isLoading, tasks } = useAppSelector(getTasks);
    const { categories } = useAppSelector(getCategories);

    const [load] = useLoading();

    useEffect(() => {
        dispatch(getAllTasks());
        dispatch(getAllCategories());
    }, []);
    return (
        <PageLayout>
            {load({
                flag: isLoading,
                component: (
                    <div className={styles.gridOfCategories}>
                        {categories.map((category) => (
                            <div className={styles.category} key={category}>
                                <div className={styles.header}>{category}</div>
                                {tasks
                                    .filter(
                                        (task) => task.category === category
                                    )
                                    .map((task) => {
                                        return (
                                            <TaskCard
                                                isDone={task.isDone}
                                                key={task.id}
                                                id={task.id}
                                                tags={task.tags}
                                                description={task.description}
                                                date={task.date}
                                                comments={0}
                                                files={0}
                                                avatar={""}
                                                category={task.category}
                                            />
                                        );
                                    })}
                            </div>
                        ))}
                    </div>
                ),
            })}
        </PageLayout>
    );
};
export default Tasks;
