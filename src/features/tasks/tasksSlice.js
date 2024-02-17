import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
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
    },
});

const selectTasksState = state => state.tasks;

export const {
    addTask,
    removeTask,
    toggleHideDone,
    toggleTaskDone,
    toggleAllDone
} = tasksSlice.actions;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectIsTasksListEmpty = state => selectTasks(state).length === 0;
export default tasksSlice.reducer;