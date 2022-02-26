import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddCategoryProps {
    isLoading: boolean;
    error: string;
}

const initialState: AddCategoryProps = {
    isLoading: false,
    error: "",
};
export const addCategorySlice = createSlice({
    name: "addCategory",
    initialState,
    reducers: {
        addCategoryStart(state) {
            state.error = "";
            state.isLoading = true;
        },
        addCategorySuccess(state) {
            state.error = "";
            state.isLoading = false;
        },
        addCategoryFailed(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const { addCategoryFailed, addCategoryStart, addCategorySuccess } =
    addCategorySlice.actions;
