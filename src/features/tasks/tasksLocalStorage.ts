import { Task } from "./types";

interface TaskProps { tasks: Task[] };

const key = "tasks";

export const saveTasksInLocalStorage = (tasks: TaskProps) => (
    localStorage.setItem(key, JSON.stringify(tasks))
);

export const getTasksFromLocalStorage = (): TaskProps => {
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as TaskProps) : { tasks: [] };
};