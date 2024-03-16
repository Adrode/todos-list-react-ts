import { Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { StyledNav, StyledList, StyledListElement, StyledNavLink } from "./styled";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/AuthorPage";

const App = () => (
    <HashRouter>
        <StyledNav>
            <StyledList>
                <StyledListElement>
                    <StyledNavLink to="/tasks">
                        Tasks
                    </StyledNavLink>
                </StyledListElement>
                <StyledListElement>
                    <StyledNavLink to="/author">
                        About author
                    </StyledNavLink>
                </StyledListElement>
            </StyledList>
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
        </StyledNav>
    </HashRouter>
);

export default App;