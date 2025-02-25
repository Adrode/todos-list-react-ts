import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/AuthorPage";
import Navigation from "./Navigation";
import { toTasks, toTask, toAuthor } from "./routes";

const App = () => (
    <HashRouter>
        <Navigation />
        <Routes> 
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route path="/">
                <Navigate to={toTasks()} />
            </Route>
        </Routes>
    </HashRouter>
);

export default App;