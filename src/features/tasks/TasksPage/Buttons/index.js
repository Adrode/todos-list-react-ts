import { useSelector, useDispatch } from "react-redux";
import { FeatureButton, StyledButtons } from "../../FeatureButton";
import {
    selectHideDone,
    selectIsEveryTaskDone,
    selectIsTasksListEmpty,
    toggleHideDone,
    toggleAllDone,
} from "../../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const isTasksListEmpty = useSelector(selectIsTasksListEmpty);

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {!isTasksListEmpty && (
                <>
                    <FeatureButton
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Show" : "Hide"} done tasks
                    </FeatureButton>
                    <FeatureButton
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(toggleAllDone())}
                    >
                        Mark all tasks as done
                    </FeatureButton>
                </>
            )}
        </StyledButtons>
    );
};

export default Buttons;