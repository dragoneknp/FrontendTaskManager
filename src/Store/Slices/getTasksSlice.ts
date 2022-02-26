import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskCardProps } from "../../types/types";
interface GetTasksProps {
    isLoading: boolean;
    error: string;
    tasks: TaskCardProps[];
}

const initialState: GetTasksProps = {
    isLoading: false,
    error: "",
    tasks: [],
};

export const getTasksSlice = createSlice({
    name: "getTasks",
    initialState,
    reducers: {
        getTasksStart(state) {
            state.error = "";
            state.isLoading = true;
            state.tasks = [];
        },
        getTasksSuccess(state, action: PayloadAction<TaskCardProps[]>) {
            state.error = "";
            state.isLoading = false;
            state.tasks = action.payload;
        },
        getTasksFailed(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
            state.tasks = [];
        },
    },
});

export const { getTasksFailed, getTasksStart, getTasksSuccess } =
    getTasksSlice.actions;
