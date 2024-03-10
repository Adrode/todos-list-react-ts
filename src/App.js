import { NavLink, Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/AuthorPage";

const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/tasks">
                        Tasks
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/author">
                        About author
                    </NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/tasks/:id">
                    <TaskPage />
                </Route>
                <Route path="/tasks">
                    <TasksPage />
                </Route>
                <Route path="/author">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/tasks" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);

export default App;