import { RootState } from "./store";

export const addTask = (state: RootState) => state.addTask;

export const getTasks = (state: RootState) => state.getTasks;

export const getCategories = (state: RootState) => state.getCategories;

export const addCategory = (state: RootState) => state.addCategory;
