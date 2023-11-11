import { useState } from 'react';
import "./style.css";

const Form = (props) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedTaskContent = newTaskContent.trim();
        if (trimmedTaskContent === "") {
            return null;
        }
        props.addNewTask(trimmedTaskContent);
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__textInput"
                placeholder="What is there to do?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <button
                className="form__submitButton"
            >
                Add task
            </button>
        </form>
    );
};

export default Form;