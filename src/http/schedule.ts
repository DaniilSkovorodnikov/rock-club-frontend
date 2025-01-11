import { http } from "./axios";

export async function getSchedule(date_from: Date, date_to: Date) {
    const schedule = await http.get('/schedule', { params: { date_from, date_to } });
    return schedule.data;
}