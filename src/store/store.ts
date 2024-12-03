import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import groupSlice from "./groupSlice";

export const store = configureStore({
    reducer: {
        userSlice,
        groupSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch