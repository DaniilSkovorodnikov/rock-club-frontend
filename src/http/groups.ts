import { Group, GroupEditData } from "../models/group";
import { User } from "../models/user";
import { addGroup, addGroupMembers, addMyGroups, updateGroup, updateGroupImage } from "../store/groupSlice";
import { AppDispatch } from "../store/store";
import { http } from "./axios";

export async function createGroup(dispatch: AppDispatch, data: GroupEditData){
    const group = (await http.post('/bands', data)).data;
    dispatch(addGroup(group));
}

export async function getMyGroups(dispatch: AppDispatch){
    const groups: Group[] = (await http.get('users/me/bands')).data;
    dispatch(addMyGroups(groups));
}

export async function getGroupById(id: string){
    const group: Group = (await http.get(`/bands/${id}`)).data;
    return group;
}

export async function updateGroupRequest(dispatch: AppDispatch, updatedGroup: GroupEditData){
    await http.patch(`/bands/${updatedGroup.id}`, updatedGroup);
    dispatch(updateGroup(updatedGroup));
}

export async function getUserBySearchParams(search: string){
    const users: User[] = (await http.get(`/users/find/${search}`)).data;
    return users;
}

export async function addMembers(dispatch: AppDispatch, groupId: string, users: User[]) {
    await http.post(`/bands/${groupId}/members`, {members_ids: users.map(user => user.id)});
    dispatch(addGroupMembers(users));
}

export async function updateGroupImageRequest(dispatch: AppDispatch, groupId: string, image: File){
    const formData = new FormData();
    formData.append('image', image);
    const imageUrl = (await http.post(`/bands/${groupId}/images/main`, formData, {headers: {"Content-Type": 'multipart/form-data'}})).data;
    dispatch(updateGroupImage({id: groupId, imageUrl}));
}