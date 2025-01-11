import { User } from "./user";

export interface News{
    title: string;
    description: string;
    createdAt: string;
    image: string;
}

export interface ScheduleItem{
    timeFrom: string;
    timeTo: string;
    owner: User;
    isIndividual: boolean;
    date: Date;
}