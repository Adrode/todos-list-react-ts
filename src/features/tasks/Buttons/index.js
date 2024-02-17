import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { selectHideDone, selectIsEveryTaskDone, selectIsTasksListEmpty, toggleHideDone, toggleAllDone } from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const isTasksListEmpty = useSelector(selectIsTasksListEmpty);

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {!isTasksListEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Show" : "Hide"} done tasks
                    </Button>
                    <Button
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(toggleAllDone())}
                    >
                        Mark all tasks as done
                    </Button>
                </>
            )}
        </StyledButtons>
    );
};

export default Buttons;