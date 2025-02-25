import { useState, useRef, FormEventHandler } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { StyledForm, Button } from "./styled";
import Input from "../../Input";
import { addTask } from "../../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const trimmedTaskContent = newTaskContent.trim();
        if (trimmedTaskContent === "") {
            return null;
        }

        dispatch(addTask({
            id: Number(nanoid()),
            content: trimmedTaskContent,
            done: false,
        }));

        setNewTaskContent("");
        inputRef.current!.focus()
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                placeholder="What is there to do?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>
                Add task
            </Button>
        </StyledForm>
    );
};

export default Form;