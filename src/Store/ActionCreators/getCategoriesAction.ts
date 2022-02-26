import axios from "axios";
import {
    getCategoriesFailed,
    getCategoriesStart,
    getCategoriesSuccess,
} from "../Slices/getCategoriesSlice";
import { AppDispatch } from "../store";

export const getAllCategories = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(getCategoriesStart());
        const response = await axios.get(
            "https://taskmanager-81b12-default-rtdb.firebaseio.com/categories.json"
        );

        if (response.data === null) {
            throw new Error("No categories found");
        }

        dispatch(
            getCategoriesSuccess(
                Array.from(
                    new Set(
                        Object.values(response.data).map(
                            (item: any) => item.category
                        )
                    )
                )
            )
        );
    } catch (e: any) {
        dispatch(getCategoriesFailed(e.message));
    }
};
