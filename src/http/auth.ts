import { LoginFormData, ProfileFormData, RegistrationFormData, UserRegistrationResponse } from "../models/user";
import { AppDispatch } from "../store/store";
import { login, updateProfile, updateProfileImage } from "../store/userSlice";
import { authHttp, http } from "./axios";

export async function signUp(dispatch: AppDispatch, formData: RegistrationFormData){
    const {access_token, ...user}: UserRegistrationResponse = (await authHttp.post('/auth/register', formData)).data;
    dispatch(login(user))
    localStorage.setItem('access_token', access_token);
}

export async function signIn(dispatch: AppDispatch, formData: LoginFormData){
    const {access_token, ...user}: UserRegistrationResponse = (await authHttp.post('/auth/login', formData)).data;
    dispatch(login(user))
    localStorage.setItem('access_token', access_token);
}

export async function getUser(dispatch: AppDispatch){
    if(!localStorage.getItem('access_token')){
        throw new Error('Miss access token')
    }
    const user = (await http.get('/users/me')).data;
    dispatch(login(user))
}

export async function updateUser(dispatch: AppDispatch, formData: ProfileFormData){
    const updatedUser = (await http.patch(`/users/me`, formData)).data;
    dispatch(updateProfile(updatedUser))
}

export async function updateUserImage(dispatch: AppDispatch, image: File){
    const formData = new FormData();
    formData.append('image', image);
    const avatarUrl = (await http.post('/users/me/images/main', formData, {headers: {"Content-Type": 'multipart/form-data'}})).data
    dispatch(updateProfileImage(avatarUrl));
}