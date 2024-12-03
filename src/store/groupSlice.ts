import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Group } from "../models/group";

interface GroupState {
    groups: Group[]
}

const initialState: GroupState = {
    groups: []
}

const groupSlice = createSlice({
    name: "group",
    initialState,
    reducers: {
        addGroup(state, action: PayloadAction<Group>){
            state.groups = [...state.groups, action.payload]
        },
        addMyGroups(state, action: PayloadAction<Group[]>){
            state.groups = [...state.groups,...action.payload]
        }
    },
})

export const { addGroup, addMyGroups } = groupSlice.actions;
export default groupSlice.reducer;