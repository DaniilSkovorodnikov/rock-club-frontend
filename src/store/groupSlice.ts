import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Group, GroupEditData } from "../models/group";

interface GroupState {
    groups: Group[],
    groupToEdit: GroupEditData | null;
}

const initialState: GroupState = {
    groups: [],
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
                state.groups[index] = {...state.groups[index],...action.payload}
            }
        },
        setGroupToEdit(state, action: PayloadAction<Group | null>){
            state.groupToEdit = action.payload;
        }
    },
})

export const { addGroup, addMyGroups, updateGroup, setGroupToEdit } = groupSlice.actions;
export default groupSlice.reducer;