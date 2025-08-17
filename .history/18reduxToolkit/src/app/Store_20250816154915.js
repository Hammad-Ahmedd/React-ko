import { configureStore } from "@reduxjs/toolkit";
import { nameReducer  } from "../features/NameSlice";
export const provider=configureStore({
    reducer: nameReducer,
})