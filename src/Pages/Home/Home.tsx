import Alert from "../../Components/Alert/alert";
import Button from "../../Components/Button/button";
import PageLayout from "../../Layout/pageLayout";
import LineProgressBar from "../../Components/LineProgressBar/lineProgressBar";
import { AlertTypes, TaskCardProps } from "../../types/types";
import WeeklyProgress from "../../Components/WeeklyProgress/weeklyProgress";
import TaskCard from "../../Components/TaskCard/taskCard";

const mock: TaskCardProps = {
    category: "Research",
    description:
        "Sint ex excepteur proident adipisicing adipisicing occaecat pariatur.",
    date: "Mar 14",
    comments: 2,
    files: 4,
    avatar: "top",
};
const handleClick = () => {
    console.log("Click");
};
const Home = () => {
    return (
        <PageLayout>
            <TaskCard {...mock} />

            {/* <WeeklyProgress /> */}
            <Alert type={AlertTypes.info} />
            {/* <LineProgressBar
                maxValue={8}
                currentValue={6}
                progressBarColor="70, 189, 132"
                header="UI Design"
            /> */}
            {/* <Button text="Click me" handleClick={handleClick} /> */}
        </PageLayout>
    );
};
export default Home;
