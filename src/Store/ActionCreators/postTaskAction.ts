import axios from "axios";
import { getCurrentDate } from "../../Utils/getCurrentDate";
import {
    addTaskFailed,
    addTaskStart,
    addTaskSuccess,
} from "../Slices/addTaskSlice";
import { AppDispatch } from "../store";
import { v4 as uuidv4 } from "uuid";

interface PostTaskProps {
    text: string;
    tags: string[];
    category: string;
}

export const postTask =
    ({ text, category, tags }: PostTaskProps) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(addTaskStart());
            const response = await axios.post(
                "https://taskmanager-81b12-default-rtdb.firebaseio.com/tasks.json",
                {
                    description: text,
                    date: getCurrentDate(),
                    tags,
                    category,
                    id: uuidv4(),
                }
            );
            dispatch(addTaskSuccess());
        } catch (e: any) {
            dispatch(addTaskFailed(e.message));
        }
    };
