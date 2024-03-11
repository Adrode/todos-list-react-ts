import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoadingStatus } from "../tasksSlice";
import { FeatureButton, StyledButtons } from "../FeatureButton";

const Loading = () => {
    const dispatch = useDispatch();
    const loadingStatus = useSelector(selectLoadingStatus);

    return (
        <StyledButtons>
            <FeatureButton
                disabled={loadingStatus ? true : false}
                onClick={() => dispatch(fetchExampleTasks())}
            >
                {loadingStatus ? "Loading..." : "Download example tasks"}
            </FeatureButton>
        </StyledButtons>
    )
};

export default Loading;