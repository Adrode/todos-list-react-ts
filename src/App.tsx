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
            <Route path={toTask()} element={<TaskPage />} />
            <Route path={toTasks()} element={<TasksPage />} />
            <Route path={toAuthor()} element={<AuthorPage />} />
            <Route path="/" element={<Navigate to={toTasks()} />} />
        </Routes>
    </HashRouter >
);

export default App;