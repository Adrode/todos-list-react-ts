import { Task } from "./types";
import { call, delay, put, takeLatest, select, takeEvery } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSuccess, fetchExampleTasksError } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

type TaskProps = { tasks: Task[] };

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks: TaskProps = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Something went wrong!");
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks: TaskProps = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    console.log("Saga is connected!");
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};