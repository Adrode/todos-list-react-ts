import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { StyledTasks, Element, Button, Content } from "./styled";
import { selectTasks, selectHideDone, removeTask, toggleTaskDone } from "../../tasksSlice";

const TasksList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
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
                        <Link to={`/tasks/${task.id}`}>{task.content}</Link>
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