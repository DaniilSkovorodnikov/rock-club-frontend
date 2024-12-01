import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user";

interface UserState {
    isAuthenticated: boolean;
    user: User | null;
}

const initialState: UserState = {
    isAuthenticated: !!localStorage.getItem('access_token'),
    user: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;