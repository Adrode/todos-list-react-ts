import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
    yield delay(1000);
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch(error) {
        yield call(alert, "Something went wrong!");
    }
};

export function* watchFetchExampleTasks() {
    console.log("Saga is connected!");
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
};