import Alert from "../../Components/Alert/alert";
import PageLayout from "../../Layout/pageLayout";
import { AlertTypes } from "../../types/types";
import WeeklyProgress from "../../Components/WeeklyProgress/weeklyProgress";
import TaskCardForm from "../../Components/TaskCardForm/taskCardForm";
import { useAppDispatch, useAppSelector } from "../../Hooks/useRedux";
import { getCategories, getTasks } from "../../Store/selectors";
import { useEffect } from "react";
import { getAllTasks } from "../../Store/ActionCreators/getTaskAction";
import TaskProgress from "../../Components/TaskProgress/taskProgress";
import { getAllCategories } from "../../Store/ActionCreators/getCategoriesAction";
import { getStringifyMonth } from "../../Utils/getCurrentDate";

const Home = () => {
    const dispatch = useAppDispatch();
    const { error, isLoading, tasks } = useAppSelector(getTasks);
    const { categories } = useAppSelector(getCategories);

    useEffect(() => {
        dispatch(getAllTasks());
        dispatch(getAllCategories());
    }, []);
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + 7);
    const date = new Date();

    return (
        <PageLayout>
            <div
                style={{
                    display: "grid",
                    gap: "24px",
                    gridAutoFlow: "column",
                    alignItems: "flex-start",
                }}
            >
                <TaskCardForm />
                <WeeklyProgress
                    date={`${date.getDate()} ${getStringifyMonth(
                        date.getMonth()
                    )} - ${newDate.getDate()} ${getStringifyMonth(
                        newDate.getMonth()
                    )}`}
                    percentsOfProgress={Math.ceil(
                        (tasks.filter(
                            (task) =>
                                task.isDone === true &&
                                Date.parse(task.date) >= date.getDate() - 1 &&
                                Date.parse(task.date) <= newDate.getTime()
                        ).length /
                            tasks.filter(
                                (task) =>
                                    Date.parse(task.date) >=
                                        date.getDate() - 1 &&
                                    Date.parse(task.date) <= newDate.getTime()
                            ).length) *
                            100
                    )}
                />
                <Alert type={AlertTypes.info} />

                <TaskProgress tasks={tasks} categories={categories} />
            </div>
        </PageLayout>
    );
};
export default Home;
