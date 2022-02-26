import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AddTaskProps {
    isLoading: boolean;
    error: string;
    isSuccess: boolean;
}

const initialState: AddTaskProps = {
    isLoading: false,
    error: "",
    isSuccess: false,
};

export const addTaskSlice = createSlice({
    name: "addTask",
    initialState,
    reducers: {
        addTaskStart(state) {
            state.isLoading = true;
            state.error = "";
            state.isSuccess = false;
        },
        addTaskSuccess(state) {
            state.isLoading = false;
            state.error = "";
            state.isSuccess = true;
        },
        addTaskFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
            state.isSuccess = false;
        },
    },
});

export const { addTaskFailed, addTaskStart, addTaskSuccess } =
    addTaskSlice.actions;

