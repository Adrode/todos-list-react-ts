import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { selectTasks, toggleHideDone, toggleAllDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (tasks.length === 0) {
        return null;
    }

    return (
        <StyledButtons>
            <Button
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Show" : "Hide"} done tasks
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={() => dispatch(toggleAllDone())}
            >
                Mark all tasks as done
            </Button>
        </StyledButtons>
    );
};

export default Buttons;