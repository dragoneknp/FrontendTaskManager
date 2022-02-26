import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetCategoriesProps {
    isLoading: boolean;
    error: string;
    categories: string[];
}

const initialState: GetCategoriesProps = {
    isLoading: false,
    error: "",
    categories: [],
};

export const getCategoriesSlice = createSlice({
    name: "getCategories",
    initialState,
    reducers: {
        getCategoriesStart(state) {
            state.isLoading = true;
            state.error = "";
            state.categories = [];
        },
        getCategoriesSuccess(state, action: PayloadAction<string[]>) {
            state.isLoading = false;
            state.categories = action.payload;
            state.error = "";
        },
        getCategoriesFailed(state, action: PayloadAction<string>) {
            state.categories = [];
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { getCategoriesFailed, getCategoriesStart, getCategoriesSuccess } =
    getCategoriesSlice.actions;
