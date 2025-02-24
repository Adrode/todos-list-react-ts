import { useSelector, useDispatch } from "react-redux";
import { StyledTasks, Element, Button, Content, StyledNavLink } from "./styled";
import { selectHideDone, removeTask, toggleTaskDone, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";
import { toTask } from "../../../../routes";
import { RootState } from "../../../../store";

const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName()) ?? "";

    const tasks = useSelector((state: RootState) => selectTasksByQuery(state, query));
    const hideDone = useSelector((state: RootState) => selectHideDone(state));
    const dispatch = useDispatch();

    return (
        <StyledTasks>
            {tasks.map(task => (

                <Element
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        $toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content
                        $done={task.done}
                    >
                        <StyledNavLink to={toTask({ id: String(task.id) })}>
                            {task.content}
                        </StyledNavLink>
                    </Content>
                    <Button
                        $remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Element>)
            )}
        </StyledTasks>
    )
};

export default TasksList;