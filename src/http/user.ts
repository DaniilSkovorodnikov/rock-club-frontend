import { Group } from "../models/group";
import { ProfileFormData, User } from "../models/user";
import { AppDispatch } from "../store/store";
import { updateProfile, updateProfileImage } from "../store/userSlice";
import { http } from "./axios";

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

export async function getUserById(id: string): Promise<User> {
    const user: User = (await http.get(`/users/${id}`)).data;
    return user;
}

export async function getUserGroups(id: string): Promise<Group[]> {
    const groups: Group[] = (await http.get(`/users/${id}/bands`)).data;
    return groups;
}