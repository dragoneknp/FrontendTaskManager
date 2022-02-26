import axios from "axios";
import {
    getTasksFailed,
    getTasksStart,
    getTasksSuccess,
} from "../Slices/getTasksSlice";
import { AppDispatch } from "../store";

export const getAllTasks = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(getTasksStart());
        const response = await axios.get(
            "https://taskmanager-81b12-default-rtdb.firebaseio.com/tasks.json"
        );
        if (response.data === null) {
            throw new Error("Tasks not found");
        }
        dispatch(getTasksSuccess(Object.values(response.data)));
    } catch (e: any) {
        dispatch(getTasksFailed(e.message));
    }
};
