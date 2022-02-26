import axios from "axios";
import {
    addCategoryFailed,
    addCategoryStart,
    addCategorySuccess,
} from "../Slices/addCategorySlice";
import { AppDispatch } from "../store";

export const postCategory =
    (category: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(addCategoryStart());
            await axios.post(
                "https://taskmanager-81b12-default-rtdb.firebaseio.com/categories.json",
                { category }
            );
            dispatch(addCategorySuccess());
        } catch (e: any) {
            dispatch(addCategoryFailed(e.message));
        }
    };
