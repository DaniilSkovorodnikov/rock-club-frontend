import { GroupEditData } from "../models/group";
import { addGroup, addMyGroups } from "../store/groupSlice";
import { AppDispatch } from "../store/store";
import { http } from "./axios";

export async function createGroup(dispatch: AppDispatch, data: GroupEditData){
    const group = (await http.post('/bands', data)).data;
    dispatch(addGroup(group));
}

export async function getMyGroups(dispatch: AppDispatch){
    const groups = (await http.get('/bands/my')).data;
    dispatch(addMyGroups(groups));
}