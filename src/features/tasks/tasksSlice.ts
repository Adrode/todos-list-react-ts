import { Task } from "./types";
import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

interface InitialStateProps {
    tasks: Task[];
    hideDone: boolean;
    loading: boolean;
};

const initialState: InitialStateProps = {
    tasks: getTasksFromLocalStorage().tasks ?? [],
    hideDone: false,
    loading: false,
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<string>) => {
            let index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks.splice(index, 1);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, action: PayloadAction<string>) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        toggleAllDone: (state) => {
            for (const task of state.tasks) {
                task.done = true;
            };
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
    },
});

const selectTasksState = (state: RootState) => state.tasks;

export const {
    addTask,
    removeTask,
    toggleHideDone,
    toggleTaskDone,
    toggleAllDone,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} = tasksSlice.actions;

export const selectTasks = (state: RootState) => selectTasksState(state).tasks;
export const selectHideDone = (state: RootState) => selectTasksState(state).hideDone;

export const selectIsEveryTaskDone = (state: RootState) =>
    (selectTasks(state) || []).every(({ done }) => done);

export const selectIsTasksListEmpty = (state: RootState) =>
    selectTasks(state).length === 0;

export const selectTaskById = (state: RootState, taskId: string) =>
    selectTasks(state).find(({ id }) => id === String(taskId));

export const selectTasksByQuery = (state: RootState, query: string) => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === "") {
        return tasks;
    };

    return selectTasks(state).filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};

export const selectLoadingStatus = (state: RootState) => selectTasksState(state).loading;

export default tasksSlice.reducer;