import { useState, useRef } from 'react';
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedTaskContent = newTaskContent.trim();
        if (trimmedTaskContent === "") {
            return null;
        }
        addNewTask(trimmedTaskContent);
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                placeholder="What is there to do?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button
                onClick={() => inputRef.current.focus()}
            >
                Add task
            </Button>
        </StyledForm>
    );
};

export default Form;