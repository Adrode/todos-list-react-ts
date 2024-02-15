import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, toggleHideDone, hideDone, toggleAllDone }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <StyledButtons>
            <Button
                onClick={toggleHideDone}
            >
                {hideDone ? "Show" : "Hide"} done tasks
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={toggleAllDone}
            >
                Mark all tasks as done
            </Button>
        </StyledButtons>
    );
};

export default Buttons;