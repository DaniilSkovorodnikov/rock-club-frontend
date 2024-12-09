import { User } from "./user";

export interface Group{
    id: string;
    name: string;
    description?: string;
    leader: User;
    members: User[];
    main_image?: string;
}

export type GroupEditData = Omit<Group, 'leader' | 'members'>