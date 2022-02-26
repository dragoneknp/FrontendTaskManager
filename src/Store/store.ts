import { configureStore } from "@reduxjs/toolkit";
import { addCategorySlice } from "./Slices/addCategorySlice";
import { addTaskSlice } from "./Slices/addTaskSlice";
import { getCategoriesSlice } from "./Slices/getCategoriesSlice";
import { getTasksSlice } from "./Slices/getTasksSlice";

export const store = configureStore({
    reducer: {
        addTask: addTaskSlice.reducer,
        getTasks: getTasksSlice.reducer,
        getCategories: getCategoriesSlice.reducer,
        addCategory: addCategorySlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
