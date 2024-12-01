import { RegistrationFormData, UserRegistrationResponse } from "../models/user";
import { AppDispatch } from "../store/store";
import { login } from "../store/userSlice";
import { http } from "./axios";

export async function signUp(dispatch: AppDispatch, formData: RegistrationFormData){
    const {access_token, ...user}: UserRegistrationResponse = await http.post('/auth/register', formData);
    dispatch(login(user))
    localStorage.setItem('access_token', access_token);
}