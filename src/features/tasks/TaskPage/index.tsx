import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { selectTaskById } from "../tasksSlice";
import { Container } from "../../../common/Container";
import { RootState } from "../../../store";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector((state: RootState) => selectTaskById(state, Number(id)));

    return (
        <Container>
            <Header title="Task details" />
            <Section
                title={task ? task.content : "Task not found"}
                body={task ?
                    <><strong>Completed: </strong>{task.done ? "Yes" : "No"}</>
                    : undefined
                }
            />
        </Container>
    )
};

export default TaskPage;