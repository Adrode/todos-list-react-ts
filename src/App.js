import { NavLink, Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Tasks from "./features/tasks/Tasks";
import { Author } from "./features/tasks/Author";

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
                <Route path="/tasks">
                    <Tasks />
                </Route>
                <Route path="/author">
                    <Author />
                </Route>
                <Route path="/">
                    <Redirect to="/tasks" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);

export default App;