import { StyledTasks, Element, Button, Content } from "./styled";

const TasksList = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
    <StyledTasks>
        {tasks.map(task => (

            <Element
                key={task.id}
                hidden={task.done && hideDone}
            >
                <Button
                    $toggleDone
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content
                    $done={task.done}
                >
                    {task.id} - {task.content}
                </Content>
                <Button
                    $remove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Element>)
        )}
    </StyledTasks>
);

export default TasksList;