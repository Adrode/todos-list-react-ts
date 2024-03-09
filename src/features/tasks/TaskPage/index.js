import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { selectTaskById } from "../tasksSlice";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => selectTaskById(state, id));

    return (
        <>
            <Header title="Task details" />
            <Section
                title={task ? task.content : "Task not found"}
                body={task ?
                    <><strong>Completed: </strong>{task.done ? "Yes" : "No"}</>
                    : ""
                }
            />
        </>
    )
};

export default TaskPage;