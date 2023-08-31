import "./style.css";

const Tasks = (props) => (
    <ul className="list__tasksList">
        {props.tasks.map(task => (
            <li
                className={`list__listItem ${task.done && props.hideDoneTasks ? "list__listItem--hidden" : ""}`}
            >
                <button className="list__listButton">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`list__taskData ${task.done ? " list__taskData--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__listButton list__listButton--changedBackground">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;