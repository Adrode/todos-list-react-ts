import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        removeTask: ({ tasks }, { payload: id }) => {
            let index = tasks.findIndex(task => task.id === id);
            tasks.splice(index, 1);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: id }) => {
            const index = tasks.findIndex(task => task.id === id);
            tasks[index].done = !tasks[index].done;
        },
        toggleAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            };
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    },
});

const selectTasksState = state => state.tasks;

export const {
    addTask,
    removeTask,
    toggleHideDone,
    toggleTaskDone,
    toggleAllDone,
    fetchExampleTasks,
    setTasks,
} = tasksSlice.actions;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectIsTasksListEmpty = state => selectTasks(state).length === 0;

export const selectTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);

export default tasksSlice.reducer;