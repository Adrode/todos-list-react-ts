import "./style.css";

const Tasks = (props) => (
    <ul className="list__tasksList">
        {props.tasks.map(task => (

            <li
                key={task.id}
                className={`list__listItem ${task.done && props.hideDone ? "list__listItem--hidden" : ""}`}
            >
                <button
                    className="list__listButton"
                    onClick={() => props.toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`list__taskData ${task.done ? " list__taskData--done" : ""}`}>
                    {task.id} - {task.content}
                </span>
                <button
                    className="list__listButton list__listButton--changedBackground"
                    onClick={() => props.removeTask(task.id)}
                >
                    🗑
                </button>
            </li>)
        )}
    </ul>
);

export default Tasks;