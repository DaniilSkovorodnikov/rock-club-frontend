import { User } from "./user";

export interface Group{
    name: string;
    description?: string;
    leader: User
}

export type GroupEditData = Omit<Group, 'leader'>