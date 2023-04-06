import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./taksSlice";
import { filtersReducer } from "./filterSlice";



export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        filters: filtersReducer,
    },
})