import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { selectTaskById } from "../tasksSlice";
import { Container } from "../../../common/Container";
import { RootState } from "../../../store";

const TaskPage = () => {
    const { id } = useParams();
    const taskId = id ? String(id) : null;

    const task = useSelector((state: RootState) => (
        taskId ? selectTaskById(state, taskId) : undefined
    ));

    return (
        <Container>
            <Header title="Task details" />
            <Section
                title={task ? task.content : "Task not found"}
                body={task ?
                    <><strong>Completed: </strong>{task.done ? "Yes" : "No"}</>
                    : "Task content not found"
                }
            />
        </Container>
    )
};

export default TaskPage;