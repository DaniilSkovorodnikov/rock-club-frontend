import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Group, GroupEditData } from "../models/group";
import { User } from "../models/user";

interface GroupState {
    groups: Group[],
    currentActiveGroup: Group | null;
    groupToEdit: Group | null;
}

const initialState: GroupState = {
    groups: [],
    currentActiveGroup: null,
    groupToEdit: null,
}

const groupSlice = createSlice({
    name: "group",
    initialState,
    reducers: {
        addGroup(state, action: PayloadAction<Group>){
            state.groups = [...state.groups, action.payload]
        },
        addMyGroups(state, action: PayloadAction<Group[]>){
            state.groups = action.payload
        },
        updateGroup(state, action: PayloadAction<GroupEditData>){
            const index = state.groups.findIndex(g => g.id === action.payload.id);
            if(index !== -1){
                state.groups[index] = {...state.groups[index], ...action.payload}
            }
        },
        updateGroupImage(state, action: PayloadAction<{id: string, imageUrl: string}>){
            const index = state.groups.findIndex(g => g.id === action.payload.id);
            if(index !== -1){
                state.groups[index] = {...state.groups[index], main_image: action.payload.imageUrl};
            }
        },
        setCurrentActiveGroup(state, action: PayloadAction<Group | null>){
            state.currentActiveGroup = action.payload;
        },
        setGroupToEdit(state, action: PayloadAction<Group | null>){
            state.groupToEdit = action.payload;
        },
        addGroupMembers(state, action: PayloadAction<User[]>){
            if(state.currentActiveGroup){
                state.currentActiveGroup.members = [...state.currentActiveGroup.members,...action.payload]
            }
        }
    },
})

export const { addGroup, addMyGroups, updateGroup, setCurrentActiveGroup, setGroupToEdit, addGroupMembers, updateGroupImage } = groupSlice.actions;
export default groupSlice.reducer;