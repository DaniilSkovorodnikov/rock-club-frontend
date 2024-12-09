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
        },
        updateProfileImage(state, action: PayloadAction<string>){
            if(state.user){
                state.user = {...state.user, main_image: action.payload}
            }
        }
    },
})

export const { login, logout, updateProfile, updateProfileImage } = userSlice.actions;
export default userSlice.reducer;