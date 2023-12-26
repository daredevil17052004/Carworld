import { configureStore } from "@reduxjs/toolkit";
import { listReducers } from "./reducers";

export const myStore = configureStore(
    {
        reducer:{
            listReducers
        }
    }
)