import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileFormData, User } from "../models/user";

interface UserState {
    isAuthenticated: boolean;
    user: User | null;
}

const initialState: UserState = {
    isAuthenticated: false,
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
        updateProfile(state, action: PayloadAction<ProfileFormData>){
            if(state.user){
                state.user = {...state.user,...action.payload}
            }
        }
    },
})

export const { login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;