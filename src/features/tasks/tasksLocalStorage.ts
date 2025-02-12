import { Task } from "./types";

type TaskProps = { tasks: Task[] };

const key = "tasks";

export const saveTasksInLocalStorage = (tasks: TaskProps) => (
    localStorage.setItem(key, JSON.stringify(tasks))
);

export const getTasksFromLocalStorage = () => (
    JSON.parse(localStorage.getItem(key)) || []
);